import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";

export default function RootNavigation() {
  const stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={screenOptions}>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
