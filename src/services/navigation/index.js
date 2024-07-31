import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../../screens/SplashScreen";
import { routes } from '../constants';
import BottomTabs from "./bottomTab";
import withoutBottomtab from "./withoutBottomtab";

const Stack = createStackNavigator();

const AppStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" options={{ headerShown: false }}>
                {props => <BottomTabs {...props} />}
            </Stack.Screen>
            <Stack.Screen name="WithoutBottom" component={withoutBottomtab} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const App: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
                name={routes.splash}
                component={Splash}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={routes.bottomTab}
                component={AppStackNavigator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default App;
