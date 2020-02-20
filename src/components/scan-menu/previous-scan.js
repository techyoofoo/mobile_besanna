import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
  ScrollView
} from "react-native";
import { color_theme } from "../../constants";

const deviceWidth = Dimensions.get("screen").width;
const product_name_color = "#253746";
const product_desc_color = "#131D1F";

export default class PreviousScanResults extends Component {
  render() {
    return (
      <View>
        <StatusBar style={{ backgroundColor: color_theme }} hidden />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingTop: 5
          }}
        >
          <Image
            source={require("../../../assets/besanna_logo.png")}
            style={{ width: deviceWidth / 2, height: 53, resizeMode: "center" }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingTop: 5
          }}
        >
          <Text style={{ fontSize: 20, color: color_theme }}>
            Previous Scans
          </Text>
        </View>
        <ScrollView>
          <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <View style={{ flexDirection: "column" }}>
              <View
                style={{
                  borderRadius: 100,
                  width: 100,
                  height: 100,
                  backgroundColor: "#cecec6",
                  borderColor: "#c3c3c1",
                  justifyContent: "center",
                  margin: 20,
                  elevation: 10,
                  shadowColor: "black",
                  shadowOffset: { width: 0, height: 0.5 * 10 },
                  shadowOpacity: 0.6,
                  shadowRadius: 0.8 * 10
                }}
              >
                <Image
                  style={{
                    // width: 200,
                    height: 220,
                    resizeMode: "contain"
                  }}
                  source={{
                    uri:
                      "https://photos.smugmug.com/photos/i-dwj6JW9/0/13392d25/XL/i-dwj6JW9-XL.png"
                  }}
                />
              </View>
            </View>
            <View style={{ flexDirection: "column", margin: 10}}>
              <Text style={{ paddingTop: 5, fontSize: 15 }}>
                December 10, 2019
              </Text>
              <Text
                style={{ paddingTop: 5, fontSize: 15, fontWeight: "bold" }}
              >
                Top Recomondation
              </Text>
              <Text style={{ paddingTop: 5, fontSize: 15, color: "#3D7073" }}>
                Basil
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <View style={{ flexDirection: "column" }}>
              <View
                style={{
                  borderRadius: 100,
                  width: 100,
                  height: 100,
                  backgroundColor: "#cecec6",
                  borderColor: "#c3c3c1",
                  justifyContent: "center",
                  margin: 20,
                  elevation: 10,
                  shadowColor: "black",
                  shadowOffset: { width: 0, height: 0.5 * 10 },
                  shadowOpacity: 0.6,
                  shadowRadius: 0.8 * 10
                }}
              >
                <Image
                  style={{
                    // width: 200,
                    height: 220,
                    resizeMode: "contain"
                  }}
                  source={{
                    uri:
                      "https://photos.smugmug.com/photos/i-dwj6JW9/0/13392d25/XL/i-dwj6JW9-XL.png"
                  }}
                />
              </View>
            </View>
            <View style={{ flexDirection: "column", margin: 10}}>
              <Text
                style={{ paddingTop: 5, fontSize: 15, color: color_theme }}
              >
                December 10, 2019
              </Text>
              <Text
                style={{
                  paddingTop: 5,
                  fontSize: 15,
                  fontWeight: "bold",
                  color: product_desc_color
                }}
              >
                Top Recomondation
              </Text>
              <Text
                style={{
                  paddingTop: 5,
                  fontSize: 15,
                  color: product_name_color
                }}
              >
                Basil
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <View style={{ flexDirection: "column" }}>
              <View
                style={{
                  borderRadius: 100,
                  width: 100,
                  height: 100,
                  backgroundColor: "#cecec6",
                  borderColor: "#c3c3c1",
                  justifyContent: "center",
                  margin: 20,
                  elevation: 10,
                  shadowColor: "black",
                  shadowOffset: { width: 0, height: 0.5 * 10 },
                  shadowOpacity: 0.6,
                  shadowRadius: 0.8 * 10
                }}
              >
                <Image
                  style={{
                    // width: 200,
                    height: 220,
                    resizeMode: "contain"
                  }}
                  source={{
                    uri:
                      "https://photos.smugmug.com/photos/i-dwj6JW9/0/13392d25/XL/i-dwj6JW9-XL.png"
                  }}
                />
              </View>
            </View>
            <View style={{ flexDirection: "column", margin: 10}}>
              <Text
                style={{ paddingTop: 5, fontSize: 15, color: color_theme }}
              >
                December 10, 2019
              </Text>
              <Text
                style={{
                  paddingTop: 5,
                  fontSize: 15,
                  fontWeight: "bold",
                  color: product_desc_color
                }}
              >
                Top Recomondation
              </Text>
              <Text
                style={{
                  paddingTop: 5,
                  fontSize: 15,
                  color: product_name_color
                }}
              >
                Basil
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <View style={{ flexDirection: "column" }}>
              <View
                style={{
                  borderRadius: 100,
                  width: 100,
                  height: 100,
                  backgroundColor: "#cecec6",
                  borderColor: "#c3c3c1",
                  justifyContent: "center",
                  margin: 20,
                  elevation: 10,
                  shadowColor: "black",
                  shadowOffset: { width: 0, height: 0.5 * 10 },
                  shadowOpacity: 0.6,
                  shadowRadius: 0.8 * 10
                }}
              >
                <Image
                  style={{
                    // width: 200,
                    height: 220,
                    resizeMode: "contain"
                  }}
                  source={{
                    uri:
                      "https://photos.smugmug.com/photos/i-dwj6JW9/0/13392d25/XL/i-dwj6JW9-XL.png"
                  }}
                />
              </View>
            </View>
            <View style={{ flexDirection: "column", margin: 10}}>
              <Text
                style={{ paddingTop: 5, fontSize: 15, color: color_theme }}
              >
                December 10, 2019
              </Text>
              <Text
                style={{
                  paddingTop: 5,
                  fontSize: 15,
                  fontWeight: "bold",
                  color: product_desc_color
                }}
              >
                Top Recomondation
              </Text>
              <Text
                style={{
                  paddingTop: 5,
                  fontSize: 15,
                  color: product_name_color
                }}
              >
                Basil
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", paddingTop: 10 }}>
            <View style={{ flexDirection: "column" }}>
              <View
                style={{
                  borderRadius: 100,
                  width: 100,
                  height: 100,
                  backgroundColor: "#cecec6",
                  borderColor: "#c3c3c1",
                  justifyContent: "center",
                  margin: 20,
                  elevation: 10,
                  shadowColor: "black",
                  shadowOffset: { width: 0, height: 0.5 * 10 },
                  shadowOpacity: 0.6,
                  shadowRadius: 0.8 * 10
                }}
              >
                <Image
                  style={{
                    // width: 200,
                    height: 220,
                    resizeMode: "contain"
                  }}
                  source={{
                    uri:
                      "https://photos.smugmug.com/photos/i-dwj6JW9/0/13392d25/XL/i-dwj6JW9-XL.png"
                  }}
                />
              </View>
            </View>
            <View style={{ flexDirection: "column", margin: 10}}>
              <Text
                style={{ paddingTop: 5, fontSize: 15, color: color_theme }}
              >
                December 10, 2019
              </Text>
              <Text
                style={{
                  paddingTop: 5,
                  fontSize: 15,
                  fontWeight: "bold",
                  color: product_desc_color
                }}
              >
                Top Recomondation
              </Text>
              <Text
                style={{
                  paddingTop: 5,
                  fontSize: 15,
                  color: product_name_color
                }}
              >
                Basil
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
