import { SafeAreaView, Text } from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import { collection, limit, query } from "firebase/firestore";
import { db } from "../firebase";

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
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);
  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const getOrders = async () => {
      const q = query(
        collection(db, "orders"),
        orderBy("createdAt", "desc"),
        limit(1)
      );
      const unsub = onSanpshot(q, (snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });
    };

    getOrders();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <LottieView
        source={require("../assets/animations/check-mark.json")}
        style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
        autoPlay
        speed={0.5}
        loop={false}
      />
      <Text>
        Your order at {restaurantName} has been placed for {totalUSD}
      </Text>

      <LottieView
        source={require("../assets/animations/cooking.json")}
        style={{ height: 200, alignSelf: "center" }}
        autoPlay
        speed={0.5}
      />
    </SafeAreaView>
  );
}
