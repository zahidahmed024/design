import React, {Component} from 'react';
import {
  View,
  Picker,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Button,
  StatusBar,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {run} from '../constants/Images';
import colors from '../constants/Colors';
import string from '../constants/Strings';
import TabNav from '../components/TabNav';

const window = Dimensions.get('window');
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#0682BB" />
        <View style={styles.curvedContainer}>
          <View style={styles.round}>
            <View style={styles.curved}>
              <View style={styles.tophead}>
                {/* <Picker
                itemStyle={ {color :'black', fontSize:50}}
                  // selectedValue={this.state.language}
                  style={{height: 50, width: 100, color: 'white'}}
                  // onValueChange={(itemValue, itemIndex) =>
                  //   this.setState({language: itemValue})
                  // }
                >
                  <Picker.Item label="ENG" value="ENG" />
                  <Picker.Item label="BN" value="BN" />
                </Picker> */}
                <View style={{flexDirection:'row'}}>
                  <Image style={{width:30,height:20}} source={{uri:'https://images.vexels.com/media/users/3/163965/isolated/preview/5bb2c926d53cc59030477ec3ecb6d26a-england-flag-language-icon-by-vexels.png'}} />
                  <Text style={{color:'white',paddingLeft:5}}>ENG</Text>
                  <Icon
                  style={{color:'white',marginLeft:5,marginTop:-1}}
                  name="md-arrow-dropdown"
                   size={25}
                   />
                </View>

                <Icon
                  style={{color: 'white',marginTop:-5}}
                  name="ios-notifications-outline"
                  size={35}
                  // color="#900"
                />
              </View>

              <View style={styles.headingContainer}>
                <Text style={{fontSize: 35,fontWeight: "bold",fontFamily:'sans-serif-thin', color: 'white'}}>
                  {string.dashboard.topHeading}
                </Text>
                <Text style={{fontSize: 30, color: 'white',fontFamily:'sans-serif-thin',}}>
                  {string.dashboard.welcome}
                </Text>
              </View>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={run} />
                <Text
                  style={{fontSize: 35,fontFamily:'sans-serif-thin', fontStyle: 'italic', color: 'white',fontWeight: "bold"}}>
                  {string.dashboard.midHeading}
                </Text>
                <Text style={{fontSize: 15, color: 'white',fontStyle:'italic'}}>
                  {string.dashboard.midlower}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* <View style={{alignItems:'center'}}> */}
        <Text style={{fontSize: 25,fontWeight: "bold",fontFamily:'sans-serif-light', color:'#58ACD0',marginTop:40}}>
          {string.dashboard.moneyLine}
        </Text>
        {/* </View>     */}

        <View style={styles.box}>
          <View style={{alignSelf:'center'}}>
            <Text style={{color: '#4184A1',lineHeight: 35,fontWeight: "bold",fontFamily:'sans-serif-light', fontSize: 20}}>
            {string.dashboard.invite} 
            </Text>
            <Text style={{fontSize: 15,fontFamily:'Roboto', color: '#43A2CC'}}>
    {string.dashboard.sortQoute}
             </Text>
          </View>
          
          <Image style={styles.image2} source={run} />
        </View>

        <View style={{position:'absolute',bottom:0}}>

        <TabNav/>      
        </View>

    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.container,
    alignItems: 'center',
  },
  tophead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:20,
  },
  headingContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 35,
    alignItems: 'center',
  },
  image: {
    marginBottom:20,
    width: 80,
    height: 80,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 25,
  },
  image2: {
    marginBottom:20,
    width: 70,
    height: 70,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 25,
  },
  box: {
    padding: 15,
    marginTop: 40,
    width: window.width - 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    backgroundColor: 'white',
    borderRadius:10,
  },
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
  },
});
