import { typeKeys } from './types';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { signInSuccess, signInFail } from './actions';
import { signIn } from '../../utils/authenticationApi';

const API_ENDPOINT = '';

function* handleLogin() {
    try {
        // To call async functions, use redux-saga's `call()`.
        const res = yield call(signIn, API_ENDPOINT);
    
        if (res.error) {
          yield put(signInFail(res.error));
        } else {
          yield put(signInSuccess(res));
        }
      } catch (err) {
        if (err instanceof Error) {
          yield put(signInFail(err.stack!));
        } else {
          yield put(signInFail('An unknown error occured.'));
        }
      }
}

function* watchFetchRequest() {
    yield takeEvery(typeKeys.SIGNIN, handleLogin);
  }
  
  // We can also use `fork()` here to split our saga into multiple watchers.
function* loginSaga() {
yield all([fork(watchFetchRequest)]);
}
  
export default loginSaga;