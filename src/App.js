import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";
import firebase from "./firebase";
import "firebase/database";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";

import LeftSlider from "./Components/LeftSlider";
import Content from "./Components/Content";
import RightSlider from "./Components/RightSlider";

function App() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  const handleSignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
          dispatch(authActions.setCurrentUser(user));
        });
        unsubscribe();
        dispatch(authActions.login());
        const { displayName, email, photoURL, uid } = currentUser._delegate;
        const updatedCurrentUser = { displayName, email, photoURL, uid };
        const usersRef = firebase.database().ref("users");
        usersRef.child(uid).once("value", (snapshot) => {
          if (!snapshot.exists()) {
            usersRef.child(uid).set(updatedCurrentUser);
          }
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      dispatch(authActions.setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  let content = (
    <div className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
      <div className="flex justify-center items-center mb-6 gap-4">
        <h1 className="text-white text-center text-3xl">Twitter Clone </h1>
        <TwitterIcon sx={{ color: "rgb(2 132 199)", fontSize: 36 }} />
      </div>
      <button
        className="bg-white tex-xl text-gray-600 px-12 py-4 font-bold rounded-lg flex gap-4"
        onClick={handleSignInWithGoogle}
      >
        <GoogleIcon />
        <p>Continue with Google</p>
      </button>
    </div>
  );

  if (isLogin) {
    content = (
      <>
        <LeftSlider />
        <Content />
        <RightSlider />
      </>
    );
  }

  return <div className="flex h-screen mx-auto container">{content}</div>;
}

export default App;
