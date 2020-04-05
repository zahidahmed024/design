import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import ActionSheet from 'react-native-actionsheet'


const options = [
<Text style={{alignSelf:'flex-start',paddingLeft:10, color: 'black'}}>select when yo would like the delivered</Text>, 
<Text style={{alignSelf:'flex-start',paddingLeft:10, color: 'black'}}>deliver immediately</Text>, 
<Text style={{alignSelf:'flex-start',paddingLeft:10, color: 'black'}}>deliver in 1 day </Text>,
<Text style={{alignSelf:'flex-start',paddingLeft:10, color: 'black'}}>deliver in 2 days </Text>, 
<Text style={{alignSelf:'flex-start',paddingLeft:10, color: 'black'}}>deliver in 3 days </Text>, 
]

export default class Test extends React.Component {
    constructor(props){
           super(props);
           this.state={
}   
    }
    

  showActionSheet = () => {
    this.ActionSheet.show()
  }
  render() {
    return (
      <View>
        <Button
        title='show'
        onPress={this.showActionSheet}
        />
        <ActionSheet
          ref={o => this.ActionSheet = o}
          title={<Text style={{color: 'red'}}>title </Text>
        }
          options={options}
        //   cancelButtonIndex={2}
          destructiveButtonIndex={1}
          onPress={(index) => { /* do something */ }}
        />
      </View>
    )
  }
}