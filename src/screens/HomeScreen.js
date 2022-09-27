import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";
import Categories from "../../components/Home/Categories";
import FeaturedRow from "../../components/Home/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

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
