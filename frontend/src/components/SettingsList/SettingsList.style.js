import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  deleteButton: {
    color: theme.palette.error.main,
  },
  item: {
    textAlign: "center",
  },
}));

export default useStyles;
