import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function Card({ title, subTitle, imageUrl, onPress }) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.card}>
				<Image
					source={{ uri: imageUrl }}
					resizeMode="contain"
					style={styles.image}
				/>
				<View style={styles.cardInfoContainer}>
					<Text style={styles.cardTitle}>{title}</Text>
					<Text style={styles.subTitle}>{subTitle}</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: "#FFF",
		borderRadius: 20,
		overflow: "hidden",
		marginBottom: 20,
	},
	image: {
		width: "100%",
		height: 200,
	},
	cardInfoContainer: {
		padding: 20,
	},
	cardTitle: {
		fontSize: 14,
		fontWeight: "400",
		marginBottom: 3,
	},
	subTitle: {
		fontSize: 14,
		fontWeight: "bold",
		color: colors.secondary,
	},
});
