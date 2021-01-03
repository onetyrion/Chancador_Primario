import bgImage from "assets/img/bgCandelaria.jpg";
import { makeStyles } from "@material-ui/core/styles";
export const stylesLogin = makeStyles((theme) => ({
  windows: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    // zIndex: "3",
    // position:"center"
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // zIndex: "4",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  success: {
    borderColor: "green",
  },
  background: {
    position: "fixed",
    height: "100%",
    width: "100%",
    display: "block",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundImage: "url(" + bgImage + ")",
    // "&:after": {
    //   opacity: "0.8",
    //   backgroundColor: "#000",
    //   position: "absolute",
    //   zIndex: "2",
    //   width: "100%",
    //   height: "100%",
    //   content: '""',
    //   display: "block",
    // }
  },
}));
