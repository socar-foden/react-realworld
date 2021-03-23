import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    color: theme.palette.primary.light,
  },
  iconWrapper: {
    marginTop: theme.spacing(20),
  },
}));

export default useStyles;
