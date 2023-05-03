import { View, Text, Image, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
 const navigation = useNavigation()

  return (
    <View
      style={{
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
       <Image
            source={require("../assets/icons/menu.png")}
            style={{ width: 25, height: 25, tintColor: "white" }}
          />
      

      <Button title="go back to home" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Menu;