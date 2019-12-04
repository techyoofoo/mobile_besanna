import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from "../components/login";
import ForgotPasswordScreen from '../components/forgot-password';
import AppScanner from '../components/app-scanner';
import ActivateScanner from '../components/scanner-activation';
import ScanningMenu from '../components/scanning-menu';
import MyAccountScreen from '../components/my-account';

const Routes = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
        headerLeft: null
      }
    },
    ForgotPasswordScreen:{
      screen:ForgotPasswordScreen,
      navigationOptions:{
        header: null,
        headerLeft:null
      }
    },
    AppScanner:{
      screen:AppScanner,
      navigationOptions:{
        header: null,
        headerLeft:null
      }
    },
    ActivateScanner:{
      screen:ActivateScanner,
      navigationOptions:{
        header: null,
        headerLeft: null
      }
    },
    ScanningMenu:{
      screen:ScanningMenu,
      navigationOptions:{
        header: null,
        headerLeft: null
      }
    },
    MyAccountScreen:{
      screen:MyAccountScreen,
      navigationOptions:{
      header:null,
      headerLeft: null
    }
  }
  },
  {
    initialRouteName: "LoginScreen"
  }
);


const AppContainer = createAppContainer(Routes);

export default AppContainer;
