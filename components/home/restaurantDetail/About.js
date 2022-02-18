import { View, Image } from "react-native";
import React from "react";

const image =
  "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg";

const title = "Farmhouse Kitchen Thai Cuisine";
const description = "Thai  Comfort Food Restaurant $$ 4.5 ⭐ (2900+)";
export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);
