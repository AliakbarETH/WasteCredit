import { React, useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "left",
    paddingHorizontal: 20,
    // borderWidth: 2,
    // borderColor: "blue",
  },
  heading: {
    fontSize: 25,
    textAlign: "left",
    marginBottom: 20,
    // borderWidth: 2,
    // borderColor: "blue",
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
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    padding: 10,
    paddingLeft: 0,
    marginBottom: 15,
  },
});

const SetPasswordScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");

  const handleFormSubmit = () => {
    console.log("password:", password);
    navigation.navigate("VerificationSuccess");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Set Password</Text>
      <Text style={styles.subHeading}>
        {"Set your account password. Nothing hard for you to forget :)"}
      </Text>
      <View>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Enter Password"
        />
      </View>
      <View>
        <Text style={styles.label}>Confirm Password:</Text>
        <TextInput style={styles.input} placeholder="Confirm Password" />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

SetPasswordScreen.navigationOptions = {
  headerShown: false,
};

export default SetPasswordScreen;
