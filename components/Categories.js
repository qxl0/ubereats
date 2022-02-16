import { View, Text, Image } from "react-native";
import React from "react";

const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    title: "Pick-up",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    title: "Soft Drinks",
  },
  {
    image: require("../assets/images/bread.png"),
    title: "Bakery Items",
  },
  {
    image: require("../assets/images/fast-food.png"),
    title: "Fast Foods",
  },
  {
    image: require("../assets/images/deals.png"),
    title: "Deals",
  },
  {
    image: require("../assets/images/coffee.png"),
    title: "Coffe & Tea",
  },
  {
    image: require("../assets/images/desserts.png"),
    title: "Desserts",
  },
];
export default function Categories() {
  return (
    <View>
      <Image
        source={items[0].image}
        style={{
          width: 50,
          height: 40,
          ersizeMode: "contain",
        }}
      />
      <Text
        style={{
          fontSize: 13,
          fontWeight: "900",
        }}
      >
        PIck-up
      </Text>
    </View>
  );
}
