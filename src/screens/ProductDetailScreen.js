import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import Colors from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";

const ProductDetailScreen = ({ route }) => {
  const { productId } = route.params;
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );

  return (
    <ScrollView style={styles.screen}>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.actionContainer}>
        <Text style={styles.price}>€{selectedProduct.price.toFixed(2)}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <AntDesign name="shoppingcart" size={27} color={Colors.secondary} />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="hearto" size={27} color={Colors.secondary} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.background,
  },
  image: {
    width: "100%",
    height: 300,
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    fontFamily: "title-text",
    fontSize: 20,
    color: Colors.primary,
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "20%",
    justifyContent: "space-between",
    margin: 10,
  },
  description: {
    fontFamily: "main-text",
    fontSize: 17,
    marginHorizontal: 10,
    textAlign: "justify",
  },
});

export default ProductDetailScreen;
