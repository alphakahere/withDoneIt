import {} from "react-native";
import React from "react";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

export default function FormImagePicker({ name }) {
	const { touched, errors, setFieldValue, values } = useFormikContext();

	const imageUris = values[name];
	console.log({ imageUris });

	const onAddImage = (uri) => {
		setFieldValue(name, [...imageUris, uri]);
	};

	const onRemoveImage = (uri) => {
		setFieldValue(
			name,
			imageUris.filter((imageUri) => imageUri !== uri)
		);
	};

	return (
		<>
			<ImageInputList
				imageUris={imageUris}
				onAddImage={onAddImage}
				onRemoveImage={onRemoveImage}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}
