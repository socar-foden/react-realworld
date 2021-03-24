import { Divider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fp from "lodash/fp";
import loadable from "@loadable/component";
import { articleActions } from "../../../reducers/article/articleReducer";
import { profileActions } from "../../../reducers/profile/profileReducer";
const AccountProfile = loadable(() =>
  import("../../../components/AccountProfile/AccountProfile")
);
const Progress = loadable(() =>
  import("../../../components/Progress/Progress")
);
const AccountContents = loadable(() =>
  import("../../../components/AccountContents/AccountContents")
);
const IntersectionObserver = loadable(() =>
  import("../../../components/IntersectionObserver/IntersectionObserver")
);

const LIMIT = 9;

const Account = ({ username = "" }) => {
  const {
    profileReducer: { profile },
    articleReducer: { articles, articlesCount, feeds, feedsCount },
    userReducer: {
      user,
      updateUser: { success: updateUser_success },
    },
  } = useSelector(fp.identity);
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(-1);

  const initContentsInfo = () => {
    dispatch(articleActions.LIST_ARTICLES_INIT());

    if (!fp.isEqual(profile.username, user.username)) {
      dispatch(articleActions.FEED_ARTICLES_INIT());
    }
  };

  const dispatchAllInfo = () => {
    initContentsInfo();
    dispatch(
      profileActions.GET_PROFILE({
        username,
      })
    );
    dispatchListArticle(0);

    if (!fp.isEqual(profile.username, user.username)) {
      dispatchFeedArticle(0);
    }
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
    if (!fp.isEqual(profile.username, user.username)) {
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
    }
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
            />
          )}
          {!fp.isEmpty(feeds) && feedsCount > feeds.length && (
            <IntersectionObserver
              next={() => dispatchFeedArticle(feeds.length)}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Account;
