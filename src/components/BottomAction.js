import React from 'react';
import {Text, View} from 'react-native';
import RoundCheckbox from './CheckBox';

export default BottomAction = ({h1, h2,check}) => (
  <View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal:30,
      paddingVertical:40,
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
        <Text
          style={{
            fontSize: 15,
            color: '#3D829F',
            fontWeight: 'bold',
            marginLeft: 20,
          }}>
          {h1} {'\n'}
          <Text
            style={{
              fontSize: 12,
              color: '#3D829F',
              fontWeight: 'bold',
              marginLeft: 20,
            }}>
            {h2}
          </Text>
        </Text>
      </View>
      <RoundCheckbox
        size={24}
        backgroundColor="#66E5AF"
        checked={check}
        onValueChange={newValue => {
          console.log(newValue);
        }}
      />
    </View>
  </View>
);
