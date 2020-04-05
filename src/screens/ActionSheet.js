import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
// import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';
import RoundCheckbox from '../components/CheckBox';
import BottomAction from '../components/BottomAction';
export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.bs = React.createRef();
  }
  componentDidMount() {
    // this.bs.current.snapTo(0);
  }
  renderHead = () => {
    <View>
      <Text>asdasda</Text>
    </View>;
  };

  renderInner = () => (
    <View style={{flex: 1}}>
      <View
        style={{
          padding: 20,
          borderWidth: 1,
          height: 70,
          borderColor: '#C8DAE2',
          backgroundColor: '#FFFFFF',
          alignContent: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View style={{paddingLeft: 50, alignSelf: 'center'}}>
          <Text style={{fontSize: 10, fontWeight: 'bold'}}>
            select when you would like the money delivered
          </Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Image
            style={{width: 30, height: 30}}
            source={{
              uri:
                'https://pngimage.net/wp-content/uploads/2018/05/cancel-icon-png-7.png',
            }}
          />
        </View>
      </View>
      {/* /////////////////////////////////////////////// */}
      <BottomAction
        h1=" Deliver immediately"
        h2=" Transaction Fee - 3%"
        check={true}
      />
      <BottomAction
        h1=" Deliver in 1 day"
        h2=" Transaction Fee - 2%"
        check={false}
      />
      <BottomAction
        h1=" Deliver in 2 days time"
        h2=" Transaction Fee - 1%"
        check={false}
      />
      <BottomAction
        h1=" Deliver in 3 days time"
        h2=" Transaction Fee - 0%"
        check={false}
      />
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <BottomSheet
          ref={this.bs}
          snapPoints={[400, 200, 100, 0]}
          renderContent={this.renderInner}
          renderHeader={this.renderHead}
          initialSnap={3}
          enabledGestureInteraction={true}
          enabledInnerScrolling={true}
          enabledContentTapInteraction={true}
        />
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={styles.commandButton}
            onPress={() => {
              this.bs.current.snapTo(0);
              this.bs.current.snapTo(0);
            }}>
            <Text style={styles.panelButtonTitle}>show</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.commandButton}
            onPress={() => {
              this.bs.current.snapTo(3);
              this.bs.current.snapTo(3);
            }}>
            <Text style={styles.panelButtonTitle}>close</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const IMAGE_SIZE = 200;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    width: '100%',
    height: 50,
  },
  box: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  panelContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  commandButton: {
    padding: 20,
    // borderRadius: 10,
    backgroundColor: '#2D83E8',
    alignItems: 'center',
    margin: 7,
  },
  panel: {
    height: 600,
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
  header: {
    width: '100%',
    height: 50,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    // backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: 'yellow',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  photo: {
    width: '100%',
    height: 225,
    marginTop: 30,
  },
  map: {
    height: '100%',
    width: '100%',
  },
});
