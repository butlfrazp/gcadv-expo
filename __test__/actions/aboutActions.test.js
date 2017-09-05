import { missionSelected, missionClosed } from './../../src/actions/aboutActions';

import {
  MISSION_SELECTED,
  MISSION_CLOSED
} from './../../src/actions/types';

describe('About actions', () => {
  it('should select mission', () => {
    expect(missionSelected('test'))
    .toEqual({
      type: MISSION_SELECTED,
      payload: 'test'
    })
  });

  it('should close mission', () => {
    expect(missionClosed())
    .toEqual({
      type: MISSION_CLOSED
    })
  });
});
