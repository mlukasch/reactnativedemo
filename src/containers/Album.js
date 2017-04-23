import React from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { fetchRecords } from '../actions/index';
import { Button, View } from 'react-native';

const Album = ({ fetchRecords }) => (
  <View>
    <Header title={'HUHUHUHU'} />
    <Button onPress={fetchRecords} title={'Holmal'} />
  </View>
);
export default connect(state => ({ state }), {
  fetchRecords,
})(Album);
