import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types And Creators */
const { Types, Creators } = createActions({
  signInRequest: null,
  signInSuccess: ['accessToken'],
  signInFailure: ['error'],
});

export const AuthTypes = Types;
export default Creators;

// The initial state
const INITIAL_STATE = Immutable({
  signedIn: !!localStorage.getItem('@studay:idToken'),
  idToken: localStorage.getItem('@studay:idToken') || null,
});

// Reducers
export const success = (state, { idToken }) => state.merge({ signedIn: true, idToken });

export const failure = (state, { error }) => state.merge({ signedIn: false, error });

// Map our action types to our reducer functions
const HANDLERS = {
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_IN_FAILURE]: failure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
