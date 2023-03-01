import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import SignupForm from '../screens/Signup';
import MainPage from '../screens/Accueil';
import LoginScreen from '../screens/Login';
import MyPlantsScreen from "../screens/MyPlantsScreen";
import CameraScreen from "../screens/CameraScreen";



const screens = {
    Accueil: {
        screen: MainPage
    },

    Login: {
        screen: LoginScreen
    },

    Signup: {
        screen: SignupForm
    },
    MyPlants: {
        screen: MyPlantsScreen,
        navigationOptions: {
          title: "Mes plantes",
          // headerStyle: { backgroundColor: "lightGreen" },
        },
      },
      Camera: {
        screen: CameraScreen,
        navigationOptions: { title: "Prendre une photo" },
      },
};

const RoutesStack = createStackNavigator(screens);
export default createAppContainer(RoutesStack);