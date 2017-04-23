import { Text, View } from 'react-native';
import * as React from 'react';

export default ({ title }) => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{title}</Text>
  </View>
);

const styles = {
  textStyle: {
    fontSize: 24,
  },
  viewStyle: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: 60,
    paddingTop: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
};
