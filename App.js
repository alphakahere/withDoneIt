import { StyleSheet } from "react-native";
import colors from "./app/config/colors";
import MessageScreen from "./app/screens/MessageScreen";
import Screen from "./app/components/Screen";

export default function App() {
	return (
		<Screen>
			<MessageScreen />
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.gray,
	},
});
