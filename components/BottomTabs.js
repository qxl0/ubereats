import { View, Text } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icon icon="home" text="Home" />
      <Text>BottomTabs</Text>
      <Text>BottomTabs</Text>
    </View>
  );
}

const Icon = (props) => (
  <View>
    <FontAwesome5
      name={props.icon}
      icon={25}
      style={{
        marginBottom: 3,
        alignSelf: "center",
      }}
    />
    <Text>{props.text}</Text>
  </View>
);
