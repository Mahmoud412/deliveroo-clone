import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";
import Categories from "../../components/Home/Categories";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <Header />
      <SearchBar />
      <Categories/>
    </SafeAreaView>
  );
};

export default HomeScreen;
