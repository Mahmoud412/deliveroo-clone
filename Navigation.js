import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, StackRouter } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import BasketScreen from "./src/screens/BasketScreen";
import PreparingOrderScreen from "./src/screens/PreparingOrderScreen";
import DeliveryScreen from "./src/screens/DeliveryScreen";
import AuthScreen from "./src/screens/AuthScreen";

const Stack = createStackNavigator();

export const SignedInStack = () => (
  <NavigationContainer>
    <Provider store={store}>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
        <Stack.Screen
          name="BasketScreen"
          component={BasketScreen}
          options={{ presentation: "modal", headerShown: false }}
        />
        <Stack.Screen
          name="PreparingOrderScreen"
          component={PreparingOrderScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <Stack.Screen
          name="Delivery"
          component={DeliveryScreen}
          options={{ presentation: "fullScreenModal", headerShown: false }}
        />
        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Provider>
  </NavigationContainer>
);

export const SignedOutStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="AuthScreen">
      <Stack.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
