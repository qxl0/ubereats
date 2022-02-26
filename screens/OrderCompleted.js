import { SafeAreaView, ScrollView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import {
  collection,
  limit,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import MenuItem from "../components/restaurantDetail/MenuItem";

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Bologna",
        description: "With butter lettuce, tomato, and red onion",
        price: "$10.00",
        image:
          "https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408?k=20&m=1155240408&s=612x612&w=0&h=Zvr3TwVQ-wlfBnvGrgJCtv-_P_LUcIK301rCygnirbk=",
      },
    ],
  });
  const [restaurantName, setRestaurantName] = useState("");
  const [total, setTotal] = useState(0);
  const [totalUSD, setTotalUSD] = useState(0);
  const calculateTotalUSD = () => {
    setTotalUSD(
      total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
      })
    );
  };

  useEffect(() => {
    const q = query(
      collection(db, "orders"),
      orderBy("createdAt", "desc"),
      limit(1)
    );
    const unsub = onSnapshot(q, (snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(doc.data(), "🙄");
        setLastOrder(doc.data());
        setRestaurantName(doc.data().restaurantName);
        setTotal(doc.data().total);
        console.log(total, "💲");
        calculateTotalUSD();
        console.log(totalUSD, "💲");
      });
    });

    return unsub;
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ margin: 15, alignItems: "center", height: "100%" }}>
        <LottieView
          source={require("../assets/animations/check-mark.json")}
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your order at {restaurantName} has been placed for {totalUSD}
        </Text>
        <ScrollView>
          <MenuItem foods={lastOrder.items} hideCheckbox={true} />
          <LottieView
            source={require("../assets/animations/cooking.json")}
            style={{ height: 200, alignSelf: "center" }}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
