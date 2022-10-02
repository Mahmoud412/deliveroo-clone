import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
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
      <View>
        <Image
          style={styles.profile}
          source={{
            uri: "https://photo-cdn2.icons8.com/8A-k2Q0nwB6iwqiawJtXPh-SGC2fdnUUytgTOniWAKc/rs:fit:1608:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNTQyLzA2MTg1/YTMyLTI5OGItNGI0/Ny05NGQ1LWVhMTMy/YTNiNGE0NC5qcGc.jpg",
          }}
        />
        <Text style={styles.userName}>Dev Test</Text>
      </View>
      <Button
        containerStyle={{ width: "80%", alignSelf: "center", marginTop: 30 }}
        title="Sign Out"
        onPressOut={handleSignout}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  profile: {
    width: 150,
    height: 150,
    marginTop: 30,
    borderWidth: 2,
    borderRadius: 100,
    alignSelf: "center",
    resizeMode: "cover",
    borderColor: "#8cc0aa",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  profileName: {
    fontSize: 25,
    marginTop: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  userName: {
    fontSize: 14,
    fontWeight: "regular",
    textAlign: "center",
    marginTop: 4,
  },
});
export default AccountScreen;
