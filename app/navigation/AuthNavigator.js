import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

function AuthNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={WelcomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Register" component={LoginScreen} />
		</Stack.Navigator>
	);
}

export default AuthNavigator;
