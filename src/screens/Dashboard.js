import React, {Component} from 'react';
import {
  View,
  Picker,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Button,
  StatusBar,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {run} from '../constants/Images';
import colors from '../constants/Colors';
import string from '../constants/Strings';
const window = Dimensions.get('window');
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" />
        <View style={styles.curvedContainer}>
          <View style={styles.round}>
            <View style={styles.curved}>
              <View style={styles.tophead}>
                <Picker
                  // selectedValue={this.state.language}
                  style={{height: 50, width: 100, color: 'white'}}
                  // onValueChange={(itemValue, itemIndex) =>
                  //   this.setState({language: itemValue})
                  // }
                >
                  <Picker.Item label="ENG" value="ENG" />
                  <Picker.Item label="BN" value="BN" />
                </Picker>

                <Icon
                  style={{color: 'white'}}
                  name="bells"
                  size={30}
                  color="#900"
                />
              </View>

              <View style={styles.headingContainer}>
                <Text style={{fontSize: 35, color: 'white'}}>
                  {string.dashboard.topHeading}
                </Text>
                <Text style={{fontSize: 30, color: 'white'}}>
                  {string.dashboard.welcome}
                </Text>
              </View>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={run} />
                <Text
                  style={{fontSize: 35, fontStyle: 'italic', color: 'white'}}>
                  {string.dashboard.midHeading}
                </Text>
                <Text style={{fontSize: 15, color: 'white'}}>
                  {string.dashboard.midlower}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* <View style={{alignItems:'center'}}> */}
        <Text style={{fontSize: 35, color: colors.extra1}}>
          {string.dashboard.moneyLine}
        </Text>
        {/* </View>     */}

        <View style={styles.box}>
          <Text style={{color: 'blue', fontSize: 20}}>
            {string.dashboard.invite} {'\n'}
            <Text style={{fontSize: 15, color: colors.extra1}}>
              {string.dashboard.sortQoute}
            </Text>
          </Text>
          <Image style={styles.image} source={run} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.container,
    alignItems: 'center',
  },
  tophead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 35,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 25,
  },
  box: {
    padding: 10,
    marginTop: 10,
    width: window.width - 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    backgroundColor: 'white',
  },
  curvedContainer: {
    alignSelf: 'center',
    width: window.width,
    overflow: 'hidden',
    height: window.width / 1,
  },
  round: {
    borderRadius: window.width,
    width: window.width * 2,
    height: window.width * 2,
    marginLeft: -(window.width / 2),
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden',
  },
  curved: {
    height: window.width / 1,
    width: window.width,
    position: 'absolute',
    bottom: 0,
    marginLeft: window.width / 2,
    backgroundColor: colors.primary,
  },
});
