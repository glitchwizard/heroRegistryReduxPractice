import constants from './../constants';
const { types } = constants;

const heroRegistryReducer = (state = {}, action) => {
  console.log('\nheroRegistryReducer state : \n', state, '\n');
  switch(action.type) {
  case types.ADD_NEW_HERO: {
    console.log('things');
    let newState = Object.assign( {}, state, action.payload);
    return newState;
  }
  default:
    return state;
  }
};

export default heroRegistryReducer;
