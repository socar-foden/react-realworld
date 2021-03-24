import { Button, CardMedia, Dialog, Grid, Typography } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fp from "lodash/fp";
import CheckIcon from "@material-ui/icons/Check";
import { useTranslation } from "react-i18next";
import PersonIcon from "@material-ui/icons/Person";
import SettingsList from "../SettingsList/SettingsList";
import AccountForm from "../AccountForm/AccountForm";
import {
  CANCEL,
  DELETE,
  UPDATE,
  EDIT,
  ARTICLES,
  FEEDS,
  ARE_YOU_SURE_DELETE,
  FOLLOW,
  ARE_YOU_SURE_UNFOLLOW,
  UNFOLLOW,
} from "../../i18n/constants";
import { profileActions } from "../../reducers/profile/profileReducer";
import { userActions } from "../../reducers/user/userReducer";
import useStyles from "./AccountProfile.style";

const BASE_IMAGE = "https://static.productionready.io/images/smiley-cyrus.jpg";

const AccountProfile = ({
  profile = {},
  articlesCount = 0,
  feedsCount = 0,
}) => {
  const classes = useStyles();
  const {
    user,
    updateUser: { success: updateUser_success },
  } = useSelector((rootReducer) => rootReducer.userReducer);
  const imageRef = useRef();
  const dispatch = useDispatch();
  const [openSettings, setOpenSettings] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openUnfollowConfirm, setOpenUnfollowConfirm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const { t } = useTranslation();

  const handleClickImageButton = () => {
    if (fp.isEqual(user.username, profile.username)) {
      setOpenSettings(true);
    }
  };

  const handleChangeImageFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      dispatch(
        userActions.UPDATE_USER({
          userInfo: {
            image: reader.result,
          },
        })
      );
      setOpenSettings(false);
    };
  };

  const settingsList = [
    {
      name: t(UPDATE),
      handleClick: () => imageRef.current.click(),
    },
    {
      name: t(DELETE),
      handleClick: () => setOpenConfirm(true),
      disabled: fp.isEqual(BASE_IMAGE, profile.image),
    },
    { name: t(CANCEL), handleClick: () => setOpenSettings(false) },
  ];

  const handleCloseSettings = () => setOpenSettings(false);

  const confirmList = [
    {
      name: t(DELETE),
      handleClick: () => {
        dispatch(
          userActions.UPDATE_USER({
            userInfo: {
              image: BASE_IMAGE,
            },
          })
        );
        setOpenConfirm(false);
        setOpenSettings(false);
      },
      disabled: fp.isEqual(BASE_IMAGE, profile.image),
    },
    { name: t(CANCEL), handleClick: () => setOpenConfirm(false) },
  ];

  const unfollowConfirmList = [
    {
      name: t(UNFOLLOW),
      handleClick: () => {
        dispatch(profileActions.UNFOLLOW_USER({ username: profile.username }));
        setOpenUnfollowConfirm(false);
      },
    },
    { name: t(CANCEL), handleClick: () => setOpenUnfollowConfirm(false) },
  ];

  const handleCloseConfirm = () => setOpenConfirm(false);

  const handleCloseUnfollowConfirm = () => setOpenUnfollowConfirm(false);

  const handleClickEditProfile = () => setOpenEditForm(true);

  const handleCloseEditForm = () => setOpenEditForm(false);

  const handleClickFollow = () =>
    dispatch(
      profileActions.FOLLOW_USER({
        username: profile.username,
      })
    );

  const handleClickUnfollow = () => setOpenUnfollowConfirm(true);

  const followButtonMap = {
    [false]: (
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        aria-label="follow"
        onClick={handleClickFollow}
      >
        {t(FOLLOW)}
      </Button>
    ),
    [true]: (
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        aria-label="follow"
        onClick={handleClickUnfollow}
      >
        <PersonIcon />
        <CheckIcon />
      </Button>
    ),
  };

  useEffect(() => {
    if (updateUser_success) {
      setOpenEditForm(false);
    }
  }, [updateUser_success]);

  return (
    <>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={4} className={classes.left}>
          <Button
            role="figure"
            aria-label="image"
            color="inherit"
            className={classes.imageWrapper}
            onClick={handleClickImageButton}
          >
            {profile.image ? (
              <CardMedia className={classes.cover} image={profile.image} />
            ) : (
              <AccountCircleIcon
                fontSize="large"
                className={classes.cover}
                color="primary"
              />
            )}
          </Button>
          <input
            type="file"
            onChange={handleChangeImageFile}
            hidden
            ref={imageRef}
            accept="image/*"
          />
        </Grid>
        <Grid item xs={8}>
          <section className={classes.info}>
            <div className={classes.infoTop}>
              <Typography
                variant="h5"
                component="h1"
                role="figure"
                aria-label="username"
              >
                {profile.username}
              </Typography>

              {fp.isEqual(user.username, profile.username) ? (
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  aria-label="edit"
                  onClick={handleClickEditProfile}
                >
                  {t(EDIT)}
                </Button>
              ) : (
                followButtonMap[profile.following]
              )}
            </div>

            <div className={classes.active}>
              <Typography
                variant="body1"
                component="h4"
                className={classes.activeDetail}
                role="figure"
                aria-label="article-count"
              >
                <span className={classes.activeDetailHeader}>
                  {t(ARTICLES)}
                </span>{" "}
                {articlesCount}
              </Typography>
              {fp.isEqual(user.username, profile.username) && (
                <Typography
                  variant="body1"
                  component="h4"
                  className={classes.activeDetail}
                  role="figure"
                  aria-label="feed-count"
                >
                  <span className={classes.activeDetailHeader}>{t(FEEDS)}</span>{" "}
                  {feedsCount}
                </Typography>
              )}
            </div>
          </section>
        </Grid>
      </Grid>

      <SettingsList
        open={openSettings}
        handleClose={handleCloseSettings}
        settingsList={settingsList}
      />

      <SettingsList
        open={openConfirm}
        handleClose={handleCloseConfirm}
        settingsList={confirmList}
        title={t(ARE_YOU_SURE_DELETE)}
      />

      <SettingsList
        open={openUnfollowConfirm}
        handleClose={handleCloseUnfollowConfirm}
        settingsList={unfollowConfirmList}
        title={t(ARE_YOU_SURE_UNFOLLOW)}
      />

      <Dialog open={openEditForm} onClose={handleCloseEditForm} fullWidth>
        <AccountForm user={user} />
      </Dialog>
    </>
  );
};

export default AccountProfile;
