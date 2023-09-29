import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import Card from "../components/Card";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import { useEffect } from "react";
import AppText from "../components/AppText";
import Button from "../components/Button";
import colors from "../config/colors";

// const listings = [
// 	{
// 		id: 1,
// 		title: "Red jacket for sale",
// 		price: "$100",
// 		image: require("../assets/jacket.jpg"),
// 	},
// 	{
// 		id: 2,
// 		title: "Couch in great condition",
// 		price: "$1000",
// 		image: require("../assets/jacket.jpg"),
// 	},
// ];

export default function ListingsScreen({ navigation }) {
	const [listings, setListings] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		loadListings();
	}, []);

	const loadListings = async () => {
		setLoading(true);

		const response = await listingsApi.getListings();
		setLoading(false);

		if (!response.ok) return setError(true);

		setError(false);
		setListings(response.data);
	};

	return (
		<Screen>
			{error && (
				<>
					<AppText>Couldn't retrieve the listings</AppText>
					<Button text="Retry" onPress={loadListings} />
				</>
			)}
			<ActivityIndicator animating={loading} size={40} />
			<FlatList
				style={styles.container}
				data={listings}
				keyExtractor={(item) => item?.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						imageUrl={item.image}
						subTitle={item.price}
						onPress={() =>
							navigation.navigate(routes.LISTING_DETAILS, item)
						}
					/>
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
