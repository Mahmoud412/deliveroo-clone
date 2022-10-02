import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { SignedInStack, SignedOutStack } from "./Navigation";

const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const userHandler = (user) =>
    user ? setCurrentUser(user) : setCurrentUser(null);
  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => userHandler(user));
  }, []);
  return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>;
};

export default AuthNavigation;
