import { all } from "redux-saga/effects";
import mock_user_service from "../../apis/user/mock_user_service";
import { userActions } from "../../reducers/user/userReducer";
import { watchSaga } from "../../utils/utils";

export default function* userSaga() {
  yield all([
    watchSaga(userActions.REGISTRATION, user_mock_service.registration),
  ]);
}
