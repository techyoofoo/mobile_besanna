import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "../components/login";
import ForgotPasswordScreen from "../components/forgot-password";
import AppScanner from "../components/app-scanner";
import ActivateScanner from "../components/scanner-activation";
import ScanningMenu from "../components/scanning-menu";
import MyAccountScreen from "../components/my-account";
import SelfScanScreen from '../components/scan-menu/self-scan';
import FriendList from '../components/scan-menu/firends-list';
import ScanAFriend from '../components/scan-menu/scan-friend';
import PersonalizePerference from '../components/personalize-preference';
import LoadCamera from '../components/load-camera';
import ScanReport from '../components/scan-report';
import LoadRecords from '../components/load-records';
import PreviousScanResults from "../components/scan-menu/previous-scan";
import TestReport from "../components/testscreen";

const Routes = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
        headerLeft: null
      }
    },
    ForgotPasswordScreen: {
      screen: ForgotPasswordScreen,
      navigationOptions: {
        header: null,
        headerLeft: null
      }
    },
    AppScanner: {
      screen: AppScanner,
      navigationOptions: {
        header: null,
        headerLeft: null
      }
    },
    ActivateScanner: {
      screen: ActivateScanner,
      navigationOptions: {
        header: null,
        headerLeft: null
      }
    },
    ScanningMenu: {
      screen: ScanningMenu,
      navigationOptions: {
        header: null,
        headerLeft: null
      }
    },
    MyAccountScreen: {
      screen: MyAccountScreen,
      navigationOptions: {
        header: null,
        headerLeft: null
      }
    },
    SelfScanScreen:{
      screen:SelfScanScreen,
      navigationOptions: {
        header: null,
        headerLeft: null
      }
    },
    FriendList:{
      screen: FriendList,
      navigationOptions:{
        header: null,
        headerLeft: null
      }
    },
    ScanAFriend:{
      screen: ScanAFriend,
      navigationOptions:{
        header:null,
        
      }
    },
    PersonalizePerference:{
      screen: PersonalizePerference,
      navigationOptions:{
        header: null,
        headerLeft: null
      }
    },
    LoadCamera:{
      screen: LoadCamera,
      navigationOptions:{
        header:null,        
      }
    },
    ScanReport:{
      screen:ScanReport,
      navigationOptions:{
        header: null,
        headerLeft: null
      }
    },
    LoadRecords: {
      screen:LoadRecords,
      navigationOptions:{
        header: null,
        headerLeft: null
      }
    },
    PreviousScanResults:{
      screen:PreviousScanResults,
      navigationOptions:{
        header: null,
        headerLeft: null
      }
    },
    TestReport:{
      screen:TestReport,
      navigationOptions:{
        header: null,
        headerLeft: null
      }
    }
  },
  {
    initialRouteName: "TestReport"
  }
);

const AppContainer = createAppContainer(Routes);

export default AppContainer;
