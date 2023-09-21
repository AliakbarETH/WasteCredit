import { React } from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "left",
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: "left",
    marginBottom: 20,
  },
  subHeading: {
    marginBottom: 50,
  },
  button: {
    backgroundColor: "#225500",
    padding: 20,
    color: "white",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
  subHeading1: {
    color: "gray",
    fontSize: 20,
    marginVertical: 10,
  },
  subHeading2: {
    fontSize: 20,
    marginVertical: 10,
    marginBottom: 100,
  },
});

const VerificationSuccessScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.subHeading1}>Verfication Successful</Text>
      <Text style={styles.subHeading2}>
        Make money while you clean the enviroment
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

VerificationSuccessScreen.navigationOptions = {
  headerShown: false,
};

export default VerificationSuccessScreen;
