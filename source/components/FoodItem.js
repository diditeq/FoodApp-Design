import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";


const RecommendedFoodItems = ({ FoodItem, onPressItem}) => {
  return (
      <TouchableOpacity style={foodItemStyles.container} onPress={onPressItem}>

          <View>

              {/*Food Item Image */}
              <Image source={FoodItem.image}
                  resizeMode="cover"
                  style={{ width: 225, height: 170, borderRadius: 12 }}>
              </Image>

              {/* Rating */}
              <View style={foodItemStyles.ratingContainer}>
                  <View style={{ justifyContent: "center", paddingRight: 6 }}>
                      <Image
                          source={require("../assets/icons/star.png")}
                          style={{ width: 14, height: 14 }}
                      />
                  </View>
                  <View style={{ justifyContent: "center" }}>
                      <Text style={{ fontWeight: 'bold' }}>{FoodItem.rating}</Text>
                  </View>
              </View>

          </View>

          {/*Food Details(Name and Price) */}
          <View style={foodItemStyles.detailsContainer}>
              <Text numberOfLines={1} style={foodItemStyles.foodName}>
                  {FoodItem.title}
              </Text>
              <Text style={foodItemStyles.foodPrice}>
                  ${FoodItem.price.toFixed(2)}
              </Text>
          </View>

      </TouchableOpacity>

  )
}

const NearFoodItems = ({ FoodItem }) => {
  return (
      <View style={NearFoodItemStyles.container}>

          <View style={{ flexDirection: 'row' }}>
              {/*Food Item Image */}
              <Image source={FoodItem.image}
                  resizeMode="cover"
                  style={{ width: 110, height: 100, borderRadius: 12 }}>
              </Image>

              <View style={{ marginTop: 20, marginLeft: 10 }}>
                  {/* Name of food, Location and distance, Rating */}

                  {/* Name of food */}
                  <Text numberOfLines={1} style={NearFoodItemStyles.foodName}>
                      {FoodItem.title}
                  </Text>

                  {/*Location and distance*/}
                  <Text numberOfLines={1} style={NearFoodItemStyles.location}>
                      {FoodItem.location}
                  </Text>

                  {/* Rating */}
                  <View style={NearFoodItemStyles.ratingContainer}>
                      <View style={{ justifyContent: "center", paddingRight: 6 }}>
                          <Image
                              source={require("../assets/icons/star.png")}
                              style={{ width: 14, height: 14 }}
                          />
                      </View>
                      <View style={{ justifyContent: "center" }}>
                          <Text style={{ fontWeight: 'bold' }}>{FoodItem.rating}</Text>
                      </View>
                  </View>
              </View>
          </View>

          {/*Price) */}
          <View style={NearFoodItemStyles.detailsContainer}>
              <Text style={NearFoodItemStyles.foodPrice}>
                  ${FoodItem.price.toFixed(2)}
              </Text>
          </View>
      </View>
  )
}

{/* Styling of items in Recommended Section*/ }
const foodItemStyles = StyleSheet.create({
  container: {
      backgroundColor: '#f9f6f2',
      marginTop: 20,
      marginLeft: 10,
      padding: 8,
      borderRadius: 12,
      height: 250,
      width: 240,
  },

  ratingContainer: {
      flexDirection: "row",
      backgroundColor: "white",
      position: "absolute",
      padding: 8,
      borderRadius: 15,
      top: 5,
      right: 5
  },

  detailsContainer: {
      marginTop: 10,
  },

  foodName: {
      fontSize: 22,
      fontWeight: "700"
  },

  foodPrice: {
      fontSize: 15,
      paddingTop: 5,
      fontWeight: "600",
      color: "#00b4d8",
  }
})

{/*Styling the items in Near You Section*/ }

const NearFoodItemStyles = StyleSheet.create({
  container: {
      backgroundColor: '#f9f6f2',
      marginTop: 20,
      marginLeft: 10,
      marginRight: 10,
      padding: 10,
      borderRadius: 12,
      flexDirection: 'row',
      justifyContent: 'space-between'
  },

  ratingContainer: {
      flexDirection: 'row'
  },

  foodName: {
      fontSize: 18,
      fontWeight: 'bold',
  },

  location: {
      marginTop: 5,
      marginBottom: 5,
      color: 'grey'
  },

  foodPrice: {
      marginTop: 20,
      color: '#00b4d8'
  }
})


export  {RecommendedFoodItems, NearFoodItems};
