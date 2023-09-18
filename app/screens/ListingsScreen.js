import { FlatList, StyleSheet } from "react-native";
import React from "react";
import Card from "../components/Card";
import Screen from "../components/Screen";
const listings = [
	{
		id: 1,
		title: "Red jacket for sale",
		price: "$100",
		image: require("../assets/jacket.jpg"),
	},
	{
		id: 1,
		title: "Couch in great condition",
		price: "$1000",
		image: require("../assets/jacket.jpg"),
	},
];
export default function ListingsScreen() {
	return (
		<Screen>
			<FlatList
				style={styles.container}
				data={listings}
				keyExtractor={(item) => item?.id.toString()}
				renderItem={({ item }) => (
					<Card title={item.title} image={item.image} subTitle={item.price} />
				)}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
});
