import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import Colors from "../constants/Colors";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>ROASTED</Text>
      </View>
      <View>
        <Button
          title="Take me to the coffee!"
          color={Colors.secondary}
          onPress={() => navigation.navigate("Products")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  header: {
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  title: {
    fontFamily: "title-text",
    fontSize: 45,
    color: Colors.primary,
  },
});

export default HomeScreen;
