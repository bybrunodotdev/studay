import { all } from 'redux-saga/effects';

import { userSagas } from './auth';

export default function* rootSaga() {
  yield all([...userSagas]);
}
