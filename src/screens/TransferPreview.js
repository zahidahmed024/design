import React, {Component} from 'react';
import {View, Text,ScrollView, StyleSheet, Dimensions, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Timeline from 'react-native-timeline-flatlist';
import Example from '../practice/Flat';
const window = Dimensions.get('window');

export default class TransferPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
        {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
        {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
        {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
        {time: '16:30', title: 'Event 5', description: 'Event 5 Description'},
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.tobBar}>
          <View style={styles.IconLeft}>
            <Icon name="ios-arrow-back" size={30} />
          </View>

          <View style={styles.tobBarHeading}>
            <Text
              style={{
                fontFamily: 'sans-serif',
                lineHeight: 35,
                fontWeight: 'bold',
                color:'#025B82',
                fontSize: 20,
              }}>
              Transfer Preview
            </Text>
          </View>
          <View style={styles.IconLeft}></View>
        </View>
        {/* main */}
          {/* <ScrollView> */}
        <View style={styles.mainSection}>
          <View
            style={{
              padding: 30,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}>
            <Text style={styles.abouttitle}>You send</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.amount}>500.00</Text>
              <Text style={styles.currency}>USD</Text>
            </View>
          </View>
          <View style={{padding: 30}}>
            <Text style={styles.abouttitle}>
              They will receive
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.amount}>5,185.01</Text>
              <Text style={styles.currency}>KSH</Text>
            </View>
          </View>
          <View style={{padding:30, backgroundColor:'#F3FBFF',flexDirection:'row'}}>
            <View style={{width:1,height:95,marginTop:-30, backgroundColor:'#EAF0F3'}}></View>
            <View style={{marginLeft:-6}}>
            <Text style={{color:'white',marginRight:5}}>{'\u2B24'}<Text style={{color:'black',marginLeft:10}} > Exchange rate</Text></Text>
            <Text style={{color:'white',marginRight:10}}>{'\u2B24'}<Text style={{color:'black'}} > Transfer fee</Text></Text>
            <Text style={{color:'white',marginRight:10}}>{'\u2B24'}<Text style={{color:'black'}} > Regulation charge</Text> </Text>
            <Text style={{color:'white',marginRight:10}}>{'\u2B24'}<Text style={{color:'black'}} > tax </Text> </Text>
            </View>
          </View>

          
        </View>
            {/* </ScrollView> */}
        {/* main end */}
        <View style={{marginTop:50,borderRadius:10, padding: 10,width: window.width-60,backgroundColor:'blue'}}>
            <Text style={[{alignSelf:'center',},styles.abouttitle]}>
              Total to pay
            </Text>
            <View style={{alignSelf:'center', width:window.width-60,height:2,backgroundColor:'red'}}>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems:'center'
              }}>
              <Text style={{fontSize:30}}>1244.00</Text>
            </View>
          </View>
        
        <View style={{padding:30,position:'absolute',bottom:0, justifyContent:'center',alignItems:'center', width:window.width,height:80,borderWidth:1, borderColor:'#F3F3F3'}} >
        <TouchableOpacity style={{width: window.width-60,height:50,borderRadius:10, justifyContent:'center',alignItems:'center', backgroundColor:'#FAE11B'}}>
            <Text style={[styles.currency,{color:'#448060'}]}>Add reciept detail</Text>
        </TouchableOpacity>
        </View>
         
      </View>
        
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#FAFAFA'
  },
  tobBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: window.width,
    height: 60,
    padding: 15,
  },
  IconLeft: {},
  tobBarHeading: {},
  mainSection: {
    // flex: 1,
    width: window.width - 60,
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: 'white',
    borderRadius:10,
  },

  amount:{lineHeight: 35, fontSize: 20 ,fontWeight:'bold', color:'#025B82'},
  currency:{lineHeight: 35, fontSize: 20 ,fontWeight:'bold',color:'#0682BB'},
 abouttitle:{lineHeight: 35, fontSize: 20,color:'#84AFC0'}
});
