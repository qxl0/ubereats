import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const foods = [
  {
    title: "Lasagna",
    description: "A delicious pasta dish",
    price: "$13.50",
    image:
      "https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408?k=20&m=1155240408&s=612x612&w=0&h=Zvr3TwVQ-wlfBnvGrgJCtv-_P_LUcIK301rCygnirbk=",
  },
  {
    title: "Tandoori Chicken",
    description: "Amazing Indian dish with tenderloin chicken off the sizzle",
    price: "$12.99",
    image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  },
];
export default function MenuItem() {
  return (
    <View>
      {/* food info */}
      <FoodInfo food={foods[0]} />
      {/* food image */}
      <FoodImage food={foods[0]} />
    </View>
  );
}

const FoodInfo = ({ food }) => (
  <View>
    <Text>{food.title}</Text>
    <Text>{food.description}</Text>
    <Text>{food.price}</Text>
  </View>
);

const FoodImage = ({ food }) => (
  <View>
    <Image source={food.image} />
  </View>
);
const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
});
