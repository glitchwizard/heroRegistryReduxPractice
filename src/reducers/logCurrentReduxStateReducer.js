import constants from './../constants';
const { types } = constants;

const printCurrentReduxStateReducer = (state = {}, action) => {
  console.log('\nprintCurrentReduxStateReducer state : \n', state);
  switch(action.type) {
  case types.LOG_CURRENT_STATE:
    console.log('current Redux State:', state);
    return state;
  default:
    return state;
  }
};

export default printCurrentReduxStateReducer;
