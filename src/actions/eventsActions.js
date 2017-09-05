import * as firebase from 'firebase';

import {
  FETCHING_EVENTS,
  EVENTS_RECEIVED,
  EVENTS_FAILED,
  GO_TO_EVENT
} from './types';

export const getEvents = () => dispatch => {
  dispatch({ type: FETCHING_EVENTS });
  firebase.database().ref("Events")
    .on('value', snapshot => {
      dispatch({ type: EVENTS_RECEIVED, payload: snapshot.val() });
    });
}

export const goToEvent = event => {
  return {
    type: GO_TO_EVENT,
    payload: event
  };
};
