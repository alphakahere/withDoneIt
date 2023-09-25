import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import ImageInput from "./ImageInput";

export default function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {
	return (
		<View style={styles.container}>
			<ScrollView horizontal>
				{imageUris.map((uri) => (
					<View key={uri} style={styles.image}>
						<ImageInput
							imageUri={uri}
							onChangeImage={() => onRemoveImage(uri)}
						/>
					</View>
				))}
				<ImageInput onChangeImage={(uri) => onAddImage(uri)} />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
	image: {
		marginRight: 10,
	},
});
