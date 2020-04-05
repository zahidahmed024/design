import React from 'react';
import {Text, View,StyleSheet} from 'react-native';
import FIcon from 'react-native-vector-icons/Fontisto';

const InfoRow = ({ic,text,link}) => (
 <View style={styles.rowStyle}>
    <View style={styles.icon}>
      <FIcon name={ic} size={30} backgroundColor="#ffff" />
    </View>
    <View style={{flexDirection: 'column', paddingLeft: 17}}>
<Text style={styles.iconText}>{text}</Text>
<Text style={styles.link}>{link}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
rowStyle: {
    flexDirection: 'row',
    paddingVertical: 22,
    borderBottomColor: '#efeff4',
    borderBottomWidth: 1,
  },

  icon: {
    width: 37,
    height: 37,
    borderRadius: 6,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#efeff4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    // width: 45,
    height: 12,
    fontFamily: 'Poppins',
    fontSize: 9,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 13,
    letterSpacing: 0.82,
    textAlign: 'left',
    color: '#005b82',
  },
  link: {
    // width: 228,
    height: 21,
    fontFamily: 'Poppins',
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 23,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#005b82',
  },
})
export default InfoRow;
