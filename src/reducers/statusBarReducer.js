import { HIDE_BAR } from '../actions/types';

const INITIAL_STATE = {
  hidden: false
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case HIDE_BAR:
      return { ...state, hidden: action.payload };
    default:
      return state;
  }
}
