import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: `calc(100% - 64px)`,
    overflowX: "scroll",
    display: "flex",
    justifyContent: "center",
  },
  accountContainer: {
    maxWidth: 1100,
  },
}));

export default useStyles;
