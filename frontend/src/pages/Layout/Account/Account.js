import { Divider } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fp from "lodash/fp";
import AccountProfile from "../../../components/AccountProfile/AccountProfile";
import Progress from "../../../components/Progress/Progress";
import { articleActions } from "../../../reducers/article/articleReducer";
import { profileActions } from "../../../reducers/profile/profileReducer";
import AccountContents from "../../../components/AccountContents/AccountContents";

const Account = ({ username = "" }) => {
  const {
    profileReducer: { profile },
    articleReducer: { articles, articlesCount, feeds, feedsCount },
  } = useSelector((rootReducer) => rootReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (username) {
      dispatch(
        profileActions.GET_PROFILE({
          username,
        })
      );
      dispatch(articleActions.FEED_ARTICLES());
      dispatch(
        articleActions.LIST_ARTICLES({ queryParameters: { author: username } })
      );
    }
  }, [username]);

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
        </div>
      )}
    </>
  );
};

export default Account;
