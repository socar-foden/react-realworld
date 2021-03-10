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
    justifyContent: "center",
    width: 210,
    padding: theme.spacing(1, 2),
    paddingBottom: `${theme.spacing(1)}px !important`,
  },
  cover: {
    width: 80,
    height: "80px",
    borderRadius: "50%",
  },
  marginTop: {
    marginTop: theme.spacing(1),
  },
  imageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
  },
}));

export default useStyles;
