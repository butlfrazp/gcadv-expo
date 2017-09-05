import {
  chatChanged,
  messageSent,
  messageFetched
} from './../../src/actions/chatActions'

import {
  CHAT_TEXT_CHANGED,
  MESSAGE_FETCH_SUCCESS,
  LOADING_MESSAGE,
  MESSAGE_SENT,
  MESSAGE_FAILED
} from './../../src/actions/types';

describe('chat actions', () => {
  it('should change text', () => {
    expect(chatChanged('test'))
    .toEqual({
      type: CHAT_TEXT_CHANGED,
      payload: 'test'
    });
  });

  it('should send message', () => {
    expect(messageSent('1', 'this is a test', '1234214'))
    .toEqual({
      type: MESSAGE_SENT
    })
  });
});
