import {
  MISSION_SELECTED,
  MISSION_CLOSED
} from './../actions/types';

const INITIAL_STATE = {
  selectedMission: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MISSION_SELECTED:
      return { ...state, selectedMission: action.payload };
    case MISSION_CLOSED:
      return { ...state = INITIAL_STATE };
    default:
      return state;
  }
}
