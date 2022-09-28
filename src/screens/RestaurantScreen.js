import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../api/sanity";
import {
  ArrowLeftIcon,
  StarIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/solid";
import { MapPinIcon, ChevronRightIcon } from "react-native-heroicons/outline";
import DishRow from "../../components/RestaurantDetail/DishRow";
import BasketIcon from "../../components/RestaurantDetail/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../redux/features/restaurantSlice";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    params: {
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
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    );
  }, [dispatch]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View style={{ position: "relative" }}>
          <Image style={styles.image} source={{ uri: urlFor(imgUrl).url() }} />

          <TouchableOpacity onPress={navigation.goBack} style={styles.icon}>
            <ArrowLeftIcon size={20} height={20} color="#8cc0aa" />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.subcontainer}>
            <Text style={styles.text}>{title}</Text>
            <View style={styles.description}>
              <View style={styles.subDescription}>
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
              <View style={styles.subDescription}>
                <MapPinIcon
                  color="gray"
                  opacity={0.5}
                  size={20}
                  style={{ marginLeft: 10 }}
                />
                <Text style={styles.location}>Nearby . {address}</Text>
              </View>
            </View>
            <Text style={styles.short_des}>{short_description}</Text>
          </View>
          <TouchableOpacity style={styles.question}>
            <QuestionMarkCircleIcon color="gray" size={20} opacity={0.6} />
            <Text style={{ fontWeight: "bold", paddingLeft: 10, flex: 1 }}>
              Have a food Allergy ?
            </Text>
            <ChevronRightIcon color="#8cc0aa" />
          </TouchableOpacity>
        </View>
        <View style={{ paddingBottom: 160 }}>
          <Text style={styles.textMenu}>Menu</Text>
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "lightgray",
    borderRadius: 15,
    padding: 6,
  },
  image: {
    width: 450,
    height: 200,
  },
  container: {
    backgroundColor: "white",
  },
  subcontainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
  },
  description: {
    flexDirection: "row",
    marginLeft: 10,
  },
  subDescription: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    color: "#48bb78",
    fontSize: 13,
  },
  genre: {
    color: "#a0aec0",
  },
  location: {
    color: "gray",
    fontSize: 13,
    marginLeft: 10,
  },
  short_des: {
    color: "gray",
    marginTop: 10,
    paddingBottom: 10,
  },
  question: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.2,
    borderColor: "#a0aec0",
    marginLeft: 2,
    padding: 10,
  },
  textMenu: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    fontWeight: "bold",
    fontSize: 21,
    marginBottom: 10,
  },
});
export default RestaurantScreen;
