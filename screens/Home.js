import { SafeAreaView, ScrollView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";
import BottomTabs from "../components/home/BottomTabs";
import { Divider } from "react-native-elements";
// import SafeAreaView from "react-native-safe-area-view";
const YELP_API_KEY =
  "p3_HRi88-pD970fEe7QHFAn5wR4E4lSmwABT5L-U6rCWkaiP7W7ti4ohp_In2ACB_uq1nWMayrtyjdCbi0t_FK2fraE-_EKl9-zVNBt8mEYu4q6jTaLhSgqcu5UNYnYx";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("Malvern, PA");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurants = async () => {
    const yelpurl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}'&limit=50`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpurl, apiOptions)
      .then((res) => res.json())
      .then((json) => {
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        );
      });
  };

  useEffect(() => {
    getRestaurants();
  }, [city, activeTab]);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showVerticalScrollINdicator={false}>
        <Categories />
        <RestaurantItems restaurantsData={restaurantData} />
      </ScrollView>
      <Divider />
      <BottomTabs />
    </SafeAreaView>
  );
}
