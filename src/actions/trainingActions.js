import * as firebase from 'firebase';

import {
  TRAININGS_RECEIVED
} from './types'

export const getTrainings = () => dispatch => {
  firebase.database().ref("Trainings")
    .on('value', snapshot => {
      dispatch({ type: TRAININGS_RECEIVED, payload: snapshot.val() })
    })
}
