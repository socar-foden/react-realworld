import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  deleteButton: {
    color: theme.palette.error.main,
  },
  item: {
    textAlign: "center",
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

export default useStyles;
