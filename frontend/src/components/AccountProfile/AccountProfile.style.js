import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 1, 1, 1),
    width: "100%",
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
  button: {
    marginLeft: "5%",
  },
  cover: {
    width: "12vw",
    height: "12vw",
    borderRadius: "50%",
  },
  imageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  left: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default useStyles;
