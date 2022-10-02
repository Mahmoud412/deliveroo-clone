import { View, Text } from "react-native";
import React from "react";
import PhoneAuth from "../../components/Auth/PhoneAuth";
import AuthHeader from "../../components/Auth/AuthHeader";

const AuthScreen = () => {
  return (
    <View style={{ backgroundColor: "#8cc0aa", flex: 1 }}>
      <AuthHeader />
      <PhoneAuth />
    </View>
  );
};

export default AuthScreen;
