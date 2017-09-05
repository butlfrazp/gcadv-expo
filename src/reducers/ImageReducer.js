import { IMAGE_LOADING } from '../actions/types'

const INITIAL_STATE = {
  loading: true
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case IMAGE_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
