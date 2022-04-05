import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Colors from "../constants/Colors";
import PRODUCTS from "../data/data";

const HomeScreen = ({ navigation }) => {
  const bestProductsIndex = Math.round(Math.random(PRODUCTS.length));

  return (
    <View style={styles.screen}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>ROASTED</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvYTAxNS1oZWxlbmFsLTE0Mi5qcGc.jpg?s=zikKq89kiveQngLaxLpu3LYfQmN69IYBVrgfaMRpjmw",
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Short statement that is both witty and inspiring. Important to stress
          the awesomeness of coffee and how miserable life would be without it.
          At least two puns and maybe one personal anecdote.
        </Text>
      </View>
      <View style={styles.bestsellers}>
        <Text style={styles.bestsellersText}>Bestsellers of this week:</Text>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.bestImage}
            source={{ uri: PRODUCTS[bestProductsIndex].imageUrl }}
          />
          <Image
            style={styles.bestImage}
            source={{ uri: PRODUCTS[bestProductsIndex].imageUrl }}
          />
          <Image
            style={styles.bestImage}
            source={{ uri: PRODUCTS[bestProductsIndex].imageUrl }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 10,
    backgroundColor: Colors.background,
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontFamily: "title-text",
    fontSize: 45,
    color: Colors.primary,
  },
  imageContainer: {
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Colors.primary,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 7,
    elevation: 5,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  textContainer: {},
  text: {
    fontFamily: "main-text",
    fontSize: 16,
    color: Colors.primary,
  },
  bestsellers: {
    height: "20%",
    width: "100%",
    alignItems: "center",
  },
  bestsellersText: {
    fontFamily: "title-text",
    fontSize: 18,
    textAlign: "center",
  },
  bestImage: {
    width: 100,
    height: 120,
    margin: 10,
  },
});

export default HomeScreen;
