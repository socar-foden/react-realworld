import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    width: 210,
  },
  cover: {
    width: 120,
    height: 118,
  },
  marginTop: {
    marginTop: theme.spacing(1),
  },
}));

export default useStyles;
