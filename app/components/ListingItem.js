import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import colors from "../config/colors";

const ListingItem = ({ image, title, subTitle }) => {
	return (
		<View style={styles.profileContainer}>
			<Image source={image} resizeMode="contain" style={styles.avatar} />
			<View>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subTitle}>{subTitle}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 14,
		fontWeight: "600",
		marginBottom: 3,
	},
	subTitle: {
		fontSize: 14,
		color: colors.medium,
	},
	profileContainer: {
		flexDirection: "row",
		gap: 5,
	},
	avatar: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
});

export default ListingItem;
