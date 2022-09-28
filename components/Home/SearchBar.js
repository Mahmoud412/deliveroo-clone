import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <FontAwesome5 style={styles.iconS} name="search" size={20} />
        <TextInput placeholder="Search" />
      </View>
      <Feather style={styles.iconC} name="bar-chart-2" size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  subcontainer: {
    flexDirection: "row",
    backgroundColor: "#efeff2",
    flex: 1,
    padding: 10,
    marginHorizontal: 10,
  },
  iconS: {
    marginRight: 10,
    color: "gray",
  },
  iconC: {
    marginRight: 5,
    color: "#8cc0aa",
  },
});

export default SearchBar;
