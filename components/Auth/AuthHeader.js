import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";

const AuthHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={{ uri: "https://Links.papareact.com/wru" }}
      />
      <View style={styles.subcontainer}>
        <Text style={styles.text}>Login</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
    backgroundColor: "gray",
    borderRadius: 30,
    marginLeft: 5,
    bottom: 3,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 100,
  },
  subcontainer: {
    flex: 1,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
});
export default AuthHeader;
