import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoritesScreen from "../screens/FavoritesScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import Colors from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import StackNavigator from "./StackNavigator";
import HomeScreen from "../screens/HomeScreen";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { cartTotalItems } = useSelector((state) => state.shoppingCart);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.secondary,
          headerShown: false,
          tabBarInactiveTintColor: Colors.background,
          tabBarStyle: {
            backgroundColor: Colors.primary,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <AntDesign
                  name="home"
                  size={tabInfo.size}
                  color={tabInfo.color}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Products"
          component={StackNavigator}
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <AntDesign
                  name="appstore-o"
                  size={tabInfo.size}
                  color={tabInfo.color}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <AntDesign
                  name="hearto"
                  size={tabInfo.size}
                  color={tabInfo.color}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Cart"
          component={ShoppingCartScreen}
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <AntDesign
                  name="shoppingcart"
                  size={tabInfo.size}
                  color={tabInfo.color}
                />
              );
            },
            tabBarBadge: cartTotalItems,
            tabBarBadgeStyle: {
              backgroundColor: Colors.accent,
              color: Colors.primary,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
