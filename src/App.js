import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'; 
import StudentHome from './components/StudentHome/StudentHome';
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from '../src/components/Login/firebase.config';
import LoginG from './components/LoginG/LoginG';
import Main from './components/Teachers/Main/Main';
import Update from './components/Teachers/Main/Update';
import MainS from './components/Students/MainS';
import Check from './components/Teachers/Main/Check';
import StudentsInfo from './components/Teachers/Main/StudentsInfo';
export const userContext = createContext()
function App() {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
  const [loggedInuser, setLoggedInUser] = useState({})
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const signedInUser = {name:user.displayName,email: user.email,uid:user.uid,img:user.photoURL}
        setLoggedInUser(signedInUser);
        console.log(user)
        // ...
      } else {
        setLoggedInUser({});
      }
    });
   

},[])
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
        <Route path="/check/:id/:series/:sem" element={<Check/>}/>
        <Route path="/sinfot/:series" element={<StudentsInfo/>}/>

      </Routes>
    </userContext.Provider>
  );
}

export default App;
