import { SafeAreaView, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantItems";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />

        <ScrollView showVerticalScrollINdicator={false}>
          <Categories />
          <RestaurantItems restaurantsData={restaurantData} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
