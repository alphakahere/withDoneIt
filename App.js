import { Switch } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";
import { useState } from "react";

const categories = [
	{ label: "Furniture", value: 1 },
	{ label: "Clothing", value: 2 },
	{ label: "Cameras", value: 3 },
	{ label: "Computer", value: 4 },
];

export default function App() {
	const [categorie, setCategorie] = useState(categories[0]);

	return (
		<Screen>
			<AppPicker
				icon="apps"
				placeholder="Category"
				categories={categories}
				selectedItem={categorie}
				onSelectedItem={(item) => setCategorie(item)}
			/>
			<AppTextInput icon="email" placeholder="Email" />
		</Screen>
	);
}
