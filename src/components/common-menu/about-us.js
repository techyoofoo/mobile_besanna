import React, { Component } from "react";
import { Text, View, Dimensions, ScrollView } from "react-native";
import commonAppStyles from "./common-menu-styles";
import { color_theme } from "../../constants";

export default class AboutUsScreen extends Component {
  static navigationOptions = {
    title: "Back",
    headerStyle: {
      backgroundColor: color_theme
    },
    headerTintColor: "#fff"
  };

  render() {
    return (
      <ScrollView
        style={{
          backgroundColor: color_theme,
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 40,
            margin: 20,
            fontWeight: "bold"
          }}
        >
          About Besanna
        </Text>
        <Text style={commonAppStyles.aboutUsItemText}>
          30 N Gould St
        </Text>
        <Text style={commonAppStyles.aboutUsItemText}>
          Suite R
        </Text>
        <Text style={[commonAppStyles.aboutUsItemText]}>
          Sheridan, WY 82801
        </Text>
        <Text
          style={[
            commonAppStyles.aboutUsItemText,
            { marginLeft: 20, fontSize: 15 }
          ]}
        >
          {"\u00A9"} {new Date().getFullYear()} Inteluscan, LLC{" "}
        </Text>
        <View style={commonAppStyles.aboutItemBottomBorderLine} />
        <Text style={[commonAppStyles.aboutUsItemText]}>Patent #1234567890</Text>
        <View style={commonAppStyles.aboutItemBottomBorderLine} />
        <View style={commonAppStyles.aboutItemLayout}>
          <Text style={{color:'#fff'}}>App Version</Text>
          <Text style={{color:'#fff'}}>1.0.7</Text>
        </View>
        <View style={commonAppStyles.aboutItemBottomBorderLine} />
        <Text style={{color:'#fff', marginLeft: 20}}>Legal</Text>
        <View style={commonAppStyles.aboutItemLayout}>
          <Text style={{color:'#fff', fontSize: 20, fontWeight: 'bold'}}>Privacy Policy</Text>
          <Text style={{color:'#fff', fontSize: 20, }}>></Text>
        </View>
        <View style={commonAppStyles.aboutItemLayout}>
          <Text style={{color:'#fff', fontSize: 20, fontWeight: 'bold'}}>Terms of use</Text>
          <Text style={{color:'#fff', fontSize: 20, }}>></Text>
        </View>
        <View style={commonAppStyles.aboutItemLayout}>
          <Text style={{color:'#fff', fontSize: 20, fontWeight: 'bold'}}>Accessibility statement</Text>
          <Text style={{color:'#fff', fontSize: 20, }}>></Text>
        </View>
        <View style={commonAppStyles.aboutItemBottomBorderLine} />
        <Text style={[commonAppStyles.aboutUsItemText, {fontWeight:'bold', fontSize: 20}]}>Disclaimer</Text>
        <Text style={{ color:'#fff', margin: 20}}>All content contained within the Besanna app, including: text, images or audio formats, were created informational purpose only.The content is not intended to be substitute for professional medical advice, diagnosis or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have to read on this site  </Text>
      </ScrollView>
    );
  }
}
