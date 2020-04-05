import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Text,
  Alert,
} from 'react-native';
import Dashboard from './src/screens/Dashboard';
import TransferPreview from './src/screens/TransferPreview';
import Language from './src/screens/Language';
import DeliveryOptions from './src/screens/DeliveryOptions';
import ActionSheet from './src/screens/ActionSheet';
import HelpCenter from './src/screens/HelpCenter';
import Chat from './src/screens/Chat';
// import New from './src/screens/New';
import Test from './src/screens/Test';
import TavNav from './src/components/TabNav';
import Example from './src/practice/Flat';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // <Chat />
      // <HelpCenter />

      // // <View style={{flex:1}}>
      // <New/>
       <Dashboard/> 
      //   {/* <TavNav/> */}
      //   {/* <AsyncData /> */}
      //   {/* <Example /> */}
      //   {/* <TransferPreview /> */}
      //   {/* <Language /> */}
      //   {/* <Test /> */}
      //   <ActionSheet />
      //   {/* <DeliveryOptions /> */}
      // // </View>
    );
  }
}

{/* <View style={styles.curvedContainer}>
  <View style={styles.round}>
    <View style={styles.curved}></View>
  </View>
</View>;



// styles 
curvedContainer: {
  alignSelf: 'center',
  width: window.width,
  overflow: 'hidden',
  height: window.width / .9,
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
  height: window.width / .9,
  width: window.width,
  position: 'absolute',
  bottom: 0,
  marginLeft: window.width / 2,
  backgroundColor: colors.primary,
}, */}