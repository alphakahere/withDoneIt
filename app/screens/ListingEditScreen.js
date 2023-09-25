import { StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton, AppFormPicker as Picker } from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import ImageInput from "../components/ImageInput";
import { useState } from "react";

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label("Title"),
	price: Yup.number().required().min(1).max(10000).label("Price"),
	description: Yup.string().required().label("Description"),
	category: Yup.object().nullable().label("Category"),
});
const categories = [
	{ label: "Furniture", value: 1, bgColor: "red", icon: "apps" },
	{ label: "Clothing", value: 2, bgColor: "blue", icon: "email" },
	{ label: "Cameras", value: 3, bgColor: "yellow", icon: "apps" },
	{ label: "Computer", value: 4, bgColor: "purple", icon: "apps" },
];

export default function ListingEditScreen() {
	const [imageUri, setImageUri] = useState(null);

	return (
		<Screen style={styles.container}>
			<AppForm
				initialValues={{ title: "", price: null, description: "", category: null }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<>
					<ImageInput imageUri={imageUri} onChangeImage={setImageUri} />
					<AppFormField
						placeholder="Title"
						keyboardType="default"
						autoCapitalize="none"
						autoCorrect={false}
						name="title"
					/>
					<AppFormField
						placeholder="Price"
						keyboardType="numeric"
						autoCapitalize="none"
						autoCorrect={false}
						name="price"
						maxLength={8}
						width={120}
					/>
					<Picker
						placeholder="Category"
						items={categories}
						name="category"
						width="50%"
						PickerItemComponent={CategoryPickerItem}
						numberOfColumns={3}
					/>
					<AppFormField
						placeholder="Description"
						keyboardType="default"
						autoCapitalize="none"
						autoCorrect={false}
						name="description"
					/>
					<SubmitButton title="POST" />
				</>
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: "center",
		marginVertical: 20,
	},
});
