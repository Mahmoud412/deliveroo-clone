import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
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
        <View>
          <View style={styles.textcontainer}>
            <View style={styles.subTextcontainer}>
              <View>
                <Text style={styles.estimated}>Estimated Arrival</Text>
                <Text style={styles.minutes}>45-55 Minutes</Text>
              </View>
              <Image
                style={styles.image}
                source={{ uri: "https://links.papareact.com/fls" }}
              />
            </View>
          </View>
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
  estimated: {
    fontSize: 20,
    color: "gray",
    fontWeight: "400",
  },
  minutes: {
    fontSize: 40,
    fontWeight: "bold",
  },
  textcontainer: {
    backgroundColor: "white",
    marginHorizontal: 20,
    marginVertical: 8,
    padding: 20,
    borderRadius: 10,
    zIndex: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    height: 70,
    width: 70,
  },
  subTextcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default DeliveryScreen;
