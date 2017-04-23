import * as actions from '../actions';
import * as api from '../api';

const INITAL_STATE = {};

const rootReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case actions.FETCH_RECORDS:
      api.fetchRecords();
    default:
      return state;
  }
};

export default rootReducer;
