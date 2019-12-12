import { StyleSheet, Dimensions } from "react-native";

export const deviceDimensions = Dimensions.get("window");
export const themeColor = "#416E74";
export const textColor = "#fff";

const scanStyles = StyleSheet.create({
  selfScanHeader: {
    borderColor: themeColor,
    borderWidth: 2,
    borderStyle: "solid",
    padding: 10,
    height: 180,
    backgroundColor: themeColor
  },
  selfScanHeaderText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 40,
    paddingTop: 28,
    letterSpacing: 1
  },
  btnScan:{
    backgroundColor: themeColor,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#fff",
    width: 80,
    height: 40
  },
  txtScan:{
    textAlign: "center",
    margin: 10,
    color: "#fff"
  },
  btnScanData:{
    backgroundColor: themeColor,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#fff",    
    height: 40
  },
  frndLstData:{
    textAlign: "center",
    margin: 10,
    color: "#fff",    
  }
});

export default scanStyles;
