import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Alert,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useRef, useState } from "react";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../../firebase";
import firebase from "firebase/compat/app";
import { useNavigation } from "@react-navigation/native";

const PhoneAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);
  const navigation = useNavigation();
  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId);
    setPhoneNumber("");
  };

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => {
        setCode("");
        navigation.navigate("HomeScreen");
      })
      .catch((error) => {
        alert(error);
      });
    Alert.alert("You have logged in  Successfully");
  };
  return (
    <SafeAreaView style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <Text style={styles.loginText}>Login to Deliveroo. </Text>
      <TextInput
        style={styles.textInput}
        placeholder=" Enter your Phone Number "
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        autoCompleteType="tel"
      />
      <TouchableOpacity
        style={styles.sendVerification}
        onPress={sendVerification}
      >
        <Text style={styles.buttonText}>send verification</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.textInput}
        placeholder=" Confirm Code "
        onChangeText={setCode}
        keyboardType="number-pad"
      />
      <TouchableOpacity style={styles.sendVerification} onPress={confirmCode}>
        <Text style={styles.buttonText}>Confirm verification</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    margin: 10,
  },
  container: {
    marginVertical: 100,
    alignItems: "center",
  },
  textInput: {
    paddingTop: 40,
    paddingBottom: 20,
    fontSize: 14,
    borderBottomColor: "white",
    borderBottomWidth: 2,
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
  },
  sendVerification: {
    borderRadius: 10,
    padding: 15,
    backgroundColor: "white",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  confirmCode: {
    marginVertical: 10,
    top: 10,
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
    padding: 20,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
export default PhoneAuth;
