import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import NewInItem from "../components/NewInItem";
import Colors from "../constants/Colors";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>ROASTED</Text>
      </View>
      <View style={styles.hero}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvYTAxNS1oZWxlbmFsLTE0Mi5qcGc.jpg?s=zikKq89kiveQngLaxLpu3LYfQmN69IYBVrgfaMRpjmw",
            }}
          />
        </View>
        <View>
          <Text style={styles.text}>
            Short statement that is both witty and inspiring. Important to
            stress the awesomeness of coffee and how miserable life would be
            without it. At least two puns and maybe one personal anecdote.
          </Text>
        </View>
      </View>
      <View style={styles.seperatorLine}></View>
      <NewInItem navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: Colors.background,
  },
  headerContainer: {
    paddingTop: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontFamily: "title-text",
    fontSize: 45,
    color: Colors.primary,
  },
  hero: {
    height: "40%",
    width: "100%",
    justifyContent: "space-between",
  },
  imageContainer: {
    width: "100%",
    height: "60%",
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
  text: {
    fontFamily: "main-text",
    fontSize: 17,
    color: Colors.primary,
    textAlign: "center",
  },
  seperatorLine: {
    width: "100%",
    borderBottomColor: Colors.accent,
    borderBottomWidth: 1,
  },
});

export default HomeScreen;
