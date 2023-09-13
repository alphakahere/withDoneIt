import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import ListingItem from "../components/ListingItem";
import colors from "../config/colors";
import CardListingItem from "../components/CardListingItem";

export default function AccountScreen() {
	return (
		<Screen>
			<View style={styles.container}>
				<ListingItem
					title="Mosh Hamedani"
					subTitle="programmingwithmosh@gmail.com"
					image={require("../assets/mosh.jpg")}
				/>
			</View>
			<CardListingItem title="My Listings" iconName="format-list-bulleted" />
			<CardListingItem title="My Messages" iconName="email" color="secondary" />
			<CardListingItem
				title="Log Out"
				iconName="logout"
				color="yellow"
				style={{ marginTop: 20 }}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		marginVertical: 20,
	},
});
