import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  CheckBox
} from "react-native";
import appStyleSheets, { themeColor, textColor } from "../styles/styles";

export default class MyAccountScreen extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: themeColor }}>
        <StatusBar style={themeColor} hidden />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingTop: 30
          }}
        >
          <View>
            <Text style={{ color: "#fff", fontSize: 20, marginTop: 10 }}>
              Back
            </Text>
          </View>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: "skyblue",
              borderRadius: 25,
              borderColor: themeColor
            }}
          >
            <Image
              source={require("../../assets/icon.png")}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
          </View>
          <View>
            <Text style={{ color: "#fff", fontSize: 20, marginTop: 10 }}>
              Save
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            paddingTop: 30
          }}
        >
          <Text
            style={{
              textAlign: "left",
              color: "#fff",
              fontSize: 30,
              fontWeight: "bold",
              marginLeft: 10
            }}
          >
            Subscription
          </Text>
        </View>
        <View>
          <Text style={{ marginLeft: 10, color: textColor }}>
            Subscription Plan
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 10
            }}
          >
            <Text style={{ color: textColor, fontWeight: "bold" }}>
              Monthly $15
            </Text>
            <Text style={{ color: textColor, fontWeight: "bold" }}>
              Switch to Annual
            </Text>
          </View>
          <View style={appStyleSheets.inputBorderStyle} />
        </View>
        <View>
          <Text style={{ marginLeft: 10, color: textColor }}>
            Next billing date
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              marginLeft: 10
            }}
          >
            <Text style={{ color: textColor, fontWeight: "bold" }}>
              December 22
            </Text>
          </View>
          <View style={appStyleSheets.inputBorderStyle} />
        </View>
        <View>
          <Text style={{ marginLeft: 10, color: textColor }}>
            Credit card on file
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 10
            }}
          >
            <Text style={{ color: textColor, fontWeight: "bold" }}>
              Expires 02/20
            </Text>
            <Text style={{ color: textColor, fontWeight: "bold" }}>
              Update Card
            </Text>
          </View>
          <View style={appStyleSheets.inputBorderStyle} />
        </View>
        <View>
          <Text
            style={{
              color: textColor,
              marginLeft: 10,
              fontWeight: "bold",
              fontSize: 30
            }}
          >
            Edit personal info
          </Text>
          <Text style={{ color: textColor, marginLeft: 10 }}>First Name</Text>
          <TextInput
            style={{
              color: textColor,
              marginLeft: 10,
              borderWidth: 0
            }}
            placeholder="Enter Email id"
            keyboardType="email-address"
            onChangeText={() => {}}
            value="Jane"
          />
          <View style={appStyleSheets.inputBorderStyle} />
        </View>
        <View>
          <Text style={{ color: textColor, marginLeft: 10 }}>Last Name</Text>
          <TextInput
            style={{
              color: textColor,
              marginLeft: 10,
              borderWidth: 0
            }}
            placeholder="Enter Email id"
            keyboardType="email-address"
            onChangeText={() => {}}
            value="Smith"
          />
          <View style={appStyleSheets.inputBorderStyle} />
        </View>
        <View>
          <Text style={{ color: textColor, marginLeft: 10 }}>Gender</Text>
          <TextInput
            style={{
              color: textColor,
              marginLeft: 10,
              borderWidth: 0
            }}
            placeholder="Enter Email id"
            keyboardType="email-address"
            onChangeText={() => {}}
            value="Male"
          />
          <View style={appStyleSheets.inputBorderStyle} />
        </View>
        <View>
          <Text style={{ color: textColor, marginLeft: 10 }}>Birth Date</Text>
          <TextInput
            style={{
              color: textColor,
              marginLeft: 10,
              borderWidth: 0
            }}
            placeholder="Enter Email id"
            keyboardType="email-address"
            onChangeText={() => {}}
            value="05/Dec/2302"
          />
          <View style={appStyleSheets.inputBorderStyle} />
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 10
            }}
          >
            <Text style={{ color: textColor }}>Phone Number</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CheckBox value={false} onValueChange={() => {}} />
              <Text style={{ color: textColor }}>add to report</Text>
            </View>
          </View>
          <Text style={{ color: textColor, marginLeft: 10 }}>
            For notification,reminders and help logging in
          </Text>
          <Text
            style={{ color: textColor, marginLeft: 10, fontWeight: "bold" }}
          >
            +1 801 555 9876
          </Text>
          <View style={appStyleSheets.inputBorderStyle} />
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 10
            }}
          >
            <Text style={{ color: textColor }}>Instagram</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CheckBox value={false} onValueChange={() => {}} />
              <Text style={{ color: textColor }}>add to report</Text>
            </View>
          </View>          
          <Text
            style={{ color: textColor, marginLeft: 10, fontWeight: "bold" }}
          >
            @Janesmith
          </Text>
          <View style={appStyleSheets.inputBorderStyle} />
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 10
            }}
          >
            <Text style={{ color: textColor }}>Twitter</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CheckBox value={false} onValueChange={() => {}} />
              <Text style={{ color: textColor }}>add to report</Text>
            </View>
          </View>          
          <Text
            style={{ color: textColor, marginLeft: 10, fontWeight: "bold" }}
          >
            @Janesmith
          </Text>
          <View style={appStyleSheets.inputBorderStyle} />
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 10
            }}
          >
            <Text style={{ color: textColor }}>Facebook</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CheckBox value={false} onValueChange={() => {}} />
              <Text style={{ color: textColor }}>add to report</Text>
            </View>
          </View>          
          <Text
            style={{ color: textColor, marginLeft: 10, fontWeight: "bold" }}
          >
            @Janesmith
          </Text>
          <View style={appStyleSheets.inputBorderStyle} />
        </View>
      </ScrollView>
    );
  }
}
