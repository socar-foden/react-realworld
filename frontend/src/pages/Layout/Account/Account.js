import { Divider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fp from "lodash/fp";
import AccountProfile from "../../../components/AccountProfile/AccountProfile";
import Progress from "../../../components/Progress/Progress";
import { articleActions } from "../../../reducers/article/articleReducer";
import { profileActions } from "../../../reducers/profile/profileReducer";
import AccountContents from "../../../components/AccountContents/AccountContents";
import IntersectionObserver from "../../../components/IntersectionObserver/IntersectionObserver";

const LIMIT = 9;

const Account = ({ username = "" }) => {
  const {
    profileReducer: { profile },
    articleReducer: {
      articles,
      articlesCount,
      listArticles: { request: listArticles_request },
      feeds,
      feedsCount,
      feedArticles: { request: feedArticles_request },
    },
    userReducer: {
      updateUser: { success: updateUser_success },
    },
  } = useSelector(fp.identity);
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(-1);

  const initContentsInfo = () => {
    dispatch(articleActions.LIST_ARTICLES_INIT());
    dispatch(articleActions.FEED_ARTICLES_INIT());
  };

  const dispatchAllInfo = () => {
    initContentsInfo();
    dispatch(
      profileActions.GET_PROFILE({
        username,
      })
    );
    dispatchListArticle(0);
    dispatchFeedArticle(0);
  };

  const dispatchListArticle = (articlesLength) => {
    const nextOffset = offset + 1;

    dispatch(
      articleActions.LIST_ARTICLES({
        queryParameters: {
          author: username,
          limit: LIMIT,
          offset: articlesLength,
        },
      })
    );
    setOffset(nextOffset);
  };

  const dispatchFeedArticle = (feedsLength) => {
    const nextOffset = offset + 1;

    dispatch(
      articleActions.FEED_ARTICLES({
        queryParameters: {
          author: username,
          limit: LIMIT,
          offset: feedsLength,
        },
      })
    );
    setOffset(nextOffset);
  };

  useEffect(() => {
    if (username) {
      dispatchAllInfo();
    }
  }, [username]);

  useEffect(() => {
    if (updateUser_success) {
      dispatchAllInfo();
    }
  }, [updateUser_success]);

  useEffect(() => {
    return () => {
      initContentsInfo();
    };
  }, []);

  return (
    <>
      {fp.isEmpty(profile) ? (
        <Progress />
      ) : (
        <div>
          <AccountProfile
            profile={profile}
            articlesCount={articlesCount}
            feedsCount={feedsCount}
          />

          <Divider />

          <AccountContents articles={articles} feeds={feeds} />

          {/* TODO: 추상화, 코드 정리 */}
          {!fp.isEmpty(articles) && articlesCount > articles.length && (
            <IntersectionObserver
              next={() => dispatchListArticle(articles.length)}
              loading={listArticles_request}
            />
          )}
          {!fp.isEmpty(feeds) && feedsCount > feeds.length && (
            <IntersectionObserver
              next={() => dispatchFeedArticle(feeds.length)}
              loading={feedArticles_request}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Account;
