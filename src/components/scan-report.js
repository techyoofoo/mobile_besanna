import React, { Component } from "react";
import { Image, StatusBar } from "react-native";
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
const cards = [
  {
    text: "Cardamom",
    name: "scanner.png",
    image: require("../../assets/scanner.png"),
    benefits: `May help promote clear, healthy looking skin when applied topically
    Powerful cleansing agent
    Warm, earthy aroma
    `
  },
  {
    text: "Lavender Line two",
    name: "profile.png",
    image: require("../../assets/profile.png"),
    benefits: `May help maintain overall gastrointestinal health when ingested
    Promotes clear breathing and respiratory health when used internally
    Flavorful spice for cooking and baking`
  },
  {
    text: "Berganot",
    name: "profile.png",
    image: require("../../assets/profile.png"),
    benefits: `Calming and soothing aroma
    Provides skin purifying benefits
    Frequently used in massage therapy for its calming benefits`
  }
];
export default class DeckSwiperExample extends Component {
  render() {
    return (
      <Container>
        <StatusBar style={{ backgroundColor: "#416E74" }} />
        <Header>
          <Left>
            <Button transparent>
              <Icon type="FontAwesome" name="home" />
            </Button>
          </Left>
          <Body>
            <Title style={{ alignContent: "center" }}>besanna</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon type="FontAwesome" name="bars" />
            </Button>
          </Right>
        </Header>
        <View
          style={{
            borderColor: "#416E74",
            borderWidth: 2,
            borderStyle: "solid",
            padding: 10,
            height: 500,
            backgroundColor: "#416E74",
            borderRadius: 190,
            margin: 20
          }}
        >
          <View style={{ paddingTop: 30 }} />
          <DeckSwiper
            dataSource={cards}
            renderItem={item => (
              <Card transparent>
                <CardItem>
                  <Left>
                    {/* <Thumbnail source={item.image} /> */}
                    <Body>
                      <Text>{item.text}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  {/* <Image source={require(item.image)} style={{height: 200, width: null, flex: 1}}/> */}

                  <Image
                    style={{ height: 200, width: null, flex: 1 }}
                    source={item.image}
                  />
                  
                </CardItem>
                <CardItem>
                <Text style={{flexWrap: 'wrap', alignItems: 'flex-start'}}>{item.benefits}</Text>
                </CardItem>
              </Card>
            )}
          />
        </View>
      </Container>
    );
  }
}
