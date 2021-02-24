import { all } from "redux-saga/effects";
import user_mock_service from "../../apis/user/user-mock-service";
import { userActions } from "../../reducers/user/userReducer";
import { watchSaga } from "../../utils/utils";

export default function* userSaga() {
  yield all([
    watchSaga(userActions.REGISTRATION, user_mock_service.registration),
  ]);
}
