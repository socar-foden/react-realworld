import { all } from "redux-saga/effects";
import userSaga from "./user/userSaga";
import articleSaga from "./article/articleSaga";
import commentSaga from "./comment/commentSaga";
import profileSaga from "./profile/profileSaga";

export default function* rootSaga() {
  yield all([userSaga(), articleSaga(), commentSaga(), profileSaga()]);
}
