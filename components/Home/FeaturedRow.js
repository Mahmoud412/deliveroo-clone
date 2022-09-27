import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, discription }) => {
  return (
    <View style={{ backgroundColor: "#f3f2f3" }}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text style={styles.subText}>{discription}</Text>
      <ScrollView
        style={styles.scrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <RestaurantCard
          id="123"
          imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/18/7f/e0/d7/getlstd-property-photo.jpg"
          title="Yo Sushi"
          rating="4.4"
          genre="Japanese"
          address="123 main St"
          short_description="This test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="123"
          imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/18/7f/e0/d7/getlstd-property-photo.jpg"
          title="Yo Sushi"
          rating="4.4"
          genre="Japanese"
          address="123 main St"
          short_description="This test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="123"
          imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/18/7f/e0/d7/getlstd-property-photo.jpg"
          title="Yo Sushi"
          rating="4.4"
          genre="Japanese"
          address="123 main St"
          short_description="This test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="123"
          imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/18/7f/e0/d7/getlstd-property-photo.jpg"
          title="Yo Sushi"
          rating="4.4"
          genre="Japanese"
          address="123 main St"
          short_description="This test description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 12,
    paddingRight: 12,
    marginTop: 20,
  },
  subText: {
    paddingLeft: 12,
    paddingRight: 12,
    color: "gray",
  },
  scrollView: {
    paddingLeft: 12,
    paddingRight: 12,
  },
});

export default FeaturedRow;
