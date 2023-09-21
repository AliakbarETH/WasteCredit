import React from "react";
import {
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
    gap: 50,
  },
  button: {
    backgroundColor: "#225500",
    padding: 10,
    width: 5,
    height: 5,
    borderRadius: 40,
  },
  buttonGray: {
    backgroundColor: "silver",
    padding: 10,
    width: 5,
    height: 5,
    borderRadius: 40,
  },
  bannerLogo: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: 20,
    gap: 2,
  },
  textMain: {
    fontSize: 35,
    textAlign: "center",
  },
});

const ReduceScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.bannerLogo} source={require("../assets/2.png")} />
      <Text style={styles.textMain}>REDUCE</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.buttonGray}
          onPress={() => navigation.navigate("Reuse")}
        ></TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Reduce")}
        ></TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonGray}
          onPress={() => navigation.navigate("Recyle")}
        ></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

ReduceScreen.navigationOptions = {
  headerShown: false,
};

export default ReduceScreen;
