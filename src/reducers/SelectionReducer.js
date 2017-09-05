import {
  SELECT_ABOUT
} from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case SELECT_ABOUT:
      return action.payload;
    default:
      return state;
  }
}
