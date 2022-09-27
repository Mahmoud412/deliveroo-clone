import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";
import Categories from "../../components/Home/Categories";
import FeaturedRow from "../../components/Home/FeaturedRow";
import sanityClient from "../api/sanity";
const HomeScreen = () => {
  const navigation = useNavigation();
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
        <Header />
        <SearchBar />
        <Categories />
        <FeaturedRow
          id="1"
          title="featured"
          discription="paid placements from our partners"
        />
        <FeaturedRow
          id="2"
          title="Tasty Discounts "
          discription="paid placements from our partners"
        />
        <FeaturedRow
          id="3"
          title="Offers near you!"
          discription="paid placements from our partners"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
