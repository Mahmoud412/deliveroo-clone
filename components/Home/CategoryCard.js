import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

const CategoryCard = ({ imgurl, title }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: imgurl }} style={{ height: 80, width: 80 }} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    position: "relative",
  },
  text: {
    color: "white",
    position: "absolute",
    fontWeight: "bold",
    left: 3,
    fontSize: 12,
    bottom: 1,
  },
});

export default CategoryCard;
