import React, { Component } from "react";
import {
  Image,
  StatusBar,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import scanStyles, { themeColor } from "../../styles/scan-styles";

export default class SelfScanScreen extends Component {
  render() {
    return (
      <View>
        <StatusBar style={themeColor} hidden />

        <View style={scanStyles.selfScanHeader}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("MyAccountScreen")}
          >
            <Image
              style={{
                margin: 5,
                position: "absolute",
                top: 28,
                left: 10,
                width: 35,
                height: 35
              }}
              source={require("../../../assets/close.png")}
            />
          </TouchableOpacity>

          <Text style={scanStyles.selfScanHeaderText}>besanna</Text>
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 20,
              marginTop: 20,
              fontWeight: "bold"
            }}
          >
            Scan myself
          </Text>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15
            }}
          >
            <View
              style={{
                width: 80,
                height: 80,
                backgroundColor: "skyblue",
                borderRadius: 40,
                borderColor: themeColor
              }}
            >
              <Image
                source={require("../../../assets/profile.png")}
                style={{ width: 80, height: 80, borderRadius: 30 }}
              />
            </View>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{ height: 1000, paddingVertical: 30 }}
        >
          <Text
            style={{
              textAlign: "center",
              paddingTop: 80,
              fontWeight: "bold",
              fontSize: 20
            }}
          >
            Jane Appleseed
          </Text>
          <Text
            style={{
              textAlign: "center",
              paddingTop: 20,
              fontWeight: "bold",
              fontSize: 20,
              color: "#ccc"
            }}
          >
            Female
          </Text>
          <Text
            style={{
              textAlign: "center",
              paddingTop: 20,
              fontWeight: "bold",
              fontSize: 20,
              color: "#ccc"
            }}
          >
            Age 37
          </Text>
          <Text
            style={{
              textAlign: "center",
              paddingTop: 20,
              fontWeight: "bold",
              fontSize: 20,
              color: "#ccc"
            }}
          >
            No allergies
          </Text>
          <Text
            style={{
              textAlign: "center",
              paddingTop: 20,
              fontWeight: "bold",
              fontSize: 20,
              color: "#ccc"
            }}
          >
            Products
          </Text>
          <View style={{ alignItems: "center", paddingTop: 20 }}>
            <TouchableOpacity
              style={scanStyles.btnScan}
              activeOpacity={0.5}
              onPress={() => {}}
            >
              <Text style={scanStyles.txtScan}>All</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center", paddingTop: 20 }}>
            <TouchableOpacity
              style={scanStyles.btnScan}
              activeOpacity={0.5}
              onPress={() => {}}
            >
              <Text style={scanStyles.txtScan}>Oils</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center", paddingTop: 20 }}>
            <TouchableOpacity
              style={scanStyles.btnScanData}
              activeOpacity={0.5}
              onPress={() => {}}
            >
              <Text style={scanStyles.txtScan}>Supplements</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center", paddingTop: 20 }}>
            <TouchableOpacity
              style={scanStyles.btnScan}
              activeOpacity={0.5}
              onPress={() => this.props.navigation.navigate("ScanReport")}
            >
              <Text style={scanStyles.txtScan}>Go</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
