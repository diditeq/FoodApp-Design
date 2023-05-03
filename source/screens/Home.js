import  React from "react";
import { 
  View,
  ImageBackground,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import HeaderContent from "../components/HeaderContent";
import {SectionRecommended, SectionNearYou}  from "../components/Section";
import { categories, nearFoods } from "./../external_data/externalData";
import  {RecommendedFoodItems, NearFoodItems} from "../components/FoodItem";



const Home = () => {
    const toNavigate = useNavigation();
  
    const onNavigation = (item) => {
      console.log("onPress Item", item);
      toNavigate.navigate("FoodDetails", {
        foodItemDetails: item,
      });
  };
  return (
    <ScrollView>
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/imgBG.jpg')} style={styles.backgroundImage}>

                {/* Header Content */}
                <HeaderContent />

                {/*Second Part of Home Page*/}
                <View style={styles.FoodItemsArea}>

                    <View >
                        {/* Recommended*/}
                        <SectionRecommended title="Recommended" />

                        {/*Sample Food Items List */}
                        <FlatList
                            data={categories}
                            horizontal
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <RecommendedFoodItems
                                        FoodItem={item}
                                        onPressItem={() => onNavigation(item)}
                                    />
                                );
                            }}
                        />
                    </View>

                    <View>
                        {/* Near You*/}
                        <SectionNearYou title="Near You" />

                        {/*Food Items List */}
                        <FlatList
                            data={nearFoods}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <NearFoodItems
                                        FoodItem={item}
                                        onPressItem={() => onNavigation(item)}
                                    />
                                );
                            }}
                        />

                    </View>


                </View>

            </ImageBackground >

        </View >

    </ScrollView>
);
}


const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},

backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
},

FoodItemsArea: {
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    top: 20,
},

})
export default Home;
