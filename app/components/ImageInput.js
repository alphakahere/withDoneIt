import { Alert, Image, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { useState } from "react";

export default function ImageInput({ imageUri, onChangeImage }) {
	useEffect(() => {
		requestPermission();
	}, []);

	const requestPermission = async () => {
		const { granted } = await ImagePicker.requestCameraPermissionsAsync();
		if (!granted) alert("You need to enable permission to access the library");
	};

	const handlePress = async () => {
		if (!imageUri) selectImage();
		else {
			Alert.alert("Delete", "Are you sure, you want to delete this image ?", [
				{ text: "Yes", onPress: () => onChangeImage(null) },
				{ text: "No" },
			]);
		}
	};

	const selectImage = async () => {
		try {
			let result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5,
			});
			console.log(result.uri);
			if (!result.canceled) onChangeImage(result.uri);
		} catch (error) {
			console.log("Error reading image", error);
		}
	};

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				{imageUri && (
					<Image
						source={{ uri: imageUri }}
						alt="Image uri"
						style={styles.image}
					/>
				)}
				{!imageUri && (
					<MaterialCommunityIcons
						name="camera"
						size={40}
						color={colors.medium}
					/>
				)}
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		width: 80,
		height: 80,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 15,
		marginVertical: 10,
		overflow: "hidden",
	},
	image: {
		height: "100%",
		width: "100%",
	},
});
