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

export default class FriendList extends Component {
  render() {
    return (
      <ScrollView>
        <StatusBar style={themeColor} />
        <View style={scanStyles.selfScanHeader}>
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
            What do you want to scan ?
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              paddingTop: 10
            }}
          >
            <Text style={scanStyles.frndLstData}>First Last</Text>
            <Text style={scanStyles.frndLstData}>|</Text>
            <Text style={scanStyles.frndLstData}>Last First</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingTop: 10
          }}
        >
          <Image
            source={require("../../../assets/profile.png")}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
          <Text style={{ margin: 15 }}>Adam, Chris</Text>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            margin: 10
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingTop: 10
          }}
        >
          <Image
            source={require("../../../assets/profile.png")}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
          <Text style={{ margin: 15 }}>Adam, Chris</Text>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            margin: 10
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingTop: 10
          }}
        >
          <Image
            source={require("../../../assets/profile.png")}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
          <Text style={{ margin: 15 }}>Adam, Chris</Text>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            margin: 10
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingTop: 10
          }}
        >
          <Image
            source={require("../../../assets/profile.png")}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
          <Text style={{ margin: 15 }}>Call Chris</Text>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            margin: 10
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingTop: 10
          }}
        >
          <Image
            source={require("../../../assets/profile.png")}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
          <Text style={{ margin: 15 }}>Azata mecnic</Text>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            margin: 10
          }}
        />
        <TouchableOpacity style={scanStyles.mainConatinerStyle} onPress={() =>
              this.props.navigation.navigate("ScanAFriend")
            }>
          <Image
            source={require("../../../assets/profile.png")}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
