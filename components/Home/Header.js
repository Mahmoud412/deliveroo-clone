import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={{ uri: "https://Links.papareact.com/wru" }}
      />
      <View style={styles.subcontainer}>
        <Text style={styles.subText}>Deliver Now!</Text>
        <Text style={styles.text}>
          Current Location
          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            color="#8cc0aa"
          />
        </Text>
      </View>
      <FontAwesome5
        style={{ marginRight: 7 }}
        name="user"
        size={30}
        color="#8cc0aa"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
    backgroundColor: "gray",
    borderRadius: 30,
    marginLeft: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: "white",
  },
  subcontainer: {
    flex: 1,
  },
  subText: {
    fontWeight: "bold",
    color: "gray",
    marginHorizontal: 5,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    marginHorizontal: 5,
    
  },
});
export default Header;
