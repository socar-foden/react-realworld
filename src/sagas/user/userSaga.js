import { all } from "redux-saga/effects";
import mock_user_service from "../../apis/user/mock_user_service";
import user_service from "../../apis/user/user_service";
import { userActions } from "../../reducers/user/userReducer";
import utils from "../../utils/utils";

export default function* userSaga() {
  yield all([
    utils.watchSaga(userActions.REGISTRATION, mock_user_service.registration),
    utils.watchSaga(userActions.AUTHENTICATION, mock_user_service.authentication),
  ]);
}
