import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RoundCheckbox from '../components/CheckBox';
// const window = Dimensions.get('window');

export default class Language extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      lnglist: [
        {
          lng: 'English',
          isSelected: true,
          img:
            'https://previews.123rf.com/images/maximmmmum/maximmmmum1310/maximmmmum131000166/23337238-british-union-jack-flag.jpg',
        },
        {
          lng: 'French',
          isSelected: false,
          img:
            'https://cdn.webshopapp.com/shops/94414/files/54002808/france-flag-icon-free-download.jpg',
        },
        {
          lng: 'Spanish',
          isSelected: false,
          img:
            'https://cdn.webshopapp.com/shops/94414/files/54944160/spain-flag-icon-free-download.jpg',
        },
        {
          lng: 'Portuguese',
          isSelected: false,
          img: 'https://cdn.countryflags.com/thumbs/portugal/flag-400.png',
        },
      ],
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {/* {this.state.lnglist.map(item=>{
             return( <Text>{JSON.stringify( item.lng)}</Text>)
          })} */}

        {/* topbar starts */}
        <View
          style={{
            padding: 20,
            height: 60,
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#FAFAFA',
          }}>
          <View style={{flex: 1}}>
            <Icon color="#3D829F" name="ios-arrow-back" size={30} />
          </View>
          <View style={{flex: 1,}}>
            <Text
              style={{
                // fontFamily: 'sans-serif',
                // lineHeight: 35,
                fontWeight: 'bold',
                color: '#3D829F',
                fontSize: 25,
              }}>
              Language
            </Text>
          </View>
          <View style={{flex: 1}}></View>
        </View>
        {/* topabr ends */}
        {/* list starts */}
        <View style={{flex: 1, padding: 20}}>
          <Text style={{color:'#3D829F' ,fontSize: 25,padding: 20, fontWeight: 'bold'}}>
            Select Your preferred{'\n'}langage
          </Text>

          <View style={{marginTop:30}}>
          {this.state.lnglist.map((item, index) => {
            return (
              <View
                style={{
                    justifyContent:'center',
                    // alignItems:'center',
                  padding: 20,
                //   marginTop: 30,
                  borderBottomWidth: 1,
                  borderBottomColor: '#C8DAE2',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={{width: 40, height: 40, borderRadius: 10}}
                      source={{uri: item.img}}
                    />
                    <Text style={{fontSize: 20,color:'#3D829F',fontWeight:'bold', marginLeft: 30}}>
                      {item.lng}
                    </Text>
                  </View>
                  <RoundCheckbox
                    size={24}
                    backgroundColor="#66E5AF"
                    checked={item.isSelected}
                    onValueChange={newValue => {
                      
                      console.log(newValue);
                    }}
                  />
                </View>
              </View>
            );
          })}
          </View>
        </View>
    {/* list ends */}

        <View style={{padding:20,position:'absolute',bottom:0, justifyContent:'center',alignItems:'center',paddingVertical:60,height:80,borderWidth:1, borderColor:'#F3F3F3'}} >
        <TouchableOpacity style={{paddingHorizontal:100,height:50,borderRadius:10, justifyContent:'center',alignItems:'center', backgroundColor:'#FAE11B'}}>
            <Text style={{fontWeight: 'bold',
                color: '#3D829F',
                fontSize: 20,}}>Select Language</Text>
        </TouchableOpacity>
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  //    container:{
  //       flex:1,
  //       padding:10
  //     //   justifyContent:"center"
  //    },
  //    tobBar: {
  //     flex:1,
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     // alignItems: 'center',
  //     // width: window.width,
  //     height: 60,
  //     padding: 15,
  //   },
});
