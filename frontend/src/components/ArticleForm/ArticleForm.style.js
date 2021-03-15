import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
    margin: theme.spacing(1),
  },
  margin: {
    margin: theme.spacing(1),
  },
  margin_2: {
    margin: 2,
  },
}));

export default useStyles;
