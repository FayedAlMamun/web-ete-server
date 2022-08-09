import { Card, Grid, makeStyles, TextField } from "@material-ui/core";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../../Images/1stb.jfif";
import firebaseConfig from "./firebase.config";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  card: {
    maxWidth: "90%",
    margin: "auto",
    background: "transparent",
    boxShadow: "5px 25px 25px ",
    padding: "10px",
  },
  circle: {
    height: "100vh",
    alignItems: "center",
    backgroundImage: `url(${bg})`,
  },
}));

const Reset = () => {
  const history = useNavigate();
  const [email, setEmail] = useState();
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const handleBlur = (e) => {
    setEmail(e.target.value);
  };
  const reset = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("An Email has been sent to your email account!");
        history("/");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  };
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      className={classes.circle}
    >
      <Grid item xs={12} sm={12}>
        <Card className={classes.card}>
          <TextField
            onBlur={handleBlur}
            fullWidth
            id="outlined-basic"
            placeholder="Email"
            variant="outlined"
          />
          <button
            onClick={reset}
            style={{
              marginTop: "5px",
              backgroundColor: "goldenrod",
              border: "none",
              borderRadius: "10px",
              width: "100%",
              fontWeight: "700",
            }}
          >
            Send Reset Email
          </button>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Reset;
