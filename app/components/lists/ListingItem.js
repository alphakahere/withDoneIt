import { View, Text, StyleSheet, Image, TouchableHighlight } from "react-native";
import React from "react";
import colors from "../../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListingItem = ({ image, title, subTitle, onPress, renderRightActions, numberOfLines }) => {
	return (
		<GestureHandlerRootView>
			<Swipeable renderRightActions={renderRightActions}>
				<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
					<View style={styles.container}>
						<Image
							source={image}
							resizeMode="contain"
							style={styles.avatar}
						/>
						<View style={styles.detailsContainer}>
							<Text style={styles.title}>{title}</Text>
							<Text
								style={styles.subTitle}
								numberOfLines={numberOfLines}
							>
								{subTitle}
							</Text>
						</View>
						<MaterialCommunityIcons name="chevron-right" size={20} />
					</View>
				</TouchableHighlight>
			</Swipeable>
		</GestureHandlerRootView>
	);
};
{
	/* <ListingItem
				image={require("./app/assets/mosh.jpg")}
				title="T1"
				subTitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id possimus veniam aperiam nisi odit veritatis voluptates reiciendis, repudiandae recusandae velit ad nemo. Illum vitae impedit ipsum laboriosam illo et corrupti?"
				numberOfLines={2}
			/> */
}
const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flexDirection: "row",
		gap: 5,
		padding: 10,
	},
	detailsContainer: {
		flex: 1,
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
