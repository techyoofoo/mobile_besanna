import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground
} from "react-native";
import Swiper from "react-native-swiper";
import {
  Container,
  Header,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  Icon,
  Button,
  Title,
  Right
} from "native-base";
// import TestReports from "./test-records";
import { base_url } from "../constants";

const { width, windowHeight } = Dimensions.get("window");

const styles = {
  container: {
    flex: 1
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 125
  },

  slide1: {
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "#fff",
    // borderColor:"#000",
    // elevation: 1,
    // borderWidth:2,
    // borderRadius: 285,
    // margin: 50,
  },

  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },

  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },

  text: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold"
  },
  sliderProducttextColor: {
    color: "#253646",
    fontSize: 30,
    fontWeight: "bold"
  },

  image: {
    width: 70,
    height: 40,
    flex: 1
  }
};

// export default () =>
export default class ScanReport extends Component {
  state = {
    cards: []
  };
  componentDidMount() {
    this.loadAllReports();
  }
  loadAllReports = () => {
    fetch(`${base_url}get-all-products`)
      .then(response => response.json())
      .then(async responseJson => {
        // console.log("responseJson.data", responseJson.data);
        // const dt = await responseJson.data;
        this.setState({ cards: responseJson.data });
        // return responseJson.movies;
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
    // console.log("------", 45 * Math.PI / 180);
    const angleRad = (45 * Math.PI) / 180;
    const radius = 30 / 2;
    const center = radius;

    // Calculate symbol position
    // Subtract half of symbol size to center it on the circle
    const x = radius * Math.cos(angleRad) + center + 15 / 2;
    const y = radius * Math.sin(angleRad) + center + 15 / 2;
    const d = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const axisSettings = [
      {
        axis: "first",
        bottom: 75,
        left: 80
      },
      {
        axis: "second",
        bottom: 40,
        left: 100
      },
      {
        axis: "third",
        bottom: 20,
        left: 140
      },
      {
        axis: "four",
        bottom: 20,
        left: 200
      },
      {
        axis: "five",
        bottom: 40,
        right: 120
      },
      {
        axis: "six",
        bottom: 70,
        right: 95
      }
    ];
    // console.log("------", x, "-", y);
    let curveArray = [];
    return (
      <View style={styles.container}>
        <StatusBar style={{ backgroundColor: "#416E74" }} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingTop: 30
          }}
        >
          <View>
            <Image source={require("../../assets/home.png")} />
          </View>
          <View>
            {/* <Text style={{ fontSize: 15, fontWeight: "bold" }}>besanna</Text> */}
            <Image
              source={require("../../assets/besanna_logo.png")}
              style={{ width: width / 3, height: 53, resizeMode: "center" }}
            />
          </View>
          <View>
            <Image source={require("../../assets/menu.png")} />
          </View>
        </View>
        <View style={{ marginTop: 10, marginLeft: 20 }}>
          <Text style={styles.sliderProducttextColor}>Scan Result</Text>
          <Text style={{ color: "#ccc", fontSize: 15 }}>
            {months[d.getMonth()] +
              " " +
              d.getDay() +
              ", " +
              d.getFullYear() +
              "  " +
              d.getHours() +
              ":" +
              d.getMinutes()}
          </Text>
        </View>
        {/* justifyContent:'flex-start',alignItems:'flex-start' <ScrollView contentContainerStyle={{
            height: 1000,
            paddingVertical: 30,
            paddingTop: 60
          }}> */}
        <ImageBackground
          style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          source={require("../../assets/bg.png")}
        >
          <Swiper style={styles.wrapper} height={400} autoplay={true}>
            {this.state.cards.map((dtSrc, k) => {
              // console.log("-----", dtSrc.Aromatic);
              if (dtSrc.Topically === 1) curveArray.push("T");
              if (dtSrc.youngskin === 1) curveArray.push("S");
              if (dtSrc.internally === 1) curveArray.push("I");
              if (dtSrc.Aromatic === 1) curveArray.push("A");
              if (dtSrc.Dilute === 1) curveArray.push("D");
              if (dtSrc.nodilution === 1) curveArray.push("N");

              // console.log("-----", dtSrc.Aromatic, "---", k, "****",curveArray);
              const distinctData = [...new Set(curveArray)];
              // console.log("-----", distinctData);
              // "Aromatic" : 1,
              // "Topically" : 1,
              // "internally" : 0,
              // "Dilute" : 0,
              // "youngskin" : 0,
              // "nodilution" : 1,
              return (
                <View style={styles.slide1} key={k}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("LoadRecords", {
                        itemName: dtSrc.name
                      });
                    }}
                    style={{
                      width: 180,
                      height: 180,
                      backgroundColor: "#cecec6",
                      borderColor: "#c3c3c1",
                      borderRadius: 90,
                      borderWidth: 2
                    }}
                  >
                    <Image
                      style={{
                        // width: 200,
                        height: 200,
                        resizeMode: "contain"
                      }}
                      source={{ uri: dtSrc.image_path }}
                    />
                  </TouchableOpacity>
                  <View style={{ marginTop: 30 }}>
                    <Text style={styles.sliderProducttextColor}>
                      {dtSrc.name}
                    </Text>
                  </View>
                  <View
                    style={{
                      marginTop: 15,
                      marginLeft: 90,
                      marginRight: 90,
                      borderRadius: 339 / 2
                    }}
                  >
                    <Text
                      style={{
                        color: "#253646",
                        fontSize: 13,
                        flexWrap: "wrap"
                      }}
                    >
                      {dtSrc.benfits}
                    </Text>
                  </View>
                  {/* Test Layout curve*/}
                  {/* <View style={{ paddingTop: 10 }}></View> */}

                  <View
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      backgroundColor: "#995472",
                      borderColor: "#654662",
                      bottom: 75,
                      left: 80,
                      position: "absolute",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Text
                      style={{
                        textAlignVertical: "center",
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#fff"
                      }}
                    >
                      T
                    </Text>
                  </View>
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      backgroundColor: "#604561",
                      borderColor: "#bfbeb7",
                      bottom: 40,
                      left: 100,
                      position: "absolute",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Text
                      style={{
                        textAlignVertical: "center",
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#fff"
                      }}
                    >
                      S
                    </Text>
                  </View>
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      backgroundColor: "#223849",
                      borderColor: "#927b85",
                      bottom: 20,
                      left: 140,
                      position: "absolute",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Text
                      style={{
                        textAlignVertical: "center",
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#fff"
                      }}
                    >
                      I
                    </Text>
                  </View>
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      backgroundColor: "#c89ba2",
                      borderColor: "#b86a80",
                      bottom: 20,
                      left: 200,
                      position: "absolute",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Text
                      style={{
                        textAlignVertical: "center",
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#fff"
                      }}
                    >
                      A
                    </Text>
                  </View>
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      backgroundColor: "#b4b9bb",
                      borderColor: "#747575",
                      bottom: 40,
                      right: 120,
                      position: "absolute",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Text
                      style={{
                        textAlignVertical: "center",
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#fff"
                      }}
                    >
                      D
                    </Text>
                  </View>
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      backgroundColor: "#cecec6",
                      borderColor: "#cbbfb6",
                      bottom: 70,
                      right: 95,
                      position: "absolute",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Text
                      style={{
                        textAlignVertical: "center",
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#fff"
                      }}
                    >
                      N
                    </Text>
                  </View>
                  <View
                    style={{
                      paddingTop: 20,
                      borderRadius: 339 / 2,
                      // borderWidth: 2,
                      width: 150,
                      height: 150
                    }}
                  ></View>
                </View>
              );
            })}
          </Swiper>
        </ImageBackground>
        {/* </ScrollView> */}
        {/* <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}><Text>My fixed footer</Text></View> */}
      </View>
    );
  }
}
