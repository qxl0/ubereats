import { View, Text } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItem from "../components/restaurantDetail/MenuItem";

export default function RestaurantDetail() {
  return (
    <View>
      <About />
      <Divider style={{ marginVertical: 20 }} />
      <MenuItem />
    </View>
  );
}
