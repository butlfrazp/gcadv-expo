import {
  TOGGLE_DRAWER
} from '../actions/types';

const INITIAL_STATE = {
  open: true
}

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch(action.type) {
    case TOGGLE_DRAWER:
      return { ...state, open: action.payload };
    default:
      return state;
  };
};
