import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import SplashScreen from "./src/screens/splash/splash";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        {/* Add your other screens here */}
        {/* <Stack.Screen name="MainScreen" component={MainScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

/*
  View -> div
  Text -> p
  Image -> img
  ScrollView -> div (with multiple components and views)
  TextInput -> input
 */
