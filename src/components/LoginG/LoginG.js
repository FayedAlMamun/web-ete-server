import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './LoginG.css'
import firebaseConfig from '../Login/firebase.config';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../Images/logo.jpg'
import googleLogo from '../../Images/google.png';
const LoginG = () => {
    const history = useNavigate();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
           console.log(result);
            history.replace(from);
        }).catch(err => {
            console.log(err);
        });
    }
    return (
        <div className='text-center  bgg'>
           
            <div className="d-flex justify-content-center p-5 ">
                <div className='loginBox'>
                    <h3 className='text-center' style={{ marginTop: '50px' }}>Login With</h3><br />
                    <button onClick={handleGoogleSignIn} className="loginBtn mb-2">
                        <div className="d-flex">
                            <img width='50px' height='35px' src={googleLogo} alt="" />
                            <p style={{ marginLeft: '30px', paddingTop: '5px' }}>Continue with Google</p>
                        </div>
                    </button>
                    {/* <p>Don't have an account? <span style={{ color: 'royalblue', cursor: 'pointer' }}><u>Create an account</u></span></p> */}
                </div>
            </div>
        </div>
    );
};

export default LoginG;