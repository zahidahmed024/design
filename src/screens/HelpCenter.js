import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IIcon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/Fontisto';
import InfoRow from '../components/InfoRow';
import HelpCenterHeader from '../components/HelpCenterHeader';

const window = Dimensions.get('window');

export default class HelpCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {/* header starts   */}
        {/* <View style={styles.header}>
          <View style={{flex: 1}}>
            <IIcon color="#3D829F" name="ios-arrow-back" size={30} />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.helpCenter}>Help Center</Text>
          </View>
          <View style={{flex: 1}}></View>
        </View> */}
        <HelpCenterHeader />
        {/* header ends  */}

        <View style={styles.container}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.imageContainer}>
              <Image
                style={{marginTop: 20}}
                source={require('../assets/images/helpcenter.png')}
              />
            </View>

            <Text style={styles.helloCeline}>Hello, Celine!</Text>
            <Text style={styles.rafiki}>
              How can Rafiki help you today?{'\n'}
            </Text>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Let's Chat</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contactView}>
            <Text style={styles.contact}>CONTACT US</Text>

            <InfoRow ic="email" text="EMAIL US" link="rtinternational@ecobank.com" />
            <InfoRow ic="world-o" text="OUR WEBSITE" link="www.rtinternational.com" />
          </View>
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
  container: {
    flex: 1,
    marginTop: 31,
    alignItems: 'center',
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
  imageContainer: {
    alignItems: 'center',
    width: 170,
    height: 170,
    backgroundColor: '#e7e7e7',
    borderRadius: 100,
  },
  helloCeline: {
    marginTop: 28,
    fontFamily: 'Roboto',
    fontSize: 28,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 33,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#005b82',
  },
  rafiki: {
    // width: 216,
    // height: 18,
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '300',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0.41,
    textAlign: 'left',
    color: '#005b82',
  },
  buttonContainer: {
    width: 170,
    marginTop: 30,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#fbe100',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    width: 80,
    height: 24,
    fontFamily: 'Poppins',
    fontSize: 17,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: -0.41,
    textAlign: 'center',
    color: '#005b82',
  },
  contactView: {
    flex: 1,
    width: window.width,
    padding: 13,
    //   borderWidth: 1,
    marginTop: 74,
    //   borderColor: 'black',
  },
  contact: {
    width: 80,
    height: 16,
    fontFamily: 'Poppins',
    fontSize: 11,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 17,
    letterSpacing: 1,
    textAlign: 'left',
    color: '#0082bc',
    marginBottom: 11,
  },
 
});
