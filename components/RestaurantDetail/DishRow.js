import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { urlFor } from "../../src/api/sanity";

const DishRow = ({ id, name, description, price, image }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={{ flex: 1, paddingRight: 2 }}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.price}> ${price}</Text>
        </View>
        <View>
          <Image style={styles.image} source={{ uri: urlFor(image).url() }} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 5,
    marginTop: 10,
    fontWeight: "bold",
  },
  description: {
    color: "gray",
    marginBottom: 5,
    marginLeft: 5,
  },
  price: {
    color: "gray",
  },
  image: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: "#F3F3F4",
    padding: 30,
    margin: 10,
  },
  container: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#F3F3F4",
  },
  subcontainer: {
    flexDirection: "row",
  },
});

export default DishRow;
