import { StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton, AppFormPicker as Picker } from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import listings from "../api/listings";

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label("Title"),
	price: Yup.number().required().min(1).max(10000).label("Price"),
	description: Yup.string().required().label("Description"),
	category: Yup.object().nullable().label("Category"),
	images: Yup.array().min(1, "Please select at least one image."),
});
const categories = [
	{
		bgColor: "#fc5c65",
		icon: "floor-lamp",
		label: "Furniture",
		value: 1,
	},
	{
		bgColor: "#fd9644",
		icon: "car",
		label: "Cars",
		value: 2,
	},
	{
		bgColor: "#fed330",
		icon: "camera",
		label: "Cameras",
		value: 3,
	},
	{
		bgColor: "#26de81",
		icon: "cards",
		label: "Games",
		value: 4,
	},
	{
		bgColor: "#2bcbba",
		icon: "shoe-heel",
		label: "Clothing",
		value: 5,
	},
	{
		bgColor: "#45aaf2",
		icon: "basketball",
		label: "Sports",
		value: 6,
	},
	{
		bgColor: "#4b7bec",
		icon: "headphones",
		label: "Movies & Music",
		value: 7,
	},
	{
		bgColor: "#a55eea",
		icon: "book-open-variant",
		label: "Books",
		value: 8,
	},
	{
		bgColor: "#778ca3",
		icon: "application",
		label: "Other",
		value: 9,
	},
];

export default function ListingEditScreen() {
	const location = useLocation();

	const onSubmit = async (values) => {
		console.log({ values, location });
		const response = await listings.addListing(values);
	};

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
				onSubmit={onSubmit}
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
