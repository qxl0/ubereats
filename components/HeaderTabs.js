import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function HeaderTabs() {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton title="Delivery" />
      <HeaderButton title="Pickup" btnColor="white" textColor="black" />
    </View>
  );
}

const HeaderButton = ({ title, btnColor = "black", textColor = "white" }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: `${btnColor}`,
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
    >
      <Text style={{ color: `${textColor}`, fontSize: 15, fontWeight: "900" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
