import React from "react";
import Button from "../Button";
import { useFormikContext } from "formik";

const SubmitButton = ({ title }) => {
	const { handleSubmit } = useFormikContext();
	return <Button text={title} onPress={handleSubmit} />;
};

export default SubmitButton;
