import { all, takeLatest, put } from "redux-saga/effects";
import { userActions } from "../../reducers/user/userReducer";

function* registration_request() {
   // TODO: 공통부분 분리 필요
  yield put({ type: userActions.registration_success.type });
}
function* watch_registration_request() {
  yield takeLatest(userActions.registration_request, registration_request);
}

export default function* userSaga() {
  yield all([watch_registration_request()]);
}
