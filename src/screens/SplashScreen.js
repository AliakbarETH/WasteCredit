import { React, useEffect } from "react";
import { StyleSheet, Image, SafeAreaView, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: 300,
    height: 300,
    aspectRatio: 1,
  },
});

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Reuse");
    }, 3500);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo.png")} />
    </SafeAreaView>
  );
};

SplashScreen.navigationOptions = {
  headerShown: false,
};

export default SplashScreen;
