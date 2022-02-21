import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>This is the home screen!</Text>
      <Button
        title="Products"
        onPress={() => navigation.navigate("Products")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
