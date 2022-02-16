import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem() {
  return (
    <View>
      {/* Image */}
      <RestaurantImage />
      {/* info */}
    </View>
  );
}

const RestaurantImage = () => {
  return (
    <>
      <Image
        style={{ width: "100%", height: 180 }}
        source={{
          uri: "https://c4.wallpaperflare.com/wallpaper/741/599/723/pizza-food-vegetables-fruit-wallpaper-preview.jpg",
        }}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 20,
          top: 20,
        }}
      >
        <MaterialCommunityIcons name="heart-outline" size={30} color="red" />
      </TouchableOpacity>
    </>
  );
};
