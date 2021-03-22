import { all } from "redux-saga/effects";
// import user_service from "../../apis/user/mock_user_service";
import user_service from "../../apis/user/user_service";
import { userActions } from "../../reducers/user/userReducer";
import utils from "../../utils/utils";

export default function* userSaga() {
  yield all([
    utils.watchSaga(userActions.REGISTRATION.type, user_service.registration),
    utils.watchSaga(
      userActions.AUTHENTICATION.type,
      user_service.authentication
    ),
    utils.watchSaga(
      userActions.GET_CURRENT_USER.type,
      user_service.getCurrentUser
    ),
    utils.watchSaga(userActions.UPDATE_USER.type, user_service.updateUser),
  ]);
}
