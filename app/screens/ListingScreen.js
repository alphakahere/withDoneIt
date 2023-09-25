import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import ListingItem from "../components/lists/ListingItem";

export default function ListingScreen({ route }) {
	const listing = route.params;
	return (
		<View>
			<Image source={listing.image} resizeMode="cover" style={styles.image} />
			<View style={{ padding: 20 }}>
				<View style={styles.cardInfoContainer}>
					<Text style={styles.cardTitle}>{listing.title}</Text>
					<Text style={styles.subTitle}>{listing.price}</Text>
				</View>
				<ListingItem
					image={require("../assets/mosh.jpg")}
					title="Alpha Diallo"
					subTitle="5 Listings"
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 200,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	cardInfoContainer: {
		padding: 10,
		marginBottom: 20,
	},
	cardTitle: {
		fontSize: 14,
		fontWeight: "400",
		marginBottom: 3,
	},
	subTitle: {
		fontSize: 14,
		fontWeight: "500",
		color: colors.secondary,
	},
});
