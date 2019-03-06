import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const addNewHero = (name, powers) => ({
  type: types.ADD_NEW_HERO,
  payload: {
    [v4()] : {
      name: name,
      powers: powers
    }
  }
});

