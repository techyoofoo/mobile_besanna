import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions
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

const { width } = Dimensions.get("window");

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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
    borderRadius: 225,
    margin: 10
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
        console.log("responseJson.data", responseJson.data);
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
    console.log("------", x, "-", y);
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
            <Icon type="FontAwesome" name="home" />
          </View>
          <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>besanna</Text>
          </View>
          <View>
            <Icon type="FontAwesome" name="bars" />
          </View>
        </View>
        <Swiper style={styles.wrapper} height={400} autoplay={true}>
          {this.state.cards.map((dtSrc, k) => {
            return (
              <View style={styles.slide1} key={k}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("LoadRecords", {
                      itemName: dtSrc.name
                    });
                  }}
                >
                  <Image
                    style={{
                      width: 200,
                      height: 200,
                      backgroundColor: "#737373",
                      borderRadius: 100,
                      borderWidth: 2,
                      resizeMode:'contain'
                    }}
                    source={{ uri: dtSrc.image_path }}
                  />
            
                  <Text style={styles.text}>{dtSrc.name}</Text>
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 13,
                    paddingTop: 10,
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    margin: 5
                  }}
                >
                  {dtSrc.benfits}
                </Text>
                <View
                  style={{
                    // margin: 20,
                    // borderBottomLeftRadius: width,
                    // borderBottomRightRadius: width
                    // borderWidth: 3
                  }}
                >
                  {dtSrc.Topically === 1 ? (
                    <View style={{ position: "absolute",
                    bottom: 16, left: 50 }}>
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          width: 30,
                          height: 30,
                          borderRadius: 15,
                          backgroundColor: "#995472",
                          borderColor: "#654662",
                          float: "left"
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
                    </View>
                  ) : (
                    <View />
                  )}
                  {dtSrc.youngskin === 1 ? (
                    <View style={{ position: "absolute",
                    top: 16, left: 50 }}>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        backgroundColor: "#604561",
                        borderColor: "#bfbeb7",
                        float: "left",
                        x: 290.5,
                        y: 156.5
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
                    </View>
                  ) : (
                    <View />
                  )}
                  {dtSrc.internally === 1 ? (
                    <View style={{ position: "absolute",
                    top: 26, left: 80 }}>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        backgroundColor: "#223849",
                        borderColor: "#927b85",
                        float: "right"
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
                    </View>
                  ) : (
                    <View />
                  )}
                  {dtSrc.Aromatic === 1 ? (
                    <View style={{ position: "absolute",
                    top: 26, left: 110  }}>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        backgroundColor: "#c89ba2",
                        borderColor: "#b86a80",
                        float: "right"
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
                    </View>
                  ) : (
                    <View />
                  )}
                  {dtSrc.Dilute === 1 ? (
                    <View style={{ position: "absolute",
                    top: 30, left: 130   }}>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        backgroundColor: "#b4b9bb",
                        borderColor: "#747575",
                        float: "right"
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
                    </View>
                  ) : (
                    <View />
                  )}

<View style={{ position: "absolute",
                    top: 20, left: 140   }}>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      backgroundColor: "#cecec6",
                      borderColor: "#cbbfb6",
                      float: "right"
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
                  </View>
                </View>
              </View>
            );
          })}
        </Swiper>
      </View>
    );
  }
}
