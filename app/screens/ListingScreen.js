import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import ListingItem from "../components/ListingItem";

export default function ListingScreen() {
	return (
		<View>
			<Image
				source={require("../assets/jacket.jpg")}
				resizeMode="cover"
				style={styles.image}
			/>
			<View style={{ padding: 20 }}>
				<View style={styles.cardInfoContainer}>
					<Text style={styles.cardTitle}>Red jacket for sale!</Text>
					<Text style={styles.subTitle}>100$</Text>
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
