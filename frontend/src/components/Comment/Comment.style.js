import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  inline: {
    margin: theme.spacing(0, 1, 0, 0),
  },
  cover: {
    width: 40,
    height: "40px",
    borderRadius: "50%",
  },
  imageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
  },
  settings: {
    alignSelf: "end",
    paddingRight: 0,
  },
  commentBody: {
    overflowWrap: "anywhere",
  },
}));

export default useStyles;
