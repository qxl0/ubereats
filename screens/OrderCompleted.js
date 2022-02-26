import { View, Text } from "react-native";
import React from "react";

export default function OrderCompleted({ restaurantName, totalUSD }) {
  return (
    <View>
      <Text>
        Your order at {restaurantName} has been placed for {totalUSD}
      </Text>
    </View>
  );
}
