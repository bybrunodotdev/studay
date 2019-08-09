import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// Import reducers
import { reducer as auth } from './auth';
export default combineReducers({
  router: connectRouter(history),
  auth,
});
