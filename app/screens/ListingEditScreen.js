import { StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton, AppFormPicker as Picker } from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label("Title"),
	price: Yup.number().required().min(1).max(10000).label("Price"),
	description: Yup.string().required().label("Description"),
	category: Yup.object().nullable().label("Category"),
	images: Yup.array().min(1, "Please select at least one image."),
});
const categories = [
	{
		backgroundColor: "#fc5c65",
		icon: "floor-lamp",
		label: "Furniture",
		value: 1,
	},
	{
		backgroundColor: "#fd9644",
		icon: "car",
		label: "Cars",
		value: 2,
	},
	{
		backgroundColor: "#fed330",
		icon: "camera",
		label: "Cameras",
		value: 3,
	},
	{
		backgroundColor: "#26de81",
		icon: "cards",
		label: "Games",
		value: 4,
	},
	{
		backgroundColor: "#2bcbba",
		icon: "shoe-heel",
		label: "Clothing",
		value: 5,
	},
	{
		backgroundColor: "#45aaf2",
		icon: "basketball",
		label: "Sports",
		value: 6,
	},
	{
		backgroundColor: "#4b7bec",
		icon: "headphones",
		label: "Movies & Music",
		value: 7,
	},
	{
		backgroundColor: "#a55eea",
		icon: "book-open-variant",
		label: "Books",
		value: 8,
	},
	{
		backgroundColor: "#778ca3",
		icon: "application",
		label: "Other",
		value: 9,
	},
];

export default function ListingEditScreen() {
	return (
		<Screen style={styles.container}>
			<AppForm
				initialValues={{
					title: "",
					price: null,
					description: "",
					category: null,
					images: [],
				}}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<>
					<FormImagePicker name="images" />
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
