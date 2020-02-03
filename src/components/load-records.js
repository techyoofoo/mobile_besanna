import React, { Component } from "react";
import {
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
  Button,
  Title,
  Right
} from "native-base";
import { base_url } from "../constants";

const { width, windowHeight } = Dimensions.get("window");
export default class LoadRecords extends Component {
  componentDidMount() {
    const { navigation } = this.props;
    const propName = navigation.getParam("itemName"); //JSON.stringify();
    // console.log("------", JSON.stringify(navigation.getParam("itemName")));
    this.loadAllReports(propName);
  }
  state = {
    reportInfo: []
  };
  // component unmount
  componentWillUnmount() {
    this.loadAllReports("Basil");
  }
  loadAllReports = propName => {
    fetch(`${base_url}get-product-by-name/${propName}`)
      .then(response => response.json())
      .then(async responseJson => {
        // console.log("responseJson.data", responseJson);
        // const dt = await responseJson.data;
        this.setState({ reportInfo: responseJson.data });
        // return responseJson.movies;
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
    return (
      <View>
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
            <Image source={require("../../assets/menu.png")} />
          </View>
        </View>
        <ScrollView>
          {this.state.reportInfo.map((recordDt, i) => {
            return (
              <Card key={i}>
                <CardItem>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    {recordDt.name}
                  </Text>
                </CardItem>
                <CardItem>
                  <Left>
                    {recordDt.Topically === 1 ? (
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          width: 30,
                          height: 30,
                          borderRadius: 15,
                          backgroundColor: "#995472",
                          borderColor: "#654662"
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
                    {recordDt.youngskin === 1 ? (
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          width: 30,
                          height: 30,
                          borderRadius: 15,
                          backgroundColor: "#604561",
                          borderColor: "#bfbeb7"
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

                    {recordDt.internally === 1 ? (
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          width: 30,
                          height: 30,
                          borderRadius: 15,
                          backgroundColor: "#223849",
                          borderColor: "#927b85"
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
                    {recordDt.Aromatic === 1 ? (
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          width: 30,
                          height: 30,
                          borderRadius: 15,
                          backgroundColor: "#c89ba2",
                          borderColor: "#b86a80"
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

                    {recordDt.Dilute === 1 ? (
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          width: 30,
                          height: 30,
                          borderRadius: 15,
                          backgroundColor: "#b4b9bb",
                          borderColor: "#747575"
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

                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        backgroundColor: "#cecec6",
                        borderColor: "#cbbfb6"
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
                  </Left>
                  <Right>
                    <View
                      style={{
                        overflow: "hidden",
                        width: 105,
                        height: 210,
                        position: "relative",
                        borderTopLeftRadius: 150,
                        borderBottomLeftRadius: 150,
                        backgroundColor: "#cecec6",
                        borderColor: "#c3c3c1",
                        justifyContent: "center",
                        marginRight: 0,
                        // margin: 20,
                        elevation: 2
                      }}
                    >
                      <Image
                        style={{
                          // width: 200,
                          // width: Dimensions.get('window').width - 23,
                          height: 120,
                          resizeMode: "contain"
                        }}
                        source={{ uri: recordDt.image_path }}
                      />
                    </View>
                  </Right>
                </CardItem>

                <CardItem>
                  <Text
                    style={{
                      fontSize: 13,
                      paddingTop: 10,
                      flexWrap: "wrap",
                      alignItems: "flex-start"
                    }}
                  >
                    {recordDt.benfits}
                  </Text>
                </CardItem>
                <CardItem>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>Mind</Text>
                </CardItem>
                <CardItem>
                  <Text
                    style={{
                      fontSize: 13,
                      paddingTop: 10,
                      flexWrap: "wrap",
                      alignItems: "flex-start"
                    }}
                  >
                    {recordDt.mind}
                  </Text>
                </CardItem>
                <CardItem>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Negative Emotion Addressed
                  </Text>
                </CardItem>
                <CardItem>
                  <Text
                    style={{
                      fontSize: 13,
                      paddingTop: 10,
                      flexWrap: "wrap",
                      alignItems: "flex-start"
                    }}
                  >
                    {recordDt.negatives}
                  </Text>
                </CardItem>
                <CardItem>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Positive Emotion Addressed
                  </Text>
                </CardItem>
                <CardItem>
                  <Text
                    style={{
                      fontSize: 13,
                      paddingTop: 10,
                      flexWrap: "wrap",
                      alignItems: "flex-start"
                    }}
                  >
                    {recordDt.positives}
                  </Text>
                </CardItem>
                <CardItem>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>Body</Text>
                </CardItem>
                <CardItem>
                  <Text
                    style={{
                      fontSize: 13,
                      paddingTop: 10,
                      flexWrap: "wrap",
                      alignItems: "flex-start"
                    }}
                  >
                    {recordDt.product_body}
                  </Text>
                </CardItem>
                <CardItem>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Uses & Directions
                  </Text>
                </CardItem>
                <CardItem>
                  <Text
                    style={{
                      fontSize: 13,
                      paddingTop: 10,
                      flexWrap: "wrap",
                      alignItems: "flex-start"
                    }}
                  >
                    {recordDt.uses}
                    {recordDt.directions}
                  </Text>
                </CardItem>
                <CardItem>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Cautions
                  </Text>
                </CardItem>
                <CardItem>
                  <Text
                    style={{
                      fontSize: 13,
                      paddingTop: 10,
                      flexWrap: "wrap",
                      alignItems: "flex-start"
                    }}
                  >
                    {recordDt.cautions}
                  </Text>
                </CardItem>
                <CardItem>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Complementary Oils
                  </Text>
                </CardItem>
                <CardItem>
                  <Text
                    style={{
                      fontSize: 13,
                      paddingTop: 10,
                      flexWrap: "wrap",
                      alignItems: "flex-start"
                    }}
                  >
                    {recordDt.complimentary}
                  </Text>
                </CardItem>
              </Card>
            );
          })}
          <View style={{ paddingTop: 50 }} />
        </ScrollView>
      </View>
    );
  }
}
