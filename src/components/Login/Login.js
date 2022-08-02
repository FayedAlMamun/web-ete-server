import React, { useContext, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { useNavigate, useLocation } from 'react-router-dom';
import './Login.css';
const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        password: '',
        cpassword: '',
        roll: '',
        number: ''

    })
    const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const history = useNavigate();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    res.user.sendEmailVerification();
                    const newUserInfo = { ...user }
                    newUserInfo.error = ''
                    newUserInfo.success = true
                    setUser(newUserInfo)
                    // const signedInUser = { name: user.name, email: user.email,roll:user.roll,number:user.number }
                    //setLoggedInUser(signedInUser)
                    fetch("http://localhost:5000/addStudents", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    })
                    alert("An Email has been sent to your account.Please varify your account!")
                    history(from)
                })
                .catch(error => {

                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message
                    newUserInfo.success = false
                    setUser(newUserInfo)
                });

        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {

                    const newUserInfo = { ...user }
                    newUserInfo.error = ''
                    newUserInfo.success = true
                    newUserInfo.varified = res.user.emailVerified
                    setUser(newUserInfo)
                    //const signedInUser = { name: user.name, email: user.email,varified:res.user.emailVerified}
                    //setLoggedInUser(signedInUser)
                    // if(user.varified)
                    //     {
                    //         history(from);

                    //     }
                    // else 
                    // {
                    //     alert("This Email is not varified!");
                    // }
                    history(from);

                })
                .catch(function (error) {

                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message
                    newUserInfo.success = false
                    setUser(newUserInfo)
                })
        }
        e.preventDefault();
    }
    const handleBlur = (event) => {
        let isFormValid = true;
        if (event.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value);

        }

        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6;
            const passHasNumber = /\d{1}/.test(event.target.value);
            isFormValid = (isPasswordValid && passHasNumber);
        }

        if (event.target.name === 'cpassword') {

            const password = document.getElementById("Password").value;
            isFormValid = event.target.value === password;
            if (!isFormValid) {
                alert("Password does not match!")
            }
        }

        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }
    const toggole = () => {
        const newUserInfo = { ...user }
        newUserInfo.error = ''
        newUserInfo.success = true
        setUser(newUserInfo)
        setNewUser(!newUser)
    }
    return (
        <div className='text-center  bg'>

{newUser ? <h3 style={{color:'white'}}>Create an Account</h3> : <h3 style={{color:'white'}}>Login</h3>}
            <div className=' d-flex justify-content-center p-5'>
           
                <div className='login-border'>
               
                        <form className='frm ' onSubmit={handleSubmit}>
                            <div>
                                {newUser && <input className='input'  type="text" name="name" onBlur={handleBlur} placeholder='Full Name' required />}<br /><br />
                                <input className='input' type="text" name="email" onBlur={handleBlur} placeholder='Your Email' required /><br /><br />
                                <input className='input' type="password" name="password" id='Password' onBlur={handleBlur} placeholder='Password' required /><br /><br />
                                {newUser && <input className='input' type="password" name="cpassword" onBlur={handleBlur} placeholder='Confirm Password' required />}<br /><br />
                                {newUser && <input className='input' type="number" name="roll" onBlur={handleBlur} placeholder='Your Roll' required />}<br /><br />
                                {newUser && <input className='input' type="number" name="series" onBlur={handleBlur} placeholder='Your Series' required />}<br /><br />
                                {newUser && <input className='input' type="number" name="number" onBlur={handleBlur} placeholder='Your Mobile Number' required />}<br /><br />
                                <input className='input submit'  type="submit" value={newUser ? "Created an Account" : "Login"} />
                                <br /> <br />
                                {newUser ? <p style={{color:'black',fontWeight:'700'}}>Already have an account? <span style={{ cursor: 'pointer' }} onClick={toggole}><u style={{color:'black',fontWeight:'700'}}>Login</u></span></p> : <p style={{color:'black',fontWeight:'700'}}>Don't have an account? <span style={{ cursor: 'pointer' }} onClick={toggole}><u style={{color:'black',fontWeight:'700'}}>Create an account</u></span></p>}
                            </div>
                        </form>
                    <br />


                    <div>
                        {!user.success ? <p style={{ color: 'red' }}>{user.error}</p> : <p></p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;