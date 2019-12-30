import React, { Component } from "react";
import {
  Image,
  StatusBar,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";
import scanStyles, { themeColor } from "../../styles/scan-styles";
import { base_url } from "../../constants";

export default class FriendList extends Component {
  state = {
    listOfFriends: [],
    items: [],
    isLoading: false
  };
  // async componentDidMount() {
  //   // const friends_url = `${base_url}fetch-all-friends`;
  //   // return fetch(`${friends_url}`)
  //   //   .then(response => response.json())
  //   //   .then(async responseJson => {
  //   //     // console.log('------Data----', responseJson);
  //   //     const syncData = await responseJson.data;
  //   //     this.setState({ listOfFriends: syncData });
  //   //   })
  //   //   .catch(error => {
  //   //     console.error(error);
  //   //   });

  //   this.getData();
  // }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    console.log('Welcome to get Data')
    let API_URL = `${base_url}fetch-all-friends`; //"https://jsonplaceholder.typicode.com/posts";
    this.setState({ isLoading: true });
    fetch(API_URL)
      .then(res => res.json())
      .then(res => {
        console.log('-----', res);
        // this.setState({ items: res.data });
        this.setState({ items: res.data });
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  renderRow = ({ item }) => {
    return (
      <View
        style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" }}
      >
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            flex: 1,
            marginLeft: 15,
            marginRight: 15
          }}
        >
          <View>
            <Image
              source={require("../../../assets/profile.png")}
              style={{ width: 60, height: 60, borderRadius: 30 }}
            />
          </View>
          <View>
            <Text>{item.name}</Text>
          </View>
        </View>

        {/* <Image
          source={require("../../../assets/profile.png")}
          style={{ width: 60, height: 60, borderRadius: 30 }}
        />
        <Text>
          {item.email_id}- {item.name}
        </Text> */}
      </View>
    );
  };
  // renderRow = ({ item }) => {
  //   return (
  //     <View
  //       //style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" }}
  //     >
  //       <View
  //         style={{
  //           // flexDirection: "row",
  //           // justifyContent: "space-evenly",
  //           // paddingTop: 10
  //           justifyContent: "space-between",
  //           alignItems: "center",
  //           flexDirection: "row",
  //           flex: 1,
  //           marginLeft: 15,
  //           marginRight: 15
  //         }}
  //       >
  //         <View>
  //           <Image
  //             source={require("../../../assets/profile.png")}
  //             style={{ width: 60, height: 60, borderRadius: 30 }}
  //           />
  //         </View>
  //         <View>
  //           <Text>{item.name}</Text>
  //         </View>
  //       </View>
  //       <View
  //         style={{
  //           borderBottomColor: "black",
  //           borderBottomWidth: 1,
  //           margin: 10
  //         }}
  //       />
  //     </View>
  //     // </View>
  //   );
  // };
  render() {
    // console.log("-----------------", this.state.listOfFriends);
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
        {/* <View
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
        </View> */}
        <View style={{ flex: 1, marginTop: 50 }}>
          <FlatList
            data={this.state.items}
            renderItem={this.renderRow}
            refreshing={this.state.isLoading}
            onRefresh={this.getData}
            keyExtractor={(i, k) => k.toString()}
          />
        </View>
        {/* {this.state.listOfFriends.map((dt, i) => {
          return (
            <View key={i}>
              <View
                key={i}
                style={{
                  // flexDirection: "row",
                  // justifyContent: "space-evenly",
                  // paddingTop: 10
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                  flex: 1,
                  marginLeft: 15,
                  marginRight: 15
                }}
              >
                <View>
                  <Image
                    source={require("../../../assets/profile.png")}
                    style={{ width: 60, height: 60, borderRadius: 30 }}
                  />
                </View>
                <View>
                  <Text>{dt.name}</Text>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  margin: 10
                }}
              />
            </View>
          );
        })} */}
        {/* <View
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
        </View> */}

        <TouchableOpacity
          style={scanStyles.mainConatinerStyle}
          onPress={() => this.props.navigation.navigate("ScanAFriend")}
        >
          <Image
            source={require("../../../assets/profile.png")}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
