import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign';

// import ButtomImage from '../assets/images/bottom_navigation.png'
const window = Dimensions.get('window');
export default class TabNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flexDirection: 'column', backgroundColor: 'transparent'}}>
        <View style={{height: 72, backgroundColor: 'transparent'}}>
          <ImageBackground
            source={require('../assets/images/bottom_navigation.png')}
            style={styles.bottom_section}>
            <View style={{flexDirection: 'row', flex: 1}}>
              <View style={styles.icon_container}>
                <TouchableOpacity
                  underlayColor={'transparent'}
                  onPress={() => {
                    onPress(BOTTOM_NAVIGATE.ACCOUNT);
                  }}>
                  <View style={{alignSelf: 'center'}}>
                    <Image
                      source={require('../assets/icons/recipient.png')}
                      style={styles.icon}
                    />
                    <Text>Recipient</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.icon_container}>
                <TouchableOpacity
                  underlayColor={'transparent'}
                  onPress={() => {
                    onPress(BOTTOM_NAVIGATE.ACCOUNT);
                  }}>
                  <View style={{alignSelf: 'center'}}>
                    <Image
                      source={require('../assets/icons/history.png')}
                      style={styles.icon}
                    />
                    <Text>History</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{width: 70}}></View>
              <View style={styles.icon_container}>
                <TouchableOpacity
                  underlayColor={'transparent'}
                  onPress={() => {
                    onPress(BOTTOM_NAVIGATE.ACCOUNT);
                  }}>
                  <View style={{justifyContent:'center', alignSelf: 'center'}}>
                    <Image
                      source={require('../assets/icons/profile.png')}
                      style={styles.icon}
                    />
                    <Text>Profile</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.icon_container}>
                <TouchableOpacity
                  underlayColor={'transparent'}
                  onPress={() => {
                    onPress(BOTTOM_NAVIGATE.MORE_PROFILE);
                  }}>
                  <View style={{alignSelf: 'center'}}>
                    <Image
                      source={require('../assets/icons/more.png')}
                      style={styles.icon}
                    />
                    <Text>More</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
        <TouchableOpacity
          underlayColor={'transparent'}
          style={{height: 72, marginTop: -62, width: 72, alignSelf: 'center'}}
          onPress={() => {
            onPress(BOTTOM_NAVIGATE.SEND_MONEY);
          }}>
          <Image
            source={require('../assets/icons/send.png')}
            style={styles.icon_mid}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    margin: 16,
  },
  bottom_section: {
    height: 56,
    backgroundColor: '#f5f6f8',
    borderStyle: 'solid',
    marginVertical: 25, /////////
    justifyContent: 'center',
    width: window.width,
  },
  icon: {
    width: 32,
    height: 32,
    alignSelf: 'center',
  },

  title: {
    fontSize: 12,
    letterSpacing: 0.19,
    textAlign: 'left',
    color: 'blue',
    alignSelf: 'center',
  },
  icon_mid: {
    width: 56,
    height: 56,
    marginBottom: 16,
    alignSelf: 'center',
  },
  icon_container: {
    height: 56,
    flex: 1,
    justifyContent: 'center',
  },
});
