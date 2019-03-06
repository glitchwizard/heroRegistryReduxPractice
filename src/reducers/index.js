import { combineReducers } from 'redux';
import heroRegistryReducer from './heroRegistryReducer';
import logCurrentReduxStateReducer from './logCurrentReduxStateReducer';

const rootReducer = combineReducers({
  heroRegistry: heroRegistryReducer,
  dummySlice: logCurrentReduxStateReducer
});

export default rootReducer;
