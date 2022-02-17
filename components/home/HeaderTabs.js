import { View, Text, TouchableOpacity, RefreshControlBase } from "react-native";
import React, { useState } from "react";

export default function HeaderTabs({ activeTab, setActiveTab }) {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => {
  const handleClick = () => {
    // console.log("clicked on:", props.text);
    // console.log("before calling set, activeTab = ", props.activeTab);
    props.setActiveTab(props.text);
    // console.log("after calling set, activeTab = ", props.activeTab);
  };
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab == props.text ? "black" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={handleClick}
    >
      <Text
        style={{
          color: props.activeTab == props.text ? "white" : "black",
          fontSize: 15,
          fontWeight: "900",
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
