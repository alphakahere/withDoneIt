import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import colors from "./app/config/colors";
import ListingScreen from "./app/screens/ListingScreen";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<ExpoStatusBar style="auto" />
			{/* <WelcomeScreen /> */}
			<ViewImageScreen />
			{/* <Card
				title="Red jacket for sale!"
				subTitle="100$"
				image={require("./app/assets/jacket.jpg")}
			/> */}
			{/* <ListingScreen /> */}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// paddingTop: 50,
		backgroundColor: colors.gray,
		// justifyContent: "center",
	},
});
