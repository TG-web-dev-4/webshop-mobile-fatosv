import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import ListItem from "../components/ListItem";
import Colors from "../constants/Colors";

const ProductsScreen = ({ navigation, route }) => {
  const products = useSelector((state) => state.products.availableProducts);

  return (
    <View style={styles.screen}>
      <FlatList
        data={products}
        showsVerticalScrollIndicator={false}
        renderItem={(itemData) => (
          <ListItem
            image={itemData.item.imageUrl}
            name={itemData.item.name}
            price={itemData.item.price}
            onSelect={() =>
              navigation.navigate("ProductDetail", {
                name: itemData.item.name,
                productId: itemData.item.id,
              })
            }
            onAddToCart={() => {}}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  image: {
    width: "100%",
    height: "60%",
  },
  titleText: {
    fontFamily: "title-text",
    fontSize: 20,
  },
  mainText: {
    fontFamily: "main-text",
    fontSize: 18,
  },
});

export default ProductsScreen;
