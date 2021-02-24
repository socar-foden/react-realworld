import { all, takeLatest, put } from "redux-saga/effects";
import { userActions } from "../../reducers/user/userReducer";

function* registration() {
   // TODO: 공통부분 분리 필요
  yield put({ type: userActions.REGISTRATION_SUCCESS.type });
}
function* watch_registration() {
  yield takeLatest(userActions.REGISTRATION, registration);
}

export default function* userSaga() {
  yield all([watch_registration()]);
}
