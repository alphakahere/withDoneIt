import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function Card() {
	return (
		<View style={styles.card}>
			<Image
				source={require("../assets/jacket.jpg")}
				resizeMode="cover"
				style={styles.image}
			/>
			<View style={styles.cardInfoContainer}>
				<Text style={styles.cardTitle}>Red jacket for sale!</Text>
				<Text style={styles.subTitle}>100$</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: "#FFF",
		borderRadius: 10,
	},
	image: {
		width: "100%",
		height: 200,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	cardInfoContainer: {
		padding: 10,
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
