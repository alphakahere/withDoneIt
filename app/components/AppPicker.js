import { Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";
import AppPickerItem from "./AppPickerItem";
import { useState } from "react";

export default function AppPicker({
	icon,
	placeholder,
	categories,
	selectedItem,
	onSelectedItem,
	width = "100%",
	PickerItemComponent = AppPickerItem,
	numberOfColumns = 1,
}) {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const toggleVisible = () => {
		setIsModalVisible((isModalVisible) => !isModalVisible);
	};

	return (
		<>
			<TouchableWithoutFeedback onPress={toggleVisible}>
				<View style={[styles.container, { width: width }]}>
					<MaterialCommunityIcons
						name={icon}
						size={20}
						color={colors.medium}
						style={styles.icon}
					/>
					{selectedItem ? (
						<AppText style={styles.text}>{selectedItem.label}</AppText>
					) : (
						<AppText style={styles.placeholder}>{placeholder}</AppText>
					)}
					<MaterialCommunityIcons
						name="chevron-down"
						size={20}
						color={colors.medium}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={isModalVisible} animationType="slide">
				<Button title="Close" onPress={toggleVisible} />
				<FlatList
					data={categories}
					keyExtractor={(categorie) => categorie.value.toString()}
					numColumns={numberOfColumns}
					renderItem={({ item }) => (
						<PickerItemComponent
							label={item.label}
							onPress={() => {
								onSelectedItem(item), toggleVisible();
							}}
							item={item}
						/>
					)}
				/>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 25,
		flexDirection: "row",
		width: "100%",
		padding: 15,
		marginVertical: 10,
		alignItems: "center",
	},
	icon: { marginRight: 10 },
	placeholder: { color: colors.medium, flex: 1 },
	text: {
		flex: 1,
	},
});
