import { View, Text, ScrollView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../api/sanity";

const RestaurantScreen = () => {
  const navigation = useNavigation();

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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <ScrollView>
      <View>
        <Image
          style={{ width: 450, height: 200 }}
          source={{ uri: urlFor(imgUrl).url() }}
        />
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
