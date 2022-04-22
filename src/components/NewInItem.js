import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Colors from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";

const NewInItem = ({ navigation }) => {
  const newIn = useSelector((state) => state.products[0]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>New in this week:</Text>
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Products", {
              screen: "ProductDetail",
              params: { item: newIn, id: newIn.id, name: newIn.name },
            })
          }
          style={styles.imageContainer}
        >
          <Image style={styles.image} source={{ uri: newIn.imageUrl }} />
          <AntDesign
            style={{ position: "absolute", bottom: 5, right: 5 }}
            name="infocirlceo"
            size={18}
            color={Colors.background}
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.title}>{newIn.name}</Text>
          </View>
          <View>
            <Text style={styles.descriptionText}>
              Look at this beauty. Don't you want to drink your delicious
              ROASTED coffee from this incredible-looking ROASTED mug?
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NewInItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: "30%",
  },
  header: {
    fontFamily: "title-text",
    color: Colors.primary,
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  imageContainer: {
    shadowColor: Colors.primary,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 7,
    elevation: 5,
  },
  image: {
    height: 180,
    width: 150,
  },
  textContainer: {
    width: "40%",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
  title: {
    fontFamily: "title-text",
    fontSize: 18,
    color: Colors.primary,
  },
  descriptionText: {
    fontFamily: "main-text",
    fontSize: 16,
    color: Colors.primary,
  },
});
