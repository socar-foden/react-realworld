import { Button, CardMedia, Grid, Typography } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import fp from "lodash/fp";
import { userActions } from "../../reducers/user/userReducer";
import useStyles from "./AccountProfile.style";

const AccountProfile = ({
  profile = {},
  articlesCount = 0,
  feedsCount = 0,
}) => {
  const classes = useStyles();
  const {
    user: { username },
  } = useSelector((rootReducer) => rootReducer.userReducer);
  const imageRef = useRef();
  const dispatch = useDispatch();

  const handleClickImageButton = () => {
    // TODO: image delete 다이어로그 분기 추가
    imageRef.current.click();
  };

  const handleChangeImageFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      // setImage(reader.result);
      dispatch(
        userActions.UPDATE_USER({
          userInfo: {
            image: reader.result,
          },
        })
      );
    };
  };

  return (
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

            {fp.isEqual(username, profile.username) && (
              <Button
                variant="outlined"
                color="primary"
                className={classes.editProfile}
                aria-label="edit"
              >
                Edit Profile
              </Button>
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
              <span className={classes.activeDetailHeader}>Articles</span>{" "}
              {articlesCount}
            </Typography>
            {fp.isEqual(username, profile.username) && (
              <Typography
                variant="body1"
                component="h4"
                className={classes.activeDetail}
                role="figure"
                aria-label="feed-count"
              >
                <span className={classes.activeDetailHeader}>Feeds</span>{" "}
                {feedsCount}
              </Typography>
            )}
          </div>
        </section>
      </Grid>
    </Grid>
  );
};

export default AccountProfile;
