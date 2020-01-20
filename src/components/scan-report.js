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
// import LoadRecords from './load-records';
import { base_url } from "../constants";

const LoadRecords = React.lazy(() => import("./load-records"));
export default class ScanReport extends Component {
  componentDidMount() {
    this.loadAllReports();
  }
  state = {
    cards: []
  };
  loadAllReports = () => {
    fetch(`${base_url}get-all-products`)
      .then(response => response.json())
      .then(async responseJson => {
        // console.log('responseJson.data', responseJson.data)
        // const dt = await responseJson.data;
        this.setState({ cards: responseJson.data });
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
          {this.state.cards.map((dtSrc, k) => {
            return (
              <View key={k}>
              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('LoadRecords', {
                  itemName: dtSrc.name
                });
                
              }}>
                <Card style={{ flex: 0 }} key={k}>
                <CardItem header bordered>
                  <Text>{dtSrc.name}</Text>
                </CardItem>                
                <CardItem>
                  <Left>
                    <Thumbnail source={{ uri: dtSrc.image_path }} />
                    <Body>
                      <Text>{dtSrc.benfits}</Text>
                      {/* <Text note>April 15, 2016</Text> */}
                    </Body>
                  </Left>
                </CardItem>

                <CardItem style={{ justifyContent: "space-around" }}>
                  {dtSrc.Topically === 1 ? (
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        backgroundColor: "#995472",
                        borderColor: "#654662",
                        float:"left"
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
                        justifyContent: "center",
                        alignItems: "center",
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        backgroundColor: "#604561",
                        borderColor: "#bfbeb7",
                        float:"left"
                      }}
                    >
                      <Text
                        style={{
                          textAlignVertical: "center",
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "#fff",
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
                        justifyContent: "center",
                        alignItems: "center",
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        backgroundColor: "#223849",
                        borderColor: "#927b85",
                        float:"left"
                      }}
                    >
                      <Text
                        style={{
                          textAlignVertical: "center",
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "#fff",
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
                        justifyContent: "center",
                        alignItems: "center",
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        backgroundColor: "#c89ba2",
                        borderColor: "#b86a80",
                        float:"left"
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
                        justifyContent: "center",
                        alignItems: "center",
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        backgroundColor: "#b4b9bb",
                        borderColor: "#747575",
                        float:"left"
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
                      borderColor: "#cbbfb6",
                      float:"left"
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
                </CardItem>
              
              </Card>
              </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
