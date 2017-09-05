import {
  EVENT_ID
} from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case EVENT_ID:
      return action.payload;
    default:
      return state;
  }
}
