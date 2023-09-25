import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import colors from "../config/colors";
import CardListingItem from "../components/lists/CardListingItem";
import ListingItem from "../components/lists/ListingItem";
import routes from "../navigation/routes";

export default function AccountScreen({ navigation }) {
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
			<CardListingItem
				title="My Messages"
				iconName="email"
				color="secondary"
				onPress={() => navigation.navigate(routes.MESSAGES)}
			/>
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
