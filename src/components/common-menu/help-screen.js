import React, { Component } from "react";
import { Text, View, Dimensions } from "react-native";
import commonAppStyles from "./common-menu-styles";
import { color_theme } from "../../constants";

export default class HelpScreen extends Component {
    static navigationOptions = {
        title: 'Back',
        headerStyle: {
            backgroundColor: color_theme,
          },
          headerTintColor: '#fff',
      };
  render() {
    return (
      <View
        style={{
          backgroundColor: color_theme,
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height
        }}
      >
        <Text
          style={{
            width: Dimensions.get("window").width,
            color: "#fff",
            fontSize: 25,
            textAlign: "center",
            marginTop: 20,
            marginBottom: 20
          }}
        >
          How Can we help ?
        </Text>
        <View style={commonAppStyles.helpItemLayout}>
          <Text style={commonAppStyles.helpItemText}>Billing Questions</Text>
          <Text style={commonAppStyles.helpItemText}>></Text>
        </View>
        <View style={commonAppStyles.helpItemBottomBorderLine} />
        <View style={commonAppStyles.helpItemLayout}>
          <Text style={commonAppStyles.helpItemText}>Connection issues</Text>
          <Text style={commonAppStyles.helpItemText}>></Text>
        </View>
        <View style={commonAppStyles.helpItemBottomBorderLine} />
        <View style={commonAppStyles.helpItemLayout}>
          <Text style={commonAppStyles.helpItemText}>Subscription options</Text>
          <Text style={commonAppStyles.helpItemText}>></Text>
        </View>
        <View style={commonAppStyles.helpItemBottomBorderLine} />
        <View style={commonAppStyles.helpItemLayout}>
          <Text style={commonAppStyles.helpItemText}>Report a bug</Text>
          <Text style={commonAppStyles.helpItemText}>></Text>
        </View>
        <View style={commonAppStyles.helpItemBottomBorderLine} />
        <View style={commonAppStyles.helpItemLayout}>
          <Text style={commonAppStyles.helpItemText}>Scanning pet</Text>
          <Text style={commonAppStyles.helpItemText}>></Text>
        </View>
        <View style={commonAppStyles.helpItemBottomBorderLine} />

        <View
          style={{
            // width: "100%",
            // height: 50,
            backgroundColor: "#EE5407",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute", //Here is the trick
            bottom: 0 //Here is the trick
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>Still Need Help</Text>
        </View>
      </View>
    );
  }
}
