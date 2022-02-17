import { SafeAreaView, ScrollView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantItems";

const YELP_API_KEY =
  "p3_HRi88-pD970fEe7QHFAn5wR4E4lSmwABT5L-U6rCWkaiP7W7ti4ohp_In2ACB_uq1nWMayrtyjdCbi0t_FK2fraE-_EKl9-zVNBt8mEYu4q6jTaLhSgqcu5UNYnYx";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("Malvern, PA");
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
        console.log("json", json);
        setRestaurantData(json.businesses);
      });
  };

  useEffect(() => {
    getRestaurants();
  }, []);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar cityHandler={setCity} />

        <ScrollView showVerticalScrollINdicator={false}>
          <Categories />
          <RestaurantItems restaurantsData={restaurantData} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
