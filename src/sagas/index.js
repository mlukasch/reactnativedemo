import * as effects from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../api';

const rootSaga = function*() {
  yield effects.takeEvery(actions.FETCH_RECORDS, fetchRecordRunner);
};

const fetchRecordRunner = function*() {
  console.log('fetchRecordRunner');
  const response = yield effects.call(api.fetchRecords);
  console.log('Saga: ' + JSON.stringify(response.data));

};

export default rootSaga;
