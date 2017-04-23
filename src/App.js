import React from 'react';
import { View, Text } from 'react-native';

export default () => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>HAlloossssssssssossoo</Text>
  </View>
);

const styles = {
  textStyle: {
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 24,
  },
  viewStyle: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
};
console.log("stylesssss")
