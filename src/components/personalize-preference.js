import React, { Component } from 'react';
import { Text, View, StatusBar, Switch, ScrollView, TouchableOpacity } from 'react-native';
import appStyleSheets, { themeColor, textColor } from '../styles/styles';

export default class PersonalizePerference extends Component {
    state = {
        togglePushNotification: false,
        toggleAppUpdates: true,
        togglePromotion: false,
        toggleEvents: false,
        toggleTripsTrick: false,
        togglePollsFeedback: false
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: themeColor }}>
                <StatusBar style={themeColor} />
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <TouchableOpacity activeOpacity={0.5}
                        onPress={() => this.props.navigation.navigate("ActivateScanner")}><Text style={{ fontSize: 15, fontWeight: 'bold', color: textColor, paddingTop: 20, marginLeft: 20 }}>Back</Text></TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: textColor, paddingTop: 30, marginLeft: 20 }}>Edit Preferences</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: textColor, paddingTop: 20, marginLeft: 20 }}>Theme</Text>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Text style={{ fontSize: 15, color: textColor, paddingTop: 10, marginLeft: 20 }}>
                            Customize your besanna app experience with custom color and app icon
                    </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Text style={{ fontSize: 15, color: textColor, paddingTop: 10, marginLeft: 20 }}>
                            Besanna Default
                    </Text>
                    </View>
                    <View style={appStyleSheets.inputBorderStyle} />
                    {/* Communication preferences form */}
                    <View style={{ justifyContent: 'flex-start', marginLeft: 20 }}>
                        {/* <View style={{flexDirection:'row'}}> */}
                        <Text style={{ fontSize: 15, color: textColor, paddingTop: 10 }}>Communication Preferences</Text>
                        <Text style={{ fontSize: 13, color: textColor, paddingTop: 10, fontWeight: 'bold' }}>Push Notification</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 13, color: textColor, paddingTop: 10 }}>All Notification</Text>
                            <Switch
                                onValueChange={() => { }}
                                value={this.state.togglePushNotification} />
                        </View>
                        <Text style={{ fontSize: 13, color: textColor, paddingTop: 10, flexWrap: 'wrap', alignItems: 'flex-start' }}>Get the most out of besanna app by enabling push notification these include scan remainderGet the most out of besanna app by enabling push notification these include scan remainderGet the most out of besanna app by enabling push notification these include scan remainder</Text>
                        {/* </View> */}
                    </View>
                    <View style={appStyleSheets.inputBorderStyle} />
                    {/* App updates form */}
                    <View style={{ justifyContent: 'flex-start', marginLeft: 20 }}>
                        <Text style={{ fontSize: 15, color: textColor, paddingTop: 10 }}>Email</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 13, color: textColor, paddingTop: 10, fontWeight: 'bold' }}>App Updates</Text>
                            <Switch
                                onValueChange={() => { }}
                                value={this.state.toggleAppUpdates} />
                        </View>
                        <Text style={{ fontSize: 13, color: textColor, paddingTop: 10, flexWrap: 'wrap', alignItems: 'flex-start' }}>Get notified when a new version of app is avialable to download. This will include new features, bug fixes and security updates </Text>
                    </View>
                    <View style={appStyleSheets.inputBorderStyle} />
                    {/* Promotion toogle form */}
                    <View style={{ justifyContent: 'flex-start', marginLeft: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 13, color: textColor, paddingTop: 10, fontWeight: 'bold' }}>Promotions</Text>
                            <Switch
                                onValueChange={() => { }}
                                value={this.state.togglePromotion} />
                        </View>
                        <Text style={{ fontSize: 13, color: textColor, paddingTop: 10, flexWrap: 'wrap', alignItems: 'flex-start' }}>Get notified when we have promotion on subscription plans or hardware</Text>
                    </View>
                    <View style={appStyleSheets.inputBorderStyle} />
                    {/* Events toogle form */}
                    <View style={{ justifyContent: 'flex-start', marginLeft: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 13, color: textColor, paddingTop: 10, fontWeight: 'bold' }}>Events</Text>
                            <Switch
                                onValueChange={() => { }}
                                value={this.state.toggleEvents} />
                        </View>
                        <Text style={{ fontSize: 13, color: textColor, paddingTop: 10, flexWrap: 'wrap', alignItems: 'flex-start' }}>Get notified when we have events near you</Text>
                    </View>
                    <View style={appStyleSheets.inputBorderStyle} />
                    {/* Tips and tricks toogle form */}
                    <View style={{ justifyContent: 'flex-start', marginLeft: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 13, color: textColor, paddingTop: 10, fontWeight: 'bold' }}>Tipds & Tricks</Text>
                            <Switch
                                onValueChange={() => { }}
                                value={this.state.toggleTripsTrick} />
                        </View>
                        <Text style={{ fontSize: 13, color: textColor, paddingTop: 10, flexWrap: 'wrap', alignItems: 'flex-start' }}>Think of its your personal instructor for using besann app more effectively</Text>
                    </View>
                    <View style={appStyleSheets.inputBorderStyle} />
                    {/* Polls and Feedback toogle form */}
                    <View style={{ justifyContent: 'flex-start', marginLeft: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 13, color: textColor, paddingTop: 10, fontWeight: 'bold' }}>Tipds & Tricks</Text>
                            <Switch
                                onValueChange={() => { }}
                                value={this.state.togglePollsFeedback} />
                        </View>
                        <Text style={{ fontSize: 13, color: textColor, paddingTop: 10, flexWrap: 'wrap', alignItems: 'flex-start' }}>DO you have to be heared ? Do you have ideas to share how can we improve? These email are you</Text>
                    </View>
                    <View style={appStyleSheets.inputBorderStyle} />
                </ScrollView>
            </View>
        )
    }
}