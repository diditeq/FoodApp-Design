import React from "react";
import { StyleSheet, View, Text, TouchableOpacity} from "react-native";

const SectionRecommended = ({ onPress, title }) => {
    return (
        <View style={homeLowerSection.container}>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={{ fontSize: 18, fontWeight: "500", color: "black" }}>
                    {title}
                </Text>
            </View>
            <TouchableOpacity style={{ justifyContent: "center" }} onPress={onPress}>
                <Text style={{ fontSize: 15, color: "#00b4d8" }}>See All</Text>
            </TouchableOpacity>
        </View>

    )
}

const SectionNearYou = ({ onPress, title }) => {
    return (
        <View style={homeLowerSection.container}>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={{ fontSize: 18, fontWeight: "500", color: "black" }}>
                    {title}
                </Text>
            </View>
            <TouchableOpacity style={{ justifyContent: "center" }} onPress={onPress}>
                <Text style={{ fontSize: 15, color: "#00b4d8" }}>See All</Text>
            </TouchableOpacity>
        </View>

    )
}



const homeLowerSection = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop:10,
    },

    recommended: {
        fontSize: 20,
        fontWeight: "bold",
    },

});


export  {SectionRecommended, SectionNearYou};