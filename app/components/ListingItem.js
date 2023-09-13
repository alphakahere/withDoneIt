import { View, Text, StyleSheet, Image, TouchableHighlight } from "react-native";
import React from "react";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

const ListingItem = ({ image, title, subTitle, onPress, renderRightActions }) => {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
				<View style={styles.container}>
					<Image source={image} resizeMode="contain" style={styles.avatar} />
					<View>
						<Text style={styles.title}>{title}</Text>
						<Text style={styles.subTitle}>{subTitle}</Text>
					</View>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		gap: 5,
		padding: 10,
	},
	title: {
		fontSize: 14,
		fontWeight: "600",
		marginBottom: 3,
	},
	subTitle: {
		fontSize: 14,
		color: colors.medium,
	},
	avatar: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
});

export default ListingItem;
