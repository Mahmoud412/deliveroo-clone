import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../redux/features/restaurantSlice";
import {
  removeFromBasket,
  selectbasketItems,
  selectBasketTotal,
} from "../redux/features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../../src/api/sanity";
const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectbasketItems);
  const baskettotal = useSelector(selectBasketTotal);
  const [groupitemsInBasket, setGroupitemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupitemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.subView}>
          <View>
            <Text style={styles.basketText}>Basket</Text>
            <Text style={styles.titleText}>{restaurant.title}</Text>
          </View>
          <TouchableOpacity style={styles.icon} onPress={navigation.goBack}>
            <XCircleIcon color="#8cc0aa" height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <Image
            style={styles.logo}
            source={{ uri: "https://Links.papareact.com/wru" }}
          />
          <Text style={{ flex: 1 }}>Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text style={{ color: "#8cc0aa" }}>Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {Object.entries(groupitemsInBasket).map(([key, items]) => (
            <View key={key} style={styles.itemsContainer}>
              <Text style={styles.itemCounter}>{items.length} x</Text>
              <Image
                style={styles.image}
                source={{ uri: urlFor(items[0]?.image).url() }}
              />
              <Text style={styles.itemText}>{items[0]?.name}</Text>
              <Text style={styles.itemPrice}>${items[0]?.price}</Text>

              <TouchableOpacity>
                <Text
                  style={{ color: "#8cc0aa" }}
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View style={styles.subTotalContainer}>
          <View style={styles.subTotalSubContainer}>
            <Text style={styles.subTotalText}>SubTotal</Text>
            <Text style={styles.subTotalText}>${baskettotal}</Text>
          </View>
          <View style={styles.subTotalSubContainer}>
            <Text style={styles.subTotalText}>Delivery Fee</Text>
            <Text style={styles.subTotalText}>${5}</Text>
          </View>
          <View style={styles.subTotalSubContainer}>
            <Text style={styles.orderTotal}>Order Total</Text>
            <Text style={styles.subOrderTotal}>${baskettotal + 5}</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("PreparingOrderScreen")}
            style={styles.payButtonContainer}
          >
            <Text style={styles.buttonText}>Check Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  basketText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  titleText: {
    textAlign: "center",
    color: "gray",
  },
  icon: {
    borderTopLeftRadius: 9999,
    borderBottomLeftRadius: 9999,
    position: "absolute",
    top: 20,
    right: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  subcontainer: {
    flex: 1,
    backgroundColor: "#f3f2f3",
  },
  subView: {
    padding: 25,
    borderBottomWidth: 0.5,
    borderColor: "#8cc0aa",
    backgroundColor: "white",
  },
  logo: {
    width: 40,
    height: 40,
    backgroundColor: "lightgray",
    borderRadius: 30,
    marginLeft: 10,
  },
  body: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
    marginVertical: 20,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 30,
  },
  itemText: {
    flex: 1,
  },
  itemPrice: {
    color: "gray",
    right: 10,
  },
  itemsContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 20,
    justifyContent: "space-around",
    backgroundColor: "white",
    borderBottomWidth: 2,
    borderBottomColor: "#f3f2f3",
  },
  itemCounter: {
    right: 10,
    color: "#8cc0aa",
  },
  subTotalText: {
    color: "gray",
  },
  subTotalContainer: {
    padding: 20,
    backgroundColor: "white",
    marginTop: 20,
  },
  subTotalSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  subOrderTotal: {
    fontWeight: "bold",
  },
  orderTotal: {
    color: "gray",
    fontWeight: "bold",
  },
  payButtonContainer: {
    backgroundColor: "#8cc0aa",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
  },
});
export default BasketScreen;
