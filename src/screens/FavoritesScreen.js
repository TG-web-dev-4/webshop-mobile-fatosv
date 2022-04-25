import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { useSelector } from "react-redux";
import ListItem from "../components/ListItem";

const FavoritesScreen = ({ navigation }) => {
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <View style={styles.screen}>
      {favorites.length === 0 ? (
        <View style={styles.default}>
          <Text style={styles.text}>You don't have any favorites yet..</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          showsVerticalScrollIndicator={false}
          renderItem={(itemData) => (
            <ListItem
              image={itemData.item.imageUrl}
              name={itemData.item.name}
              price={itemData.item.price}
              onSelect={() =>
                navigation.navigate("ProductDetail", {
                  id: itemData.item.id,
                  item: itemData.item,
                  name: itemData.item.name,
                })
              }
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: "15%",
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  default: {
    justifyContent: "space-around",
    alignItems: "center",
    height: "70%",
  },
  text: {
    fontFamily: "title-text",
    fontSize: 16,
    color: Colors.primary,
  },
});

export default FavoritesScreen;
