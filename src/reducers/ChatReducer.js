import {
  CHAT_TEXT_CHANGED,
  MESSAGE_FETCH_SUCCESS,
  LOADING_MESSAGE,
  MESSAGE_SENT,
  MESSAGE_FAILED
} from './../actions/types';

const INITIAL_STATE = {
  message: '',
  messages: [],
  loading: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CHAT_TEXT_CHANGED:
      return { ...state, message: action.payload };
    case MESSAGE_FETCH_SUCCESS:
      return { ...state, messages: action.payload };
    case LOADING_MESSAGE:
      return { ...state, loading: true }
    case MESSAGE_SENT:
      return { ...state, message: '', loading: false, error: ''};
    case MESSAGE_FAILED:
      return { ...state, loading: false, error: 'Could not send message' };
    default:
      return state;
  };
};
