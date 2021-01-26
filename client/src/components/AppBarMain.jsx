import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import LogoTrans from "../assets/images/logo-trans.png";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80px",
    marginBottom:"20px"
  },
  appbar: {
    background: "#ffffff",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "#fff",
  },
  btn1: {
    color: "#b6e717",
    borderColor: "#27a3ff",
    backgroundColor:"#181818",
    margin: 10,
    "&:hover": {
      color: "#fff",
      borderColor: "#fff",
      backgroundColor: "#2ba2ff",
    },
  },
  btn2: {
    color: "#181818",
    borderColor: "#2ba2ff",
    backgroundColor:"#b6e717",
    margin: 10,
    "&:hover": {
      color: "#fff",
      borderColor: "#fff",
      backgroundColor: "#2ba2ff",
    },
  },
  btn3: {
    color: "#2ba2ff",
    borderColor: "#2ba2ff",
    backgroundColor:"#181818",
    margin: 10,
    "&:hover": {
      color: "#fff",
      borderColor: "#fff",
      backgroundColor: "#2ba2ff",
    },
  },
}));

export default function AppBarMain(props) {
  const classes = useStyles();
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <h1 className={classes.appbarTitle}>
            <Link to="/">
              <img src={LogoTrans} alt="logoImg" height="40px" />
            </Link>
          </h1>
          {props.home ? (
            <Button
              variant="outlined"
              startIcon={<HomeIcon />}
              className={classes.btn1}
              href="/"
            >
              Home
            </Button>
          ) : null}
          {props.admin ? (
            <Button
              variant="outlined"
              startIcon={<SupervisorAccountIcon />}
              className={classes.btn3}
              href="/admin"
              size="small"
            >
              Admin
            </Button>
          ) : null}
          {props.signup ? (
            <Button
              variant="outlined"
              startIcon={<BorderColorIcon />}
              className={classes.btn1}
              href="/signup"
              size="small"
            >
              Sign Up
            </Button>
          ) : null}
          {props.signin ? (
            <Button
              variant="outlined"
              startIcon={<LockOpenIcon />}
              className={classes.btn2}
              href="/signin"
              size="small"
            >
              Sign In
            </Button>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  );
}