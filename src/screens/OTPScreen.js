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
  reSend: {
    color: "#225500",
    fontWeight: "bold",
  },
  alreadyText: {
    marginVertical: 10,
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

const OTPScreen = ({ navigation }) => {
  const [otp, setOtp] = useState("");

  const handleFormSubmit = () => {
    console.log("otp:", otp);
    navigation.navigate("SetPassword");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>OTP Verification</Text>
      <Text style={styles.subHeading}>
        {"A 6 digit code has been sent to  \nabc@gmail.com"}
      </Text>
      <View>
        <Text style={styles.label}>OTP:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setOtp(text)}
          value={otp}
          placeholder="Enter OTP"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
      <Text style={styles.alreadyText}>
        Haven't gotten code yet? <Text style={styles.reSend}>Re-send code</Text>
      </Text>
    </SafeAreaView>
  );
};

OTPScreen.navigationOptions = {
  headerShown: false,
};

export default OTPScreen;
