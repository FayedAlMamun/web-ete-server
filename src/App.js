import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { createContext, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import firebaseConfig from '../src/components/Login/firebase.config';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Reset from './components/Login/Reset';
import LoginG from './components/LoginG/LoginG';
import StudentHome from './components/StudentHome/StudentHome';
import MainS from './components/Students/MainS';
import Check from './components/Teachers/Main/Check';
import Main from './components/Teachers/Main/Main';
import StudentsInfo from './components/Teachers/Main/StudentsInfo';
import Update from './components/Teachers/Main/Update';
export const userContext = createContext()
function App(props) {
  const location=useLocation()
  console.log(location.state)
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
  const [loggedInuser, setLoggedInUser] = useState({})
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user) => {
      if (user && user.emailVerified) {
        const signedInUser = {name:user.displayName,email: user.email,uid:user.uid,img:user.photoURL}
        setLoggedInUser(signedInUser);
        console.log(user)
        // ...
      } else {
        
        setLoggedInUser({});
        console.log(user)
      }
    });
   

},[location.state])
  return (
    <userContext.Provider value={[loggedInuser, setLoggedInUser]}>
      <Header/>
      <Routes>
        <Route path="/" element={loggedInuser.email?<StudentHome/>:<Home/>}/>
        {/* <Route path="/shome" element={<StudentHome/>}/>   */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/loging" element={<LoginG/>}/>
        <Route path="/tupdate/:_id" element={<Main/>}/>
        <Route path="/update/:id" element={<Update/>}/>
        <Route path="/seeS/:id/:sem" element={<MainS/>}/>
        <Route path="/check/:id/:series/:sem/:cname/:roll" element={<Check/>}/>
        <Route path="/sinfot/:series" element={<StudentsInfo/>}/>
        <Route path="/reset" element={<Reset/>}/>

      </Routes>
    </userContext.Provider>
  );
}

export default App;
