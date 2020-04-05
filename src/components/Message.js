import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Message = ({data}) => (
  <View>
    {data.id == 1 ? (
      <View style={{flex: 1, marginTop: 22, flexDirection: 'row'}}>
        <View
          style={styles.from}>
          <Text style={styles.chatText}>{data.msg}</Text>
        </View>

        <View
          style={styles.fromExt}></View>
      </View>
    ) : (
      <View style={{flex: 1, flexDirection: 'row-reverse'}}>
        <View
          style={styles.to}>
          <Text style={styles.chatText}>{data.msg}</Text>
        </View>

        <View
          style={styles.toExt}></View>
      </View>
    )}

    {/* divider */}
  </View>
);
const styles = StyleSheet.create({
  chatText: {
    padding: 16,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'left',
  },
  from:{
    maxWidth: 275,
    // height: 120,
    marginLeft: 24,
    marginBottom: 14,
    backgroundColor: '#e5e5ea',
    borderRadius: 11,
  },
  fromExt:{
    //   width:100,
    position: 'absolute',
    left: 24,
    bottom: 0,
    width: 0,
    height: 0,
    borderBottomWidth: 23,
    borderBottomColor: 'transparent',
    borderLeftWidth: 35,
    borderLeftColor: '#e5e5ea',
    // borderRightWidth: 55,
    // borderRightColor: 'red',
  },
  to:{
    maxWidth: 275,
    // height: 120,
    marginRight: 24,
    marginBottom: 3,
    backgroundColor: '#fbe100',
    borderRadius: 11,
  },
  toExt:{
    //   width:100,
    position: 'absolute',
    left: 24,
    bottom: 0,
    width: 0,
    height: 0,
    borderBottomWidth: 23,
    borderBottomColor: 'transparent',
    borderRightWidth: 35,
    borderRightColor: '#fbe100',
    // borderRightWidth: 55,
    // borderRightColor: 'red',
  }
});
export default Message;
