import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Animated, Text, Alert } from 'react-native';
import Dashboard from './src/screens/Dashboard';
import TavNav from './src/components/TabNav';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Dashboard/>
        {/* <TavNav/> */}
        {/* <AsyncData /> */}
      </View>
    );
  }
}
