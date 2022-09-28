import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../redux/features/restaurantSlice";
import { XMarkIcon } from "react-native-heroicons/solid";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <View style={styles.maincontainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.subcontainer}>
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <XMarkIcon size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.text}>Order Help</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: "#8cc0aa",
    flex: 1,
  },
  container: {
    zIndex: 50,
  },
  subcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "200",
  },
});
export default DeliveryScreen;
