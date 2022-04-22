import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import Colors from "../constants/Colors";
import { useSelector, useDispatch } from "react-redux";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  addToCart,
  decreaseQuantity,
  clearCart,
  getTotal,
  removeFromCart,
} from "../features/shoppingcart/shoppingCartSlice";

const ShoppingCartScreen = ({ navigation }) => {
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const totalPrice = useSelector((state) => state.shoppingCart.cartTotalPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [shoppingCart, dispatch]);

  const onRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const onDecrease = (cartItem) => {
    dispatch(decreaseQuantity(cartItem));
  };

  const onIncrease = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const onOrderNow = () => {
    Alert.alert("Your order is being processed!");
    dispatch(clearCart());
  };

  return (
    <View style={styles.screen}>
      {shoppingCart.cartItems.length === 0 ? (
        <View style={styles.default}>
          <Text style={styles.text}>Your cart is empty..</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Products", {
                screen: "Products Stack",
              })
            }
          >
            <Image
              style={styles.image}
              source={{
                uri: "https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iMTkwLXdpdC00MC5qcGc.jpg?s=0NbtfaEwUYKvdtngHYSvk5P21kPyYvgnxivfZVDCnqY",
              }}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <View style={styles.cartContainer}>
            {shoppingCart.cartItems?.map((cartItem) => (
              <View style={styles.cartItems} key={cartItem.id}>
                <View style={styles.counter}>
                  <TouchableOpacity onPress={() => onDecrease(cartItem)}>
                    <MaterialCommunityIcons
                      name="minus-box-outline"
                      size={20}
                      color={Colors.secondary}
                    />
                  </TouchableOpacity>
                  <Text style={styles.text}>{cartItem.cartQuantity}</Text>
                  <TouchableOpacity onPress={() => onIncrease(cartItem)}>
                    <MaterialCommunityIcons
                      name="plus-box-outline"
                      size={20}
                      color={Colors.secondary}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ width: "60%" }}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Products", {
                        screen: "ProductDetail",
                        params: {
                          item: cartItem,
                          id: cartItem.id,
                          name: cartItem.name,
                        },
                      })
                    }
                  >
                    <Text style={styles.text}>{cartItem.name}</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ width: "15%" }}>
                  <Text style={styles.price}>
                    € {(cartItem.price * cartItem.cartQuantity).toFixed(2)}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => onRemoveFromCart(cartItem)}>
                  <AntDesign name="delete" size={18} color="red" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <View style={styles.summary}>
            <View style={styles.totalContainer}>
              <Text style={styles.text}>Total:</Text>
              <Text style={styles.price}>€ {totalPrice.toFixed(2)}</Text>
            </View>
            <Button
              onPress={() => onOrderNow()}
              color={Colors.secondary}
              title="Order Now"
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "space-around",
    alignItems: "center",
  },
  default: {
    justifyContent: "space-around",
    alignItems: "center",
    height: "70%",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 50,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  cartContainer: {
    marginTop: "20%",
    height: "70%",
    width: "100%",
  },
  cartItems: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "10%",
    padding: 5,
  },
  counter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "15%",
  },
  text: {
    fontFamily: "title-text",
    fontSize: 16,
    color: Colors.primary,
  },
  price: {
    fontFamily: "main-text",
    fontSize: 16,
    color: Colors.secondary,
  },
  summary: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
    padding: 10,
    shadowColor: Colors.primary,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 7,
    elevation: 5,
    backgroundColor: Colors.background,
    borderRadius: 15,
  },
  totalContainer: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-around",
  },
});

export default ShoppingCartScreen;
