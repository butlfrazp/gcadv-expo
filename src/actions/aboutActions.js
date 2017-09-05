import {
  MISSION_SELECTED,
  MISSION_CLOSED
} from './types';

export const missionSelected = (mission) => {
  return {
    type: MISSION_SELECTED,
    payload: mission
  }
}

export const missionClosed = () => {
  return { type: MISSION_CLOSED };
}
