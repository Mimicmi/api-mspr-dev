import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import SignupForm from '../screens/Signup';
import MainPage from '../screens/Accueil';
import LoginScreen from '../screens/Login';


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
    
};

const RoutesStack = createStackNavigator(screens);
export default createAppContainer(RoutesStack);