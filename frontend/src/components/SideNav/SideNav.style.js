import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
    color: theme.palette.primary.main,
  },
  formControl: {
    marginTop: "auto",
    padding: theme.spacing(2),
  },
}));

export default useStyles;
