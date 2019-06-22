import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// Import reducers
import { reducer as auth } from './auth';

export default history => combineReducers({
  router: connectRouter(history),
  auth,
});
