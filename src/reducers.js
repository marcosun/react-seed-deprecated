import { combineReducers } from 'redux';

import { ADD_COUNT } from './actions';

const count = (state = 0, action) => {
  switch(action.type) {
    case ADD_COUNT:
      return state + 1;
    default:
      return state;
  }
};

const Reducers = combineReducers({
  count,
});

export default Reducers;