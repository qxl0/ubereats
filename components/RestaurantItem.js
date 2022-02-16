import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem() {
  return (
    <View>
      {/* Image */}
      <RestaurantImage />
      {/* info */}
      <RestaurantInfo />
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

const RestaurantInfo = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        Farmhouse Kitchen Thai Cuisine
      </Text>
      <Text style={{ fontSize: 13, color: "gray" }}> 30-45. min</Text>
    </View>
    <View
      style={{
        backfaceVisibility: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        borderRadius: 15,
      }}
    >
      <Text>4.5</Text>
    </View>
  </View>
);
