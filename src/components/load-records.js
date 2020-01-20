import React, { Component } from "react";
import { Image, StatusBar, ScrollView, TouchableOpacity } from "react-native";
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

export default class LoadRecords extends Component {
  componentDidMount() {
    this.loadAllReports();
    const { navigation } = this.props;
    const propName = navigation.getParam("itemName"); //JSON.stringify();
    console.log("------", JSON.stringify(navigation.getParam("itemName")));
    this.loadAllReports(propName);
  }
  state = {
    reportInfo: []
  };
  loadAllReports = propName => {
    fetch(`${base_url}get-product-by-name/${propName}`)
      .then(response => response.json())
      .then(async responseJson => {
        console.log("responseJson.data", responseJson);
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
        <ScrollView>
          {this.state.reportInfo.map((recordDt, i) => {
            return (
              <Card key={i}>
                <CardItem>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    {recordDt.name}
                  </Text>
                </CardItem>
                <CardItem style={{ justifyContent: "space-around" }}>
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
                    <Thumbnail source={{ uri: recordDt.image_path }} />
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
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                   Body
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
          <View style={{paddingTop: 50}}/>
        </ScrollView>
      </View>
    );
  }
}
