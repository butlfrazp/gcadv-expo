import * as firebase from 'firebase';

import {
  CHAT_TEXT_CHANGED,
  MESSAGE_FETCH_SUCCESS,
  LOADING_MESSAGE,
  MESSAGE_SENT,
  MESSAGE_FAILED
} from './types';

export const chatChanged = text => {
  return {
    type: CHAT_TEXT_CHANGED,
    payload: text
  };
};

export const messageSent = ( eventId, message, user) => dispatch => {
  dispatch({ type: LOADING_MESSAGE })
  const ref = firebase.database().ref("/Events/" + eventId + "/messages").push().set({
    message,
    user
  })
  .then(() =>{
    dispatch({ type: MESSAGE_SENT });
  })
  .catch(() =>{
    dispatch({ type: MESSAGE_FAILED });
  });
}

export const messageFetched = eventId => dispatch => {
  firebase.database().ref("/Events/" + eventId + "/messages")
    .on('value', snapshot => {
      dispatch({ type: MESSAGE_FETCH_SUCCESS, payload: snapshot.val() });
    });
}
