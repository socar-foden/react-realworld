import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: `calc(100% - 64px)`,
    overflowX: "scroll",
  },
}));

export default useStyles;
