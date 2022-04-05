import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoritesScreen from "../screens/FavoritesScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import Colors from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import StackNavigator from "./StackNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
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
          component={StackNavigator}
          options={{
            tabBarIcon: (tabInfo) => {
              return <AntDesign name="home" size={24} color={tabInfo.color} />;
            },
          }}
        />
        <Tab.Screen
          name="Products"
          component={ProductsScreen}
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <AntDesign name="appstore-o" size={24} color={tabInfo.color} />
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
                <AntDesign name="hearto" size={24} color={tabInfo.color} />
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
                  size={24}
                  color={tabInfo.color}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
