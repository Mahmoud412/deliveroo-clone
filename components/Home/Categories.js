import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <CategoryCard
        imgurl="https://media-cdn.tripadvisor.com/media/photo-s/18/7f/e0/d7/getlstd-property-photo.jpg"
        title="testing"
      />
      <CategoryCard
        imgurl="https://media-cdn.tripadvisor.com/media/photo-s/18/7f/e0/d7/getlstd-property-photo.jpg"
        title="testing"
      />
      <CategoryCard
        imgurl="https://media-cdn.tripadvisor.com/media/photo-s/18/7f/e0/d7/getlstd-property-photo.jpg"
        title="testing"
      />
      <CategoryCard
        imgurl="https://media-cdn.tripadvisor.com/media/photo-s/18/7f/e0/d7/getlstd-property-photo.jpg"
        title="testing"
      />
      <CategoryCard
        imgurl="https://media-cdn.tripadvisor.com/media/photo-s/18/7f/e0/d7/getlstd-property-photo.jpg"
        title="testing"
      />
      <CategoryCard
        imgurl="https://media-cdn.tripadvisor.com/media/photo-s/18/7f/e0/d7/getlstd-property-photo.jpg"
        title="testing"
      />
      <CategoryCard
        imgurl="https://media-cdn.tripadvisor.com/media/photo-s/18/7f/e0/d7/getlstd-property-photo.jpg"
        title="testing"
      />
      <CategoryCard
        imgurl="https://media-cdn.tripadvisor.com/media/photo-s/18/7f/e0/d7/getlstd-property-photo.jpg"
        title="testing"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f2f3",

    paddingTop: 10,
  },
});

export default Categories;
