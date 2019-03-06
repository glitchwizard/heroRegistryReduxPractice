import heroRegistryReducer from './../../src/reducers/heroRegistryReducer';
import * as actions from './../../src/actions';

let initialState = {};

describe('Hero Registry', () => {
  describe('heroRegistryReducer', () => {
    it('Should accept and return initial state.', () => {
      expect (heroRegistryReducer(initialState, {type: null})).toEqual(initialState);
    });

    it('Should update the redux state with hero name and powers', () => {
      const result = heroRegistryReducer(initialState, actions.addNewHero('Iron Man', 'Flying'));
      expect(result[Object.keys(result)[0]]).toEqual(
        {
          name: 'Iron Man',
          powers: 'Flying'
        });
      
    });
  });
});
