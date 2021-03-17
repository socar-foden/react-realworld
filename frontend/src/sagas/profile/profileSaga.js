import { all } from "redux-saga/effects";
import profile_service from "../../apis/profile/profile_service";
import { profileActions } from "../../reducers/profile/profileReducer";
import utils from "../../utils/utils";

export default function* userSaga() {
  yield all([
    utils.watchSaga(
      profileActions.GET_PROFILE.type,
      profile_service.getProfile
    ),
  ]);
}
