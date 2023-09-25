import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingScreen from "../screens/ListingScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
	<Stack.Navigator screenOptions={{ headerShown: false, presentation: "modal" }}>
		<Stack.Screen name="Listings" component={ListingsScreen} />
		<Stack.Screen name="ListingDetails" component={ListingScreen} />
	</Stack.Navigator>
);

export default FeedNavigator;
