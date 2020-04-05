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
export default class New extends Component {
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

            </View>
          </View>
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
 
  curvedContainer: {
    alignSelf: 'center',
    width: window.width,
    overflow: 'hidden',
    height: window.width / 0.9,
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
    height: window.width / 0.9,
    width: window.width,
    position: 'absolute',
    bottom: 0,
    marginLeft: window.width / 2,
    backgroundColor: colors.primary,
  },
});
