import { React } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "left",
    padding: 20,
    backgroundColor: "white",
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginRight: 20,
  },
  banner: {
    height: 300,
    width: 300,
  },
  headerView: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
    top: 50,
  },
  coinsText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 80,
  },
  searchIcon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    height: 40,
    color: "#333",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    height: 60,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Image
            source={require("../assets/user.jpeg")}
            style={styles.userImage}
          ></Image>
          <Text style={styles.coinsText}>
            90{" "}
            <Text style={{ color: "gray", fontWeight: "normal" }}>coins</Text>
          </Text>
        </View>
        <View style={styles.searchBox}>
          <AntDesign
            name="search1"
            size={20}
            color="#888"
            style={styles.searchIcon}
          />

          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#888"
          />
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.icon}>
          <AntDesign name="home" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <AntDesign name="camera" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <AntDesign name="shoppingcart" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <AntDesign name="enviromento" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </>
  );
};

HomeScreen.navigationOptions = {
  headerShown: false,
};

export default HomeScreen;
