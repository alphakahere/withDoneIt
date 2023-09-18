import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CardListingItem({ title, color = "primary", iconName, style }) {
	return (
		<View style={[styles.container, style]}>
			<View style={[styles.iconContainer, { backgroundColor: colors[color] }]}>
				<MaterialCommunityIcons name={iconName} size={20} color={colors.white} />
			</View>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.white,
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
		padding: 12,
	},
	iconContainer: {
		width: 35,
		height: 35,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 20,
	},
	title: {
		fontWeight: "500",
		fontSize: 16,
	},
});
