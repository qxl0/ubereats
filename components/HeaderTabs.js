import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function HeaderTabs() {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton title="Delivery" />
      <HeaderButton title="Pickup" />
    </View>
  );
}

const HeaderButton = ({ title }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "black",
        paddingVertical: 6,
        paddingHorizontal: 16,
      }}
    >
      <Text style={{ color: "white" }}>{title}</Text>
    </TouchableOpacity>
  );
};
