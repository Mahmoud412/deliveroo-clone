import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectbasketItems,
  selectBasketTotal,
} from "../../src/redux/features/basketSlice";
import { useNavigation } from "@react-navigation/native";

const BasketIcon = () => {
  const items = useSelector(selectbasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.subcontainer}>
        <Text style={styles.itemsText}>{items.length}</Text>
        <Text style={styles.basket}>View Basket</Text>
        <Text style={styles.total}> ${basketTotal}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    zIndex: 50,
  },
  subcontainer: {
    backgroundColor: "#00CCBB",

    marginHorizontal: 20,

    padding: 16,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  itemsText: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#01A296",
    paddingHorizontal: 8,
    paddingVertical: 7,
  },
  total: {
    color: "white",
    fontSize: 16,
  },
  basket: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    flex: 1,
  },
});

export default BasketIcon;
