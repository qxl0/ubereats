import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SearchBar() {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="ios-location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              marginRight: 10,
              flexDirection: "row",
              backgroundColor: "white",
              borderRadius: 50,
              padding: 5,
              alignItems: "center",
            }}
          >
            <Ionicons name="ios-search-sharp" size={24} />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
