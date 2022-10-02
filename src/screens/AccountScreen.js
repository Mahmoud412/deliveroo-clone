import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import firebase from "firebase/compat/app";
import { Button } from "@rneui/base";

const AccountScreen = () => {
  const handleSignout = async () => {
    try {
      await firebase.auth().signOut();
      console.log("Signed out successfully!");
    } catch (erorr) {
      console.log(erorr);
    }
  };
  return (
    <SafeAreaView>
      <Button title="Sign Out" onPressOut={handleSignout} />
    </SafeAreaView>
  );
};

export default AccountScreen;
