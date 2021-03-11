import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { Button, CardMedia, Chip } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import clsx from "clsx";
// import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import dateFormat from "dateformat";
import fp from "lodash/fp";
import useStyles from "./Article.style";

const Article = ({
  article = { author: {}, tagList: [], favoritesCount: 0 },
}) => {
  const classes = useStyles();
  const { author, tagList } = article;
  const [favoritedInfo, setFavoritedInfo] = useState({
    favorited: author.favorited,
    favoritesCount: article.favoritesCount,
  });

  const handleClickFavorite = () => {
    setFavoritedInfo((prev) => ({
      favorited: !prev.favorited,
      favoritesCount: prev.favoritesCount + (prev.favorited ? -1 : 1),
    }));
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Typography variant="h6" component="h6">
            {article.title}
          </Typography>
        }
        aria-label="title"
        role="header"
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
              <AccountCircleIcon fontSize="large" className={classes.cover} />
            )}
          </Button>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
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
        <IconButton aria-label="favorite" onClick={handleClickFavorite}>
          {favoritedInfo.favorited ? (
            <FavoriteIcon color="error" />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
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
      {/* <CardContent>
        <TextField
          label="Add a comment.."
          multiline
          size="small"
          fullWidth
          rowsMax={4}
          variant="filled"
          inputProps={{ role: "input", "aria-label": "add-comment" }}
        />
      </CardContent> */}
      <CardContent
        className={clsx(classes.noPaddingVertical, classes.padding_bottom_10)}
      >
        <Button
          variant="outlined"
          size="small"
          color="primary"
          fullWidth
          aria-label="view-details"
        >
          View Details..
        </Button>
      </CardContent>
    </Card>
  );
};

export default Article;
