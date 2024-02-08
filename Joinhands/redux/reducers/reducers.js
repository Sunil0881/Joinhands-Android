import { combineReducers } from 'redux';
import credentialsReducer from './authReducers';

const rootReducer = combineReducers({
  credentials: credentialsReducer,
  // other reducers...
});

export default rootReducer;
