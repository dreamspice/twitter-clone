import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import "firebase/database";
import GoogleIcon from "@mui/icons-material/Google";

import LeftSlider from "./Components/LeftSlider";
import Content from "./Components/Content";
import RightSlider from "./Components/RightSlider";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleSignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        setIsLogin(true);
        const { displayName, email, photoURL, uid } = currentUser._delegate;
        console.log(displayName, email, photoURL, uid);
        const updatedCurrentUser = { displayName, email, photoURL, uid };
        const usersRef = firebase.database().ref("users");
        usersRef.child(uid).once("value", (snapshot) => {
          if (!snapshot.exists()) {
            usersRef.child(uid).set(updatedCurrentUser);
            console.log(snapshot);
            console.log(usersRef.child(uid));
          }
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  let content = (
    <div className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
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
