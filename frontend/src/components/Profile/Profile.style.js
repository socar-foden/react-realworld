import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
  marginTop: {
    marginTop: theme.spacing(1),
  },
}));

export default useStyles;
