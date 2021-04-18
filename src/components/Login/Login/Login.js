import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../../images/logo.png'
import loginBg from '../../../images/loginBG.svg';


const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email, photoURL } = result.user;
      const signedInUser = { name: displayName, email, isSignIn: true, photo: photoURL }
      setLoggedInUser(signedInUser);
      history.replace(from);
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  return (
    <div className='row align-items-center' style={{ height: "100vh" }}>

      <div className="col-md-4">
        <Link to='/'><img src={logo} alt="" className="img-fluid shadow bg-dark border m-2 p-2 rounded" /></Link><br />
        <button className="button-coral" style={{ width: "250px" }} onClick={handleGoogleSignIn}>Google Sign in</button>
      </div>

      <div className="col-md-8">
        <img src={loginBg} alt=""/>
      </div>
    </div>
  );
};

export default Login;