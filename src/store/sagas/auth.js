import firebase from 'firebase';
import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import apiFirebase from '~/services/firebase';

import AuthActions from '../ducks/auth';

const authProvider = new firebase.auth.GoogleAuthProvider();

export function* SignIn() {
  try {
    const { idToken } = yield call(
      apiFirebase.auth.signInWithPopup,
      authProvider,
    );

    // Storing accessToken in localStorage
    // localStorage.setItem('@studay:idToken', idToken);

    const { displayName } = firebase.auth().currentUser;
    const { photoURL } = firebase.auth().currentUser;
    const { uid } = firebase.auth().currentUser;
    const { metadata } = firebase.auth().currentUser;

    yield put(AuthActions.signInSuccess(idToken));
    yield put(push('/dashboard'));
  } catch (error) {
    yield put(AuthActions.signInFailure(error));
  }
}
