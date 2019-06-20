import { createReducer, createActions } from 'reduxsauce';
import { Immutable } from 'seamless-immutable';

/* Types And Creators */
const { Types, Creators } = createActions({
  signInSuccess: ['accessToken'],
  signInFailure: ['error'],
});

export const AuthTypes = Types;
export default Creators;

// The initial state
export const INITIAL_STATE = Immutable({
  signedIn: localStorage.getItem('studay:accessToken'),
  accessToken: localStorage.getItem('studay:accessToken') || null,
});

// Reducers
export const success = (state, { accessToken }) => state.merge({ signedIn: true, accessToken });

export const failure = (state, { error }) => state.merge({ signedIn: false, error });

// Map our action types to our reducer functions
export const HANDLERS = {
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_IN_FAILURE]: failure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
