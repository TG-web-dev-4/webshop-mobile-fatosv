import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Colors from "../constants/Colors";

const { height, width } = Dimensions.get("window");

const ListItem = ({ onSelect, image, name, price }) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: image }} />
        </View>
        <View style={styles.productInfo}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.price}>€{price.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    margin: 10,
    height: height * 0.25,
    width: width * 0.85,
    backgroundColor: Colors.background,
    borderRadius: 15,
    shadowColor: Colors.primary,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 7,
    elevation: 5,
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: "80%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  productInfo: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontFamily: "title-text",
    color: Colors.primary,
    fontSize: 16,
  },
  price: {
    fontFamily: "title-text",
    color: Colors.primary,
    fontSize: 16,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "flex-end",
  },
});

export default ListItem;
