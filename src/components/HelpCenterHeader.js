import React from 'react';
import {Text, View,StyleSheet} from 'react-native';
import IIcon from 'react-native-vector-icons/Ionicons';


const HelpCenterHeader = ({params}) => (
    <View style={styles.header}>
          <View style={{flex: 1}}>
            <IIcon color="#3D829F" name="ios-arrow-back" size={30} />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.helpCenter}>Help Center</Text>
          </View>
          <View style={{flex: 1}}></View>
        </View>
);
const styles = StyleSheet.create({
    header: {
      padding: 20,
      height: 56,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FAFAFA',
      // borderColor: 'black',
      // borderWidth: 1,
    },
    helpCenter: {
      // fontFamily: 'sans-serif',
      // lineHeight: 35,
      fontFamily: 'Roboto',
      fontSize: 20,
      fontWeight: 'normal',
      fontStyle: 'normal',
      lineHeight: 36,
      letterSpacing: 0.48,
      textAlign: 'left',
      color: '#005b82',
    }, 
})
export default HelpCenterHeader;
