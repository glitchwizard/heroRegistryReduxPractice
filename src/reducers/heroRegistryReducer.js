import constants from './../constants';
const { types } = constants;

const heroRegistryReducer = (state = {}, action) => {
  console.log('heroRegistryReducer state : ', state);
  switch(action.type) {
  case types.ADD_NEW_HERO:
    return Object.assign({}, state, action.payload);
  default:
    return state;
  }
};

export default heroRegistryReducer;
