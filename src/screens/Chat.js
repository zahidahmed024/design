import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IIcon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/Fontisto';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import HelpCenterHeader from '../components/HelpCenterHeader';
import Message from '../components/Message';
const window = Dimensions.get('window');

export default class HelpCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, msg: 'Hi Kelly, Good morning. How can I help you'},
        {id: 2, msg: 'Hello, I how can I access my latest transactions'},
        {
          id: 1,
          msg: 'Sorry, please select an option below to enable me help you,',
        },
        {id: 1, msg: 'Hi Kelly, Good morning. How can I help you'},
        {id: 2, msg: 'Hello, I how can I access my latest transactions'},
        {
          id: 1,
          msg: 'Sorry, please select an option below to enable me help you,',
        },
        {id: 1, msg: 'Hi Kelly, Good morning. How can I help you'},
        {id: 2, msg: 'Hello, I how can I access my latest transactions'},
        {
          id: 1,
          msg: 'Sorry, please select an option below to enable me help you,',
        },
        {id: 1, msg: 'Hi Kelly, Good morning. How can I help you'},
        {id: 2, msg: 'Hello, I how can I access my latest transactions'},
        {
          id: 1,
          msg: 'Sorry, please select an option below to enable me help you,',
        },
      ],
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <HelpCenterHeader />
        <ScrollView>
          {this.state.data.map((item, index) => {
            return <Message key={index} data={item} />;
          })}
        </ScrollView>
        <View style={styles.bottomContainer}>
          <FAIcon style={{paddingHorizontal: 14}} name="plus-circle" size={24} />
          <FAIcon style={{paddingHorizontal: 14}} name="camera" size={24} />
          <FAIcon style={{paddingHorizontal: 14}} name="image" size={24} />
          <MIcon style={{paddingHorizontal: 12}} name="keyboard-voice" size={24} />

          <TextInput
            style={styles.textInput}
            //   onChangeText={text => onChangeText(text)}
            // value={'apatoto nai'}
            placeholder="send message...."
          />
          <FAIcon style={{paddingHorizontal: 16}} name="send-o" size={24} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    // borderColor: 'black',
    // borderWidth: 1,
  },
  helpCenter: {
    // fontFamily: 'sans-serif',
    // lineHeight: 35,
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 36,
    letterSpacing: 0.48,
    textAlign: 'left',
    color: '#005b82',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    height: 52,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#e5e5ea',
  },
  textInput: {
    width: 124,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.12)',
  },
});
