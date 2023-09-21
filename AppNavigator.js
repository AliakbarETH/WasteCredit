import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ReuseScreen from "./src/screens/ReuseScreen";
import ReduceScreen from "./src/screens/ReduceScreen";
import RecyleScreen from "./src/screens/RecyleScreen";
import SplashScreen from "./src/screens/SplashScreen";
import JoinUsScreen from "./src/screens/JoinUsScreen";
import CreateProfileScreen from "./src/screens/CreateProfileScreen";
import OTPScreen from "./src/screens/OTPScreen";
import SetPasswordScreen from "./src/screens/SetPasswordScreen";
import VerificationSuccessScreen from "./src/screens/VerificationSuccessScreen";
import HomeScreen from "./src/screens/HomeScreen";

const AppNavigator = createStackNavigator(
  {
    Splash: SplashScreen,
    Reuse: ReuseScreen,
    Reduce: ReduceScreen,
    Recyle: RecyleScreen,
    JoinUs: JoinUsScreen,
    CreateProfile: CreateProfileScreen,
    OTP: OTPScreen,
    SetPassword: SetPasswordScreen,
    VerificationSuccess: VerificationSuccessScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: "Home",
  }
);

export default createAppContainer(AppNavigator);
