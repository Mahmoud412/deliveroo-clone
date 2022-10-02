import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";
import Categories from "../../components/Home/Categories";
import FeaturedRow from "../../components/Home/FeaturedRow";
import sanityClient from "../api/sanity";
const HomeScreen = ({ navigation }) => {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == 'featured']{
      ...,
        restaurants[]->{
          ...,dishes[]->,
      }
      }
      `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <ScrollView>
        <Header navigation={navigation} />
        <SearchBar />
        <Categories />

        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            discription={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
