import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Dashboard from './src/screens/Dashboard';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Dashboard/>
      </View>
    );
  }
}
