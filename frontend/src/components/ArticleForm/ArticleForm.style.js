import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default useStyles;
