import {
  TRAININGS_RECEIVED
} from './../actions/types';

const INITIAL_STATE = {
  trainings: []
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TRAININGS_RECEIVED:
      return { ...state, trainings: action.payload };
    default:
      return state;
  }
}
