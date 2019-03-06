import constants from './../constants';
const { types } = constants;

const heroRegistryReducer = (state = {}, action) => {
  switch(action.type) {
  case types.ADD_NEW_HERO:
    return Object.assign({}, state, action.payload);
  default:
    return state;
  }
};

export default heroRegistryReducer;
