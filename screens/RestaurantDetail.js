import { View, Text } from "react-native";
import React from "react";
import About from "../components/home/restaurantDetail/About";
import { Divider } from "react-native-elements";

export default function RestaurantDetail() {
  return (
    <View>
      <About />
      <Divider style={{ marginVertical: 20 }} />
    </View>
  );
}
