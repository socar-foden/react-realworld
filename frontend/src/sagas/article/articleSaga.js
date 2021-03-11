import { all } from "redux-saga/effects";
import article_service from "../../apis/article/article_service";
import { articleActions } from "../../reducers/article/articleReducer";
import utils from "../../utils/utils";

export default function* articleSaga() {
  yield all([
    utils.watchSaga(
      articleActions.CREATE_ARTICLE.type,
      article_service.createArticle
    ),
    utils.watchSaga(
      articleActions.LIST_ARTICLES.type,
      article_service.listArticles
    ),
    utils.watchSaga(
      articleActions.FAVORITE_ARTICLE.type,
      article_service.favoriteArticle
    ),
  ]);
}
