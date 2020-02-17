import { StyleSheet, Dimensions } from "react-native";
import { color_theme } from "../../constants";

const commonAppStyles = StyleSheet.create({
  helpItemLayout: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 30,
    marginRight: 30
  },
  helpItemText: {
    color: "#fff",
    fontSize: 20
  },
  helpItemBottomBorderLine: {
    borderWidth: 1,
    borderRadius: 1,
    borderStyle: "dashed",
    borderColor: "#fff",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 10
  },
  aboutUsItemText: {
    color: "#fff",
    marginLeft: 20
  },
  aboutItemBottomBorderLine: {
    borderWidth: 1,
    borderRadius: 1,
    borderStyle: "dashed",
    borderColor: "#fff",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 10
  },
  aboutItemLayout: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20
  },
});

export default commonAppStyles;
