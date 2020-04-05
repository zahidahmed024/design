import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Timeline from 'react-native-timeline-flatlist'

export default class Example extends Component {
  constructor(){
    super()
    this.data = [
       {},
      { title: 'Event 1' },
      { title: 'Event 2' },
      { title: 'Event 3' },
      { title: 'Event 4' },
     
    ]
  } 

  render() {
    //'rgb(45,156,219)'
    return (
      <View style={styles.container}>
        <Timeline 
          style={styles.list}
          data={this.data}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
		backgroundColor:'white'
  },
  list: {
    flex: 1,
    marginTop:10
  },
});