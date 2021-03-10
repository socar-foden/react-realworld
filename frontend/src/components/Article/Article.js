import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { Button, Chip, TextField } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import fp from "lodash/fp";
import useStyles from "./Article.style";

const Article = ({ article = { tagList: [] } }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Button
            aria-label="author"
            color="inherit"
            // onClick={handleClickSignOutIcon}
          >
            <AccountCircleIcon fontSize="large" />
          </Button>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
        aria-label="info"
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
        <IconButton aria-label="favorite">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>

      <CardContent className={classes.noPaddingVertical}>
        <Typography
          variant="body2"
          component="p"
          role="figure"
          aria-label="number-of-favorites"
        >
          favorites {article.favoritesCount}
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
          article.tagList
        )}
      </CardContent>
      <CardContent
        role="figure"
        aria-label="comments"
        className={classes.noPaddingVertical}
      >
        <Typography paragraph>Method:</Typography>
        <Typography paragraph>
          Heat 1/2 cup of the broth in a pot until simmering, add saffron and
          set aside for 10 minutes.
        </Typography>
      </CardContent>
      <CardContent>
        <TextField
          label="Add a comment.."
          multiline
          size="small"
          fullWidth
          rowsMax={4}
          variant="filled"
          inputProps={{ role: "input", "aria-label": "add-comment" }}
        />
      </CardContent>
    </Card>
  );
};

export default Article;
