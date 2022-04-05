import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsScreen from "../screens/ProductsScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import Colors from "../constants/Colors";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.primary,
        headerTitleStyle: {
          fontFamily: "title-text",
        },
      }}
    >
      <Stack.Screen
        name="Home Stack"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={{ title: "ALL PRODUCTS" }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen name="CartScreen" component={ShoppingCartScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
