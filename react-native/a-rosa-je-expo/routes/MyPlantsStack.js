import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import MyPlantsScreen from "../screens/MyPlantsScreen";
import CameraScreen from "../screens/CameraScreen";

const screens = {
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

const MyPlantsStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "green" },
  },
});

export default createAppContainer(MyPlantsStack);
