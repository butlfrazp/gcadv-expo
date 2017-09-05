import  {
  PERFORMER_SELECTED
} from './../actions/types';

const INITIAL_STATE = {
  performer: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PERFORMER_SELECTED:
      return { ...state, performer: action.payload };
    default:
      return state;
  }
}
