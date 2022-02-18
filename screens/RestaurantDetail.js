import { View, Text } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItem from "../components/restaurantDetail/MenuItem";

export default function RestaurantDetail({ route }) {
  return (
    <View>
      <About route={route} />
      <Divider style={{ marginVertical: 20 }} />
      <MenuItem />
    </View>
  );
}
