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
  },
  welcomeText: {
    color: "#225500",
    fontWeight: "bold",
    marginBottom: 10,
  },
  heading: {
    fontSize: 25,
    textAlign: "left",
    fontWeight: "bold",
    marginBottom: 20,
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

const CreateProfileScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");

  const handleFormSubmit = () => {
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Role:", role);
    console.log("Location:", location);
    navigation.navigate("OTP");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to</Text>
      <Text style={styles.heading}>Waste Credit</Text>
      <View>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setFullName(text)}
          value={fullName}
          placeholder="Enter Full Name"
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Enter Email Address"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Role:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setRole(text)}
          value={role}
          placeholder="Enter Role"
        />

        <Text style={styles.label}>Location:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setLocation(text)}
          value={location}
          placeholder="Enter Location"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

CreateProfileScreen.navigationOptions = {
  headerShown: false,
};

export default CreateProfileScreen;
