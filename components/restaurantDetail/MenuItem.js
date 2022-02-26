import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function MenuItem({
  restaurantName,
  foods,
  hideCheckbox,
  marginLeft,
}) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartReducer.selectedItems.items);

  const selectItem = (item, checkboxValue) => {
    if (checkboxValue) {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...item, restaurantName },
      });
    } else {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: { ...item, restaurantName },
      });
    }
  };

  const isSelected = (item, cartItems) => {
    return Boolean(cartItems?.find((i) => i.title === item.title));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={{
                  borderColor: "lightgray",
                  borderRadius: 0,
                }}
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                isChecked={isSelected(food, items)}
                fillColor="green"
              />
            )}
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = ({ food }) => (
  <View style={styles.foodInfo}>
    <Text style={styles.titleStyle}>{food.title}</Text>
    <Text>{food.description}</Text>
    <Text>{food.price}</Text>
  </View>
);

const FoodImage = ({ marginLeft, ...food }) => (
  <View>
    <Image
      source={{ uri: food.image }}
      style={{
        width: 70,
        height: 70,
        borderRadius: 20,
        marginLeft: marginLeft,
      }}
    />
  </View>
);
const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  foodInfo: {
    width: 240,
    justifyContent: "space-evenly",
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
