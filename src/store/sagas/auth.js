import firebase from 'firebase';
import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import apiFirebase from '~/services/firebase';

import AuthActions from '../ducks/auth';

const authProvider = new firebase.auth.GoogleAuthProvider();

export function* SignIn() {
  try {
    const { accessToken } = yield call(apiFirebase.auth.signInWithPopup, authProvider);

    // Storing accessToken in localStorage
    localStorage.setItem('@studay:accessToken', accessToken);

    yield put(AuthActions.signInSuccess({ accessToken }));
    yield put(push('/dashboard'));
  } catch (error) {
    yield put(AuthActions.signInFailure(error));
  }
}
