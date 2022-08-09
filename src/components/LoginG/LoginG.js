import { makeStyles } from "@material-ui/core";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import React from "react";
import { Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import googleLogo from '../../Images/google.png';
import firebaseConfig from "../Login/firebase.config";
import "./LoginG.css";
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
    width: "500px",
    maxWidth: "100%",
    margin: "auto",
    background: "transparent",
    boxShadow: "5px 25px 25px ",
    border: "4px solid black",
    height: "100vh",
    maxHeight: "50%",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const LoginG = () => {
  const history = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        console.log(result);
        history('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const classes = useStyles();
  return (
    <div className="bgg d-flex">
      {/* <div className="d-flex justify-content-center p-5 ">
                <div className='loginBox'> */}
      <Card className={classes.card}>
        <div>
          <h3 >
            Login 
          </h3>
          <button onClick={handleGoogleSignIn} className="loginBtn mb-2">
            <div className="d-flex">
              <img width="50px" height="35px" src={googleLogo} alt="" />
              
              <p style={{ marginLeft: "30px", paddingTop: "5px" }}>
                Continue with Google
              </p>
            </div>
          </button>
        </div>
      </Card>
      {/* <p>Don't have an account? <span style={{ color: 'royalblue', cursor: 'pointer' }}><u>Create an account</u></span></p> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default LoginG;
