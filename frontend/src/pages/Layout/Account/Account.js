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
  } = useSelector((rootReducer) => rootReducer);
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(-1);

  useEffect(() => {
    if (username) {
      dispatch(
        profileActions.GET_PROFILE({
          username,
        })
      );
      dispatch(
        articleActions.FEED_ARTICLES({
          queryParameters: {
            limit: LIMIT,
            offset: articles.length,
          },
        })
      );
      dispatch(
        articleActions.LIST_ARTICLES({
          queryParameters: {
            author: username,
            limit: LIMIT,
            offset: feeds.length,
          },
        })
      );
    }
  }, [username]);

  const dispatchListArticle = () => {
    const nextOffset = offset + 1;

    dispatch(
      articleActions.LIST_ARTICLES({
        queryParameters: {
          author: username,
          limit: LIMIT,
          offset: articles.length,
        },
      })
    );
    setOffset(nextOffset);
  };

  useEffect(() => {
    return () => {
      dispatch(articleActions.LIST_ARTICLES_INIT());
      dispatch(articleActions.FEED_ARTICLES_INIT());
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

          {fp.some(fp.identity, [
            !fp.isEmpty(articles) && articlesCount > articles.length,
            !fp.isEmpty(feeds) && feedsCount > feeds.length,
          ]) && (
            <IntersectionObserver
              next={dispatchListArticle}
              loading={listArticles_request || feedArticles_request}
            /> 
          )}
        </div>
      )}
    </>
  );
};

export default Account;
