import {
  FETCHING_EVENTS,
  EVENTS_RECEIVED,
  EVENTS_FAILED,
  GO_TO_EVENT
} from './../actions/types';

const INITIAL_STATE = {
  loading: false,
  events: [],
  event: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCHING_EVENTS:
      return { ...state, loading: true };
    case EVENTS_RECEIVED:
      return { ...state, events: action.payload, loading: false };
    case GO_TO_EVENT:
      return { ...state, event: action.payload }
    default:
      return state;
  }
}
