import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, StyleSheet, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import { routes, colors, hp } from '../../services';
import HomeScreen from '../../screens/HomeScreen';
import MyRequestsScreen from '../../screens/MyRequestsScreen';
import VisaRequiredScreen from '../../screens/VisaRequiredScreen';
import MoreScreen from '../../screens/MoreScreen';

const Tab = createBottomTabNavigator();

const BottomTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconComponent;
          switch (route.name) {
            case routes.home:
              iconComponent = (
                <MaterialCommunityIcons
                  name={'home-variant'}
                  size={size * 0.8}
                  color={focused ? colors.primary : colors.tabBarInactive}
                />
              );
              break;
            case routes.myRequests:
              iconComponent = (
                <Feather
                  name={'clipboard'}
                  size={size * 0.8}
                  color={focused ? colors.primary : colors.tabBarInactive}
                />
              );
              break;
            case routes.visaRequired:
              iconComponent = (
                <FontAwesome6
                  name={'list-check'}
                  size={size * 0.8}
                  color={focused ? colors.primary : colors.tabBarInactive}
                />
              );
              break;
            case routes.more:
              iconComponent = (
                <Feather
                  name={'more-horizontal'}
                  size={size * 0.8}
                  color={focused ? colors.primary : colors.tabBarInactive}
                />
              );
              break;
            default:
              iconComponent = (
                <MaterialCommunityIcons
                  name={'bell'}
                  size={size * 0.8}
                  color={focused ? colors.primary : colors.tabBarInactive}
                />
              );
              break;
          }

          return iconComponent;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.tabBarInactive,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          height: Platform.OS === 'ios' ? hp(12) : 70,
          paddingTop: Platform.OS === 'ios' ? hp(1) : 15,
        },
        tabBarItemStyle: { bottom: Platform.OS === 'ios' ? hp(1) : 15 },
        tabBarLabel: ({ focused }) => {
          let label;
          switch (route.name) {
            case routes.home:
              label = 'Home';
              break;
            case routes.myRequests:
              label = 'My Requests';
              break;
            case routes.visaRequired:
              label = 'Visa Required';
              break;
            case routes.more:
              label = 'More';
              break;
            default:
              label = 'Alert';
              break;
          }

          return (
            <Text style={{ color: focused ? colors.primary : colors.tabBarInactive }}>
              {label}
            </Text>
          );
        }
      })}
    >
      <Tab.Screen
        name={routes.home}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={routes.myRequests}
        component={MyRequestsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={routes.visaRequired}
        component={VisaRequiredScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={routes.more}
        component={MoreScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default BottomTabs;
