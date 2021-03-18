import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { Button, CardMedia, Chip, Dialog } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import clsx from "clsx";
// import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import dateFormat from "dateformat";
import fp from "lodash/fp";
import { articleActions } from "../../reducers/article/articleReducer";
import SettingsList from "../SettingsList/SettingsList";
import { commentActions } from "../../reducers/comment/commentReducer";
import ArticleForm from "../ArticleForm/ArticleForm";
import CommentsPresentation from "../CommentsPresentation/CommentsPresentation";
import useStyles from "./Article.style";

const Article = ({
  article = { author: {}, tagList: [], favoritesCount: 0 },
}) => {
  const classes = useStyles();
  const { author, tagList } = article;
  const [favoritedInfo, setFavoritedInfo] = useState({
    favorited: article.favorited,
    favoritesCount: article.favoritesCount,
  });
  const [openDetails, setOpenDetails] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const dispatch = useDispatch();
  const {
    userReducer: { user },
    commentReducer: { comments },
    articleReducer: {
      updateArticle: { success: updateArticle_success },
    },
  } = useSelector(fp.identity);

  // eslint-disable-next-line no-unused-vars
  const handleClickFavorite = fp.curry((slug, e) => {
    setFavoritedInfo((prev) => ({
      favorited: true,
      favoritesCount: prev.favoritesCount + 1,
    }));
    dispatch(articleActions.FAVORITE_ARTICLE({ slug }));
  });

  // eslint-disable-next-line no-unused-vars
  const handleClickUnfavorite = fp.curry((slug, e) => {
    setFavoritedInfo((prev) => ({
      favorited: false,
      favoritesCount: prev.favoritesCount - 1,
    }));
    dispatch(articleActions.UNFAVORITE_ARTICLE({ slug }));
  });

  const handleClickViewDetails = () => {
    setOpenDetails(true);
    dispatch(
      commentActions.GET_COMMENTS_FROM_AN_ARTICLE({ slug: article.slug })
    );
  };

  const handleClickSettings = () => setOpenSettings(true);

  const handleOnCloseSettingsList = () => setOpenSettings(false);

  const articleSettingsList = [
    {
      name: "UPDATE",
      handleClick: () => setOpenEditForm(true),
    },
    {
      name: "DELETE",
      handleClick: () => setOpenConfirm(true),
    },
    { name: "CANCEL", handleClick: () => setOpenSettings(false) },
  ];

  const confirmList = [
    {
      name: "DELETE",
      handleClick: () =>
        dispatch(articleActions.DELETE_ARTICLE({ slug: article.slug })),
    },
    { name: "CANCEL", handleClick: () => setOpenConfirm(false) },
  ];

  const handleCloseEditForm = () => setOpenEditForm(false);

  useEffect(() => {
    if (updateArticle_success) {
      setOpenEditForm(false);
      setOpenSettings(false);
    }
  }, [updateArticle_success]);

  const handleCloseConfirm = () => setOpenConfirm(false);

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Typography variant="subtitle1" component="h6">
            {article.title}
          </Typography>
        }
        aria-label="title"
        role="header"
        className={classes.noPaddingBottom}
      />
      <CardHeader
        avatar={
          <Button
            aria-label="author"
            color="inherit"
            className={classes.imageWrapper}
          >
            {author.image ? (
              <CardMedia className={classes.cover} image={author.image} />
            ) : (
              <AccountCircleIcon
                fontSize="large"
                className={classes.cover}
                color="primary"
              />
            )}
          </Button>
        }
        action={
          fp.isEqual(author.username, user.username) && (
            <IconButton aria-label="settings" onClick={handleClickSettings}>
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={author.username}
        subheader={dateFormat(article.createdAt, "fullDate")}
        aria-label="author-info"
        role="header"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textPrimary"
          component="p"
          role="figure"
          aria-label="body"
        >
          {article.body}
        </Typography>
      </CardContent>
      <CardContent className={classes.noPaddingVertical}>
        <Typography
          variant="caption"
          color="textSecondary"
          component="p"
          role="figure"
          aria-label="description"
        >
          {article.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.noPaddingVertical}>
        {favoritedInfo.favorited ? (
          <IconButton
            aria-label="unfavorite"
            onClick={handleClickUnfavorite(article.slug)}
          >
            <FavoriteIcon color="error" />
          </IconButton>
        ) : (
          <IconButton
            aria-label="favorite"
            onClick={handleClickFavorite(article.slug)}
          >
            <FavoriteBorderIcon />
          </IconButton>
        )}
      </CardActions>

      <CardContent className={classes.noPaddingVertical}>
        <Typography
          variant="body2"
          component="p"
          role="figure"
          aria-label="number-of-favorites"
        >
          favorites {favoritedInfo.favoritesCount}
        </Typography>
      </CardContent>
      <CardContent role="figure" aria-label="tag-list">
        {fp.map(
          (tag) => (
            <Chip
              key={tag}
              size="small"
              label={`#${tag}`}
              className={classes.margin_2}
            />
          ),
          tagList
        )}
      </CardContent>
      <CardContent
        className={clsx(classes.noPaddingVertical, classes.padding_bottom_10)}
      >
        <Button
          variant="outlined"
          size="small"
          color="primary"
          fullWidth
          aria-label="view-comments"
          onClick={handleClickViewDetails}
        >
          View Comments..
        </Button>
      </CardContent>

      <CommentsPresentation
        article={article}
        comments={comments}
        open={openDetails}
        handleClose={setOpenDetails}
      />

      {fp.isEqual(author.username, user.username) && (
        <>
          <SettingsList
            open={openSettings}
            handleClose={handleOnCloseSettingsList}
            settingsList={articleSettingsList}
          />

          <SettingsList
            open={openConfirm}
            handleClose={handleCloseConfirm}
            settingsList={confirmList}
            title="Are you sure you want to delete it?"
          />

          <Dialog open={openEditForm} onClose={handleCloseEditForm} fullWidth>
            <ArticleForm article={article} />
          </Dialog>
        </>
      )}
    </Card>
  );
};

export default Article;
