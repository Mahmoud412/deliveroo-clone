import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { urlFor } from "../../src/api/sanity";
import { useNavigation } from "@react-navigation/native";
const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("RestaurantScreen", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
      style={styles.overall}
    >
      <Image style={styles.image} source={{ uri: urlFor(imgUrl).url() }} />
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.subcontainer}>
          <StarIcon
            color="green"
            opacity={0.5}
            size={20}
            style={{ right: 10 }}
          />
          <Text style={styles.rating}>
            {rating} .<Text style={styles.genre}>{genre}</Text>
          </Text>
        </View>
        <View style={styles.locationView}>
          <MapPinIcon
            style={{ right: 6 }}
            color="gray"
            opacity={0.4}
            size={22}
          />
          <Text style={styles.address}>Nearby .{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 190,
    width: "100%",
    borderRadius: 0.125,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  title: {
    fontWeight: "bold",
    paddingTop: 2,
    fontSize: 16,
    right: 10,
  },
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 25,
  },
  subcontainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 4,
  },
  rating: {
    color: "#48bb78",
    fontSize: 12,
  },
  genre: {
    color: "#a0aec0",
  },
  address: {
    fontSize: 12,
    color: "#a0aec0",
  },
  locationView: {
    flexDirection: "row",
    alignItems: "center",
  },
  overall: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    backgroundColor: "white",
    marginRight: 20,
  },
});

export default RestaurantCard;
