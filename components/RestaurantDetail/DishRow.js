import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../../src/api/sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
const DishRow = ({ id, name, description, price, image }) => {
  const [ispressed, setIspressed] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIspressed(!ispressed)}
        style={styles.container}
      >
        <View style={styles.subcontainer}>
          <View style={{ flex: 1, paddingRight: 2 }}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}> ${price}</Text>
          </View>
          <View>
            <Image style={styles.image} source={{ uri: urlFor(image).url() }} />
          </View>
        </View>
      </TouchableOpacity>

      {ispressed && (
        <View style={styles.iconContainer}>
          <View style={styles.iconSubContainer}>
            <TouchableOpacity>
              <MinusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
            <Text style={{ margin: 10 }}>0</Text>
            <TouchableOpacity>
              <PlusCircleIcon color="#00CCBB" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 5,
    marginTop: 10,
    fontWeight: "bold",
  },
  description: {
    color: "gray",
    marginBottom: 5,
    marginLeft: 5,
  },
  price: {
    color: "gray",
  },
  image: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: "#F3F3F4",
    padding: 30,
    margin: 10,
  },
  container: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#F3F3F4",
  },
  subcontainer: {
    flexDirection: "row",
  },
  iconContainer: {
    backgroundColor: "white",
    paddingLeft: 5,
    paddingRight: 5,
  },
  iconSubContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 5,
    margin: 5,
  },
});

export default DishRow;
