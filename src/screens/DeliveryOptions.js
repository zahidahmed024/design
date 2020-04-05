import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RoundCheckbox from '../components/CheckBox';

export default class DeliveryOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isSelected:false,
        data:[
            {
              option: 'Ecobank account',
              img:
                'https://cdn4.iconfinder.com/data/icons/business-and-finance-170/68/55-512.png',
                isSelected:true,
            },
            {
              option: 'Other bank',
              img:
                'https://img.pngio.com/download-for-free-10-png-cash-icon-top-images-at-carlisle-theatre-2019-cash-icon-png-980_750.png',
                isSelected:false,
            },
            {
                option: 'Mobile money',
              img:
                'https://cdn0.iconfinder.com/data/icons/phone-36/32/Mobile-phone-smartphone-telephone-01-512.png',
                isSelected:false,
            },
            {
                option: 'Xpress account',
              img: 'https://cdn4.iconfinder.com/data/icons/business-and-finance-170/68/55-512.png',
              isSelected:false,
            },
            {
              option: 'Cash',
              img: 'https://img.pngio.com/download-for-free-10-png-cash-icon-top-images-at-carlisle-theatre-2019-cash-icon-png-980_750.png',
              isSelected:false,
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
            // flex:1,
            paddingVertical: 20,
            paddingHorizontal:10,
            height: 60,
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#FAFAFA',
          }}>
          <View style={{flex: 1}}>
            <Icon color="#3D829F" name="ios-arrow-back" size={30} />
          </View>
          <View style={{flex: 9,}}>
            <Text
              style={{
                // fontFamily: 'sans-serif',
                // lineHeight: 35,
                fontWeight: 'bold',
                color: '#3D829F',
                fontSize: 24,
              }}>
             Select how money is delivered
            </Text>
          </View>
          {/* <View style={{flex: 1}}></View> */}
        </View>
        {/* topbar ends */}

        {/* list starts */}
        <View style={{flex: 1, padding: 15}}>
          <Text style={{color:'#3D829F' ,fontSize: 18,padding: 10, fontWeight: 'bold'}}>
          How would your recipient like to receive the money?
          </Text>
     
  {this.state.data.map((item,index)=>{
 return(
          <View style={{}}>
              <View
                style={{
                    justifyContent:'center',
                    // alignItems:'center',
                marginTop: 10,
                padding:13,
                borderRadius:10,
                backgroundColor:`${item.isSelected?'#0682BB':'white'}`,

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
                      style={{width: 30, height: 30, borderRadius: 10,marginLeft:5}}
                      source={{uri: item.img}}
                    />
                    <Text style={{fontSize: 20,color:`${item.isSelected?'yellow':'#3D829F'}`, marginLeft: 30}}>
                      {item.option}
                    </Text>
                  </View>
                  <RoundCheckbox
                    size={24}
                    backgroundColor="white"
                    iconColor="#3D829F"
                    checked={item.isSelected}
                    onValueChange={newValue => {  
                        this.setState({
                             isSelected:!this.state.isSelected,
                            })               
                      console.log(this.state.isSelected);
                    }}
                  />
                </View>
              </View>  
          </View>
 )
  })}


        </View>
    {/* list ends */}

        </View>
    );
  }
}
