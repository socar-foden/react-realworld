import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  cover: {
    width: "70%",
    height: "100%",
  },
  imageWrapper: {
    padding: 0,
  },
  info: {
    height: "80%",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  active: {
    display: "flex",
  },
  activeDetail: {
    marginRight: 30,
  },
  activeDetailHeader: {
    color: theme.palette.primary.light,
  },
  infoTop: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  editProfile: {
    marginLeft: "5%",
  },
}));

export default useStyles;
