import { StyleSheet, Dimensions } from "react-native";
import {color_theme} from '../constants';

export const deviceDimensions = Dimensions.get("window");
export const themeColor = color_theme;
export const textColor = "#fff";

const appStyleSheets = StyleSheet.create({
  bgHeader: {
    borderColor: themeColor,
    borderWidth: 2,
    borderStyle: "solid",
    padding: 10,
    height: 180,
    backgroundColor: themeColor,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    justifyContent:'center',
    alignContent:'center'    
    // margin: 10
  },
  inputBorderStyle: {
    borderWidth: 1,
    borderRadius: 1,
    borderStyle: "dotted",
    borderColor: "#fff",
    margin: 10
  },
  header: {
    color: "#fff",
    textAlign: "center",
    fontSize: 55,
    paddingTop: 38,
    letterSpacing: 1
  },
  loginHeader: {
    color: themeColor,
    textAlign: "center",
    paddingTop: 30,
    fontSize: 30,
    fontWeight: "bold"
  },
  textBoxStyle: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: themeColor,
    margin: 10,
    // borderStyle: "dotted",
    borderWidth: 1,
    fontSize: 16
  },
  labelStyle: {
    color: themeColor,
    paddingLeft: 10,
    fontSize: 16
  },
  buttonStyle: {
    marginTop: 20,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: themeColor,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#fff"
  },
  bttonTextStyle: { color: "#fff", textAlign: "center", fontSize: 25 },
  //-------------------------------------------------App scanner starts---------------------
  appScannerHeader: {
    textAlign: "center",
    paddingTop: 20,
    fontSize: 30
  },
  appScannerText: {
    textAlign: "center",
    paddingTop: 20,
    fontSize: 15
  },
  appScannerImage: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 140
  },
  //-------------------------------------------------App scanner ends---------------------

  //---------------------------Scanner Activation starts----------------------------------
  activateScannerHeader: {
    textAlign: "center",
    paddingTop: 20,
    fontSize: 30,
    fontWeight: "bold"
  },
  activateScannerText: {
    textAlign: "center",
    paddingTop: 20,
    fontSize: 15
  },
  activateScannerTips: {
    textAlign: "center",
    paddingTop: 30,
    fontSize: 15
  },
  btnActivateScanner: {
    marginTop: 40,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#fff",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: themeColor
  },
  //---------------------------Scanner Activation ends------------------------------------

  //--------------------------Scan menu options starts------------------------------------
  btnScanMenu: {
    // marginTop: 30,
    // paddingTop: 15,
    // paddingBottom: 15,
    // marginLeft: 30,
    // marginRight: 30,
    backgroundColor: themeColor,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
    width: 80
  },
  btnTextScanMenu: {
    // marginTop: 40,
    // paddingTop: 15,
    // paddingBottom: 15,
    // marginLeft: 30,
    // marginRight: 30,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: themeColor,
    width: 80
  }
  //--------------------------Scan menu options ends------------------------------------
});

export default appStyleSheets;
