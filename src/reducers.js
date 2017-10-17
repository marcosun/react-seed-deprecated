import {ADD_COUNT} from './actions';

const count = (state = 0, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return state + 1;
    default:
      return state;
  }
};

const Reducers = {
  count,
};

export default Reducers;
