import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import AppBarMain from "../components/AppBarMain";

const useStyles = makeStyles((theme) => ({
  btnsignup: {
    color: "#b6e717",
    borderColor: "#27a3ff",
    backgroundColor: "#181818",
    margin: 10,
    "&:hover": {
      color: "#fff",
      borderColor: "#fff",
      backgroundColor: "#2ba2ff",
    },
  },
  btnsigin: {
    color: "#181818",
    borderColor: "#2ba2ff",
    backgroundColor: "#b6e717",
    margin: 10,
    "&:hover": {
      color: "#fff",
      borderColor: "#fff",
      backgroundColor: "#2ba2ff",
    },
  },
}));

export default function HomePage() {
  const classes = useStyles();
  return (
    <>
      <AppBarMain admin signin signup />
      <CssBaseline />
      <Container fixed>
        <Typography
          variant="h3"
          component="h3"
          style={{ backgroundColor: "#27a3ff", textAlign: "center" }}
        >
          Welcome to Attest
        </Typography>
        <Typography
          variant="h5"
          component="h6"
          style={{ backgroundColor: "#cfe8fc", textAlign: "center" }}
        >
          New Age Test Management System
        </Typography>
        <div style={{textAlign:'center'}}>

        
        <Button
          variant="outlined"
          startIcon={<BorderColorIcon />}
          className={classes.btnsignup}
          href="/signup"
          size="small"
        >
          Sign Up
        </Button>
        <Button
          variant="outlined"
          startIcon={<LockOpenIcon />}
          className={classes.btnsignup}
          href="/signin"
          size="small"
        >
          Sign In
        </Button>
        </div>
      </Container>
    </>
  );
}
