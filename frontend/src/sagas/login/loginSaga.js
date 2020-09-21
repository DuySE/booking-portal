import { takeLatest, call, put } from 'redux-saga/effects';
import { actions as LoginActions, LOGIN } from '../../reducers/login';
import { login } from '../../apis/login.js';

function* handleLogin(action) {
  const { username, password } = action;
  try {
    const { res } = yield call(login, username, password);
    if (res) {
      localStorage.setItem('user', res);
      yield put(LoginActions.loginSuccess(res.data));
    }
  } catch (error) {
    yield put(LoginActions.loginFailed(error.message || error));
  }
}

export default function* loginRootSaga() {
  yield takeLatest(LOGIN, handleLogin);
}
