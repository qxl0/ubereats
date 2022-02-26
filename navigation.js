import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import OrderCompleted from "./screens/OrderCompleted";

const store = configureStore();

export default function RootNavigation() {
  const stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <stack.Screen name="Home" component={Home} />
          <stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
          <stack.Screen name="OrderCompleted" component={OrderCompleted} />
        </stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
