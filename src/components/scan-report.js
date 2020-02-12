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
// import Swiper from "react-native-swiper";
import SwiperFlatList from "react-native-swiper-flatlist";
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
    fontSize: 20,
    fontWeight: "bold"
  },

  image: {
    width: 70,
    height: 40,
    flex: 1
  },
  fab: {
    // height: 350,
    // width: 350,
    // borderRadius: 300,
    // position: 'relative',
    bottom: 0,
    left: 0,
    // right: 20,
    // justifyContent: 'center',
    alignItems: "center",
    // backgroundColor:'#686cc3',
    overflow: "hidden",
    width: Dimensions.get("screen").height / 3 + 100,
    height: Dimensions.get("screen").height / 2 + 230,
    position: "relative",
    borderTopRightRadius: 200,
    borderBottomRightRadius: 200,
    backgroundColor: "#253746",
    borderColor: "#253746",
    justifyContent: "center",
    marginRight: 0,
    // margin: 20,
    elevation: 2
  },
  text: {
    fontSize: 30,
    color: "white",
    textAlign: "center"
  },
  containerTop: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "baseline",
    backgroundColor: "#fff",
    marginTop: 20
    // paddingTop: 20
  }
};

// export default () =>
export default class ScanReport extends Component {
  _isMounted = false;
  state = {
    cards: [],
    showMenu: false,
    display_text: "flex",
    show_display_background: false
  };
  componentDidMount() {
    this._isMounted = true;
    this.loadAllReports();
  }

  loadAllReports = () => {
    fetch(`${base_url}get-all-products`)
      .then(response => response.json())
      .then(async responseJson => {
        // console.log("responseJson.data", responseJson.data);
        // const dt = await responseJson.data;
        if (responseJson.data.length > 0)
          this.setState({ cards: responseJson.data });
        else this.setState({ cards: [] });
        // return responseJson.movies;
      })
      .catch(error => {
        console.error(error);
      });
  };
  componentWillUnmount() {
    this._isMounted = false;
    this.loadAllReports();
  }
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
    console.log("------",this.state.display_text);
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
          <View style={{ paddingTop: 12 }}>
            <Image source={require("../../assets/home.png")} />
          </View>
          <View>
            {/* <Text style={{ fontSize: 15, fontWeight: "bold" }}>besanna</Text> */}
            <Image
              source={require("../../assets/besanna_logo.png")}
              style={{ width: width / 2, height: 53, resizeMode: "center" }}
            />
          </View>
          <View style={{ paddingTop: 12 }}>
            {this.state.show_display_background ? (
              <TouchableOpacity
                style={{
                  backgroundColor: "#CECEC6",
                  width: Dimensions.get("screen").height / 4,
                  height: Dimensions.get("screen").height / 3,
                  // borderTopLeftRadius: 300,
                //   borderTopStartRadius:86/71,
                //   borderTopRightRadius:14/13,
                //   borderBottomLeftRadius: 228,
                //   borderBottomRightRadius: 32/29,
                //   borderBottomStartRadius: 68/87,
                //  borderBottomEndRadius: 228,
                //  borderTopLeftRadius:32/29,
                borderTopLeftRadius:108,
                borderTopRightRadius: 108,
                borderBottomLeftRadius:95,
                borderBottomRightRadius: 95,
                  justifyContent: "flex-start",
                  // marginLeft: 130,
                  position: "absolute",
                  right: -45,
                  top: -95,
                  rotation: 40
                  // zIndex:999
                }}
                onPress={() => {
                  !this.state.showMenu
                    ? (this.setState({
                        showMenu: true,
                        show_display_background: true
                      })
                      )
                    : (this.setState({
                        showMenu: false,
                        show_display_background: false,
                        display_text: "flex"
                      })
                      );
                }}
              >
                <View style={{ justifyContent: "flex-end", padding: 80 }}>
                  <Image source={require("../../assets/close.png")} />
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  !this.state.showMenu
                    ? this.setState({
                        showMenu: true,
                        display_text: "none",
                        show_display_background: true
                      })
                    : this.setState({
                        showMenu: false,
                        display_text: "flex",
                        show_display_background: false
                      });
                }}
              >
                <Image source={require("../../assets/menu.png")} />
              </TouchableOpacity>
            )}
            {/* <Image source={require("../../assets/menu.png")} /> */}
          </View>
        </View>
        <View style={{ marginTop: 5, marginLeft: 20, display: this.state.display_text }}>
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
        {/* . */}
        {this.state.showMenu ? (
          <View style={styles.container}>
            <View style={styles.fab}>
              <Image
                source={require("../../assets/profile.png")}
                style={{ width: 60, height: 60 }}
              />
              <TouchableOpacity onPress={() => {this.props.navigation.navigate("MyAccountScreen")}}><Text style={styles.text}>My Account</Text></TouchableOpacity>
              <Text style={styles.text}>My Scanner</Text>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate("PersonalizePerference")}}><Text style={styles.text}>Preferences</Text></TouchableOpacity>
              <Text style={[styles.text, { paddingTop: 40 }]}>Help</Text>
              <Text style={styles.text}>About</Text>
              <Text style={styles.text}>Reviews</Text>
            </View>
          </View>
        ) : (
          <View />
        )}
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            marginTop: 30,
            marginLeft: 95
          }}
        >          
          <View style={{ flex: 1, alignSelf: "flex-end",display: this.state.display_text }}>
            <View
              style={{
                overflow: "hidden",
                width: 35, //Dimensions.get("window").width / 2 + 30,
                height: Dimensions.get("window").height / 1.5 + 40,
                // borderRadius: 100,
                // borderBottomEndRadius: 228,
                // borderTopStartRadius: 228,
                // borderTopEndRadius: 228,
                // borderBottomStartRadius: 228,
                // borderBottomLeftRadius: 228,
                // borderBottomRightRadius: 228,
                // backgroundColor: "white",
                // padding: 10,
                right: 40,
                bottom: 40
                // justifyContent: "space-between",
                // alignItems: "center",
                // elevation: 15,
                // shadowColor: "black",
                // shadowOffset: { width: 0, height: 0.5 * 20 },
                // shadowOpacity: 0.3,
                // shadowRadius: 0.8 * 20,
              }}
            >
              <Image source={require("../../assets/bg1.png")} />
            </View>
          </View>
          <View
            style={{
              width: Dimensions.get("window").width / 2 + 30,
              height: Dimensions.get("window").height / 1.5 + 30,
              // borderRadius: 100,
              borderBottomEndRadius: 228,
              borderTopStartRadius: 228,
              borderTopEndRadius: 228,
              borderBottomStartRadius: 228,
              borderBottomLeftRadius: 228,
              borderBottomRightRadius: 228,
              backgroundColor: "white",
              padding: 10,
              justifyContent: "space-between",
              alignItems: "center",
              elevation: 15,
              shadowColor: "black",
              shadowOffset: { width: 0, height: 0.5 * 20 },
              shadowOpacity: 0.3,
              shadowRadius: 0.8 * 20,
              zIndex: 0,
              display: this.state.display_text
            }}
          >
            {/* <Swiper style={styles.wrapper} height={400} autoplay={true}> */}
            <SwiperFlatList
              autoplay
              autoplayDelay={2}
              autoplayLoop
              index={2}
              // showPagination
            >
              {this.state.cards.length > 0 ? (
                this.state.cards.map((dtSrc, k) => {
                  // console.log("Key--" + k);
                  return (
                    <View key={k}>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate("LoadRecords", {
                            itemName: dtSrc.name
                          });
                        }}
                      >
                        <View
                          style={{
                            borderRadius: 100,
                            width: 170,
                            height: 170,
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
                            source={{ uri: dtSrc.image_path }}
                          />
                        </View>
                      </TouchableOpacity>
                      <Text
                        style={[
                          styles.sliderProducttextColor,
                          { textAlign: "center" }
                        ]}
                      >
                        {dtSrc.name}
                      </Text>

                      <View
                        style={{
                          borderRadius: 100,
                          height: 200,
                          width: 200,
                          backgroundColor: "#fff",
                          margin: 10
                          // position: "absolute"
                          // justifyContent: "space-around"
                        }}
                      >
                        <Text
                          style={{
                            color: "#253646",
                            fontSize: 12,
                            textAlign: "center",
                            flexWrap: "wrap"
                            // position: "absolute"
                            // alignItems: "center"
                          }}
                        >
                          {dtSrc.benfits}
                        </Text>
                      </View>
                      {dtSrc.Topically === 1 ? (
                        <View
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            backgroundColor: "#995472",
                            borderColor: "#654662",
                            bottom: 80,
                            left: 10,
                            position: "relative",
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
                      ) : (
                        <View />
                      )}

                      {dtSrc.youngskin === 1 ? (
                        <View
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            backgroundColor: "#604561",
                            borderColor: "#bfbeb7",
                            bottom: 20,
                            position: "absolute",
                            zIndex: 1,
                            // zIndex: 999,
                            left: 35,
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
                      ) : (
                        <View />
                      )}

                      {dtSrc.internally === 1 ? (
                        <View
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            backgroundColor: "#223849",
                            borderColor: "#927b85",
                            bottom: 0,
                            left: 70,
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
                      ) : (
                        <View />
                      )}
                      {dtSrc.Aromatic === 1 ? (
                        <View
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            backgroundColor: "#c89ba2",
                            borderColor: "#b86a80",
                            bottom: 0,
                            left: 120,
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
                      ) : (
                        <View />
                      )}
                      {dtSrc.Dilute === 1 ? (
                        <View
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            backgroundColor: "#b4b9bb",
                            borderColor: "#747575",
                            bottom: 20,
                            left: 160,
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
                      ) : (
                        <View />
                      )}
                      {dtSrc.nodilution === 1 ? (
                        <View
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            backgroundColor: "#cecec6",
                            borderColor: "#cbbfb6",
                            bottom: 60,
                            left: 180,
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
                      ) : (
                        <View />
                      )}
                    </View>
                  );
                })
              ) : (
                <View />
              )}
              {/* </Swiper> */}
            </SwiperFlatList>
          </View>
        </View>
        {/* . */}
      </View>
    );
  }
}
