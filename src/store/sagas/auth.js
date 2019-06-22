import firebase from 'firebase';
import {
  all, call, put, fork, takeEvery,
} from 'redux-saga/effects';
import { push } from 'connected-react-router';
import apiFirebase from '~/services/firebase';

import AuthActions, { AuthTypes } from '../ducks/auth';

const authProvider = new firebase.auth.GoogleAuthProvider();

function* SignIn() {
  try {
    const { idToken } = yield call(
      apiFirebase.auth.signInWithPopup,
      authProvider,
    );

    // Storing accessToken in localStorage
    localStorage.setItem('@studay:idToken', idToken);

    const { uid } = firebase.auth().currentUser;
    const { displayName } = firebase.auth().currentUser;
    const { photoURL } = firebase.auth().currentUser;

    const data = {
      idToken,
      uid,
      displayName,
      photoURL,
    };

    yield put(AuthActions.signInSuccess(data));
    yield put(push('/dashboard'));
  } catch (error) {
    yield put(AuthActions.signInFailure(error));
  }
}

//= ====================================
//  WATCHERS
//-------------------------------------

export function* signInRequest() {
  yield all([takeEvery(AuthTypes.SIGN_IN_REQUEST, SignIn)]);
}

//= ====================================
//  ROOT
//-------------------------------------

export const userSagas = [fork(signInRequest)];
