import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import Home from "@/screens/Home";
import About from "@/screens/About";
import ReanimateScreen from "@/screens/Reanimate";

// Create the stack navigator
const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{ header: () => null, headerShown: false }}
    >
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.About} component={About} />
      <Stack.Screen name={Routes.Reanimate} component={ReanimateScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
