import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  avatar: {
    backgroundColor: red[500],
  },
  margin_1: {
    margin: 1,
  },
  noPaddingVertical: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

export default useStyles;
