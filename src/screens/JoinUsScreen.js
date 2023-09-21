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
    alignItems: "left",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
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
  button: {
    backgroundColor: "#225500",
    padding: 20,
    color: "white",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
  logIn: {
    color: "#225500",
    fontWeight: "bold",
  },
  alreadyText: {
    marginVertical: 10,
  },
  /* 
    borderWidth: 2,
    borderColor: "red",
  */
});

const JoinUsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Waste Credit</Text>
      <Text style={styles.subHeading1}>{"The most\ncomprehensive"}</Text>
      <Text style={styles.subHeading2}>{"Waste management \nplatform"}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("CreateProfile");
        }}
      >
        <Text style={styles.buttonText}>Join Us Now</Text>
      </TouchableOpacity>
      <Text style={styles.alreadyText}>
        Already have an account? <Text style={styles.logIn}>Log In</Text>
      </Text>
    </SafeAreaView>
  );
};

JoinUsScreen.navigationOptions = {
  headerShown: false,
};

export default JoinUsScreen;
