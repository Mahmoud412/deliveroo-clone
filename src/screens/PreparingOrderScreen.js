import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Animatable.Image
        source={require("../asset/chefs-cooking.gif")}
        animation="slideInUp"
        iterationCount={1}
        style={styles.image}
      />
      <Animatable.Text
        style={styles.text}
        animation="slideInUp"
        iterationCount={1}
      >
        Wating for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8cc0aa",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 200,
    width: "90%",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 50,
  },
});
export default PreparingOrderScreen;
