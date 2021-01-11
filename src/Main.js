import React from "react";
import LoginScreen from "./containers/Auth/LoginScreen";
import { mapping, light as lightTheme } from "@eva-design/eva";
import { ApplicationProvider, Layout } from "@ui-kitten/components";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUpScreen from "./containers/Auth/SignUpScreen";
import HomeScreen from "./containers/App/HomeScreen";
import NewYear from "./containers/App/Year/NewYear";
import * as ROUTE from "./constants/routes";
const Stack = createStackNavigator();

const Main = () => {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      {/* <LoginScreen /> */}
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name={ROUTE.LOGIN} component={LoginScreen} />
          <Stack.Screen name={ROUTE.SIGNUP} component={SignUpScreen} />
          <Stack.Screen name={ROUTE.HOME} component={HomeScreen} />
          <Stack.Screen name={ROUTE.ADDYEAR} component={NewYear} />
          {/* <Stack.Screen name="Settings" component={Settings} /> */}
          {/* <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Settings" component={Settings} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default Main;
