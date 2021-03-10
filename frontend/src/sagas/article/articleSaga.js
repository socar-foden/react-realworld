import { all } from "redux-saga/effects";
import article_service from "../../apis/article/article_service";
import { articleActions } from "../../reducers/article/articleReducer";
import utils from "../../utils/utils";

export default function* articleSaga() {
  yield all([
    utils.watchSaga(
      articleActions.REGISTRATION.type,
      article_service.createArticle
    ),
  ]);
}
