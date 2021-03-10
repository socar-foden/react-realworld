import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
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
