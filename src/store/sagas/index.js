import { all, takeLatest } from 'redux-saga/effects';

import { userSagas } from './auth';
import { AuthTypes } from '../ducks/auth';

export default function* rootSaga() {
  yield all([...userSagas]);
}
