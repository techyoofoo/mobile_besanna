import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image
} from "react-native";
import {base_url} from '../constants'

export default class TestReport extends Component {
  componentDidMount(){
    //http://localhost:9010/
    fetch(`${base_url}`)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('----', responseJson)
    })
    .catch((error) => {
      console.error(error);
    });
  }
  state = {
    showMenu: false,
    display_text: "flex",
    show_display_background: false
  };
  render() {
    return (
      <View>
        <View style={{ flexDirection: "row", justifyContent:'space-between',paddingTop: 20 }}>
        <TouchableOpacity><Image source={require("../../assets/home.png")} /></TouchableOpacity>
        {
          this.state.show_display_background ? <TouchableOpacity
          style={{
            backgroundColor:'#CECEC6',
            width: Dimensions.get("screen").height / 3,
            height: Dimensions.get("screen").height / 3,
            // borderTopLeftRadius: 300,
            borderBottomLeftRadius: 420,
            borderBottomRightRadius: 420,
            justifyContent:'flex-start',
            // marginLeft: 130,
            position:'absolute',
            right:-35,
            top: -35,
            rotation:40
            // zIndex:999
          }}
          onPress={() => {
            !this.state.showMenu
              ? this.setState({ showMenu: true, show_display_background:true })
              : this.setState({ showMenu: false, show_display_background:false });
          }}
        >
          <View style={{justifyContent:'flex-end', padding:80}}>
          <Image source={require("../../assets/close.png")} />
          </View>
        </TouchableOpacity>:
        <TouchableOpacity        
        onPress={() => {
          !this.state.showMenu
            ? this.setState({ showMenu: true, display_text: "none", show_display_background:true })
            : this.setState({ showMenu: false, display_text: "flex", show_display_background:false });
        }}
      >
        <Image source={require("../../assets/menu.png")} />
      </TouchableOpacity>
        }
          
        </View>
        
        {this.state.showMenu ? (
          <View style={styles.container}>
            <TouchableOpacity style={styles.fab}>
              <Image
                source={require("../../assets/profile.png")}
                style={{ width: 60, height: 60 }}
              />
              <Text style={styles.text}>My Account</Text>
              <Text style={styles.text}>My Scanner</Text>
              <Text style={styles.text}>Preferences</Text>
              <Text style={[styles.text, { paddingTop: 40 }]}>Help</Text>
              <Text style={styles.text}>About</Text>
              <Text style={styles.text}>Reviews</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View />
        )}
        <Text style={{ display: this.state.display_text }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it? It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like). Where does it
          come from? Contrary to popular belief, Lorem Ipsum is not simply
          random text. It has roots in a piece of classical Latin literature
          from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
          professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in classical literature,
          discovered the undoubtable source. Lorem Ipsum comes from sections
          1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
          of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
          on the theory of ethics, very popular during the Renaissance. The
          first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
          a line in section 1.10.32.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "baseline",
    backgroundColor: "#fff",
    marginTop:20
    // paddingTop: 20
  }
});
