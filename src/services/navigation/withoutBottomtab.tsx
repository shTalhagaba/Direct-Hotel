import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { routes } from "../../services";
import RequestService from "../../screens/RequestService";

const AppNavigator = createStackNavigator();

const WithoutBottomNavigation = () => {
  return (
    <AppNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppNavigator.Screen
        name={routes.requestService}
        component={RequestService}
      />
    </AppNavigator.Navigator>
  );
};
export default WithoutBottomNavigation;
