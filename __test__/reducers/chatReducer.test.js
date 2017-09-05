import chat from './../../src/reducers/ChatReducer';
import {
  CHAT_TEXT_CHANGED,
  MESSAGE_FETCH_SUCCESS,
  LOADING_MESSAGE,
  MESSAGE_SENT,
  MESSAGE_FAILED
} from './../../src/actions/types';

let state = {
  message: '',
  messages: [],
  loading: false,
  error: ''
}

describe('chat reducer', () => {

  it('has default state', () => {
    expect(chat(undefined, { type: 'undefined' })).toEqual({
      ...state
    });
  });

  it('should change text', () => {
    expect(chat(undefined, { type: CHAT_TEXT_CHANGED, payload: "t"}))
    .toEqual({
      ...state,
      message: 't'
    });
  });

  it('should recieve message', () => {
    expect(chat(undefined, { type: MESSAGE_FETCH_SUCCESS, payload: ["test", "test123", "test again"]}))
    .toEqual({
      ...state,
      messages: ["test", "test123", "test again"]
    })
  });

  it('should load messages', () => {
    expect(chat(undefined, { type: LOADING_MESSAGE }))
    .toEqual({
      ...state,
      loading: true
    });
  });

  it('should send messages', () => {
    expect(chat(undefined, { type: MESSAGE_SENT }))
    .toEqual({
      ...state,
      message: '',
      loading: false,
      error: ''
    });
  });

  it('should fail to send mesage', () => {
    expect(chat(undefined, { type: MESSAGE_FAILED}))
    .toEqual({
      ...state,
      loading: false,
      error: 'Could not send message'
    });
  });

});
