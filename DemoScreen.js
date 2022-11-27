import React, { useState } from 'react'
import {View, Text, Button, StyleSheet, Image, Dimensions, Animated} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';
import SearchBar from './SearchBar';
import Dark from './night'
import { TouchableOpacity } from 'react-native';


function DemoScreen() {
  const[mode, setMode] = useState(true);

  const changeMode = () => {
    setMode(!mode);
  }

  const Standard = [];

  const markers = [
    {
      title : "Amazing Burgers",
      image : require('./assets/card4.jpg'),
      description : "best food place in delhi",
      coordinate: {
        latitude: 29.804297,
        longitude: 76.404026,
      },
    },
    {
      title : "Best Cakes",
      image : require('./assets/card1.jpg'),
      description : "best cakes of our town",
      coordinate: {
        latitude: 29.804402,
        longitude: 76.403986,
      },
    },
    
    {
      title : "Dimsums Are Here",
      image : require('./assets/card2.jpg'),
      description : "We serve the best dimsums...",
      coordinate: {
        latitude: 29.804365,
        longitude: 76.404123,
      },
    },
  ]
  return (
    <View style={styles.container}>

      <MapView
        style = {styles.map}
        customMapStyle={mode ? Standard : Dark}
        initialRegion={{
          latitude: 29.804297,
          longitude: 76.404026,
          latitudeDelta: 0.0,
          longitudeDelta: 0.0,
        }}
      >
         {markers.map((marker, index) => {
         
          return (
            <Marker key={index} coordinate={marker.coordinate}>
              <Animated.View style={styles.markerWrap}>
                <Animated.Image
                  source={require('./assets/marker.png')}
                  style={styles.marker}
                  resizeMode="cover"
                />
              </Animated.View>
            </Marker>
          );
        })}

      </MapView>
      <View style={styles.searchBox}>
        <TextInput 
        placeholder='Search here'
        placeholderTextColor='#000'
        style={{flex: 1, padding: 0}}
        autoCapitalize='none'
        />
      </View>

        
       
          <TouchableOpacity activeOpacity = { .5 } onPress={ changeMode }>
              <View style={styles.toggle}>
              <Image 
              onClick
              style={styles.toggleimage}
              resizeMode='cover'
              source={require('./assets/toggle.png')}
              />
              </View>
          </TouchableOpacity>
      

      <Animated.ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        height={50}
        style={styles.scrollView}
      >
        {markers.map((marker, index) => (
          <View style={styles.card} key={index}>
            <Image 
              source= {marker.image}
              style={styles.cardImage}
              resizeMode='cover'
            />
            <View style={styles.textContent}>
              <Text numberOfLines={1} style={styles.cardTitle}>{marker.title}</Text>
              <Text numberOfLines={1} style={styles.cardDescription}>{marker.description}</Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#293231',
      
    }, 
    map : {
      ...StyleSheet.absoluteFillObject
    },
    searchBox: {
      position: 'absolute',
      marginTop : 15,
      flexDirection: 'row',
      width: '90%',
      backgroundColor: '#fff',
      alignSelf: 'center',
      borderRadius: 5,
      padding: 10,
      elevation: 10,
      shadowRadius: 5,
      shadowOpacity: 0.5,
      shadowColor: '#ccc',
      alignSelf: 'center',

    },

    scrollView: {
      position: "absolute",
      height: 180,
      width: 320,
      margin: 35,
      top: 360,
      paddingVertical: 10,
      borderRadius: 5,
      shadowRadius: 5,
    },

    card: {
      // padding: 10,
      elevation: 2,
      backgroundColor: "#FFF",
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      marginHorizontal: 10,
      shadowColor: "#000",
      shadowRadius: 5,
      shadowOpacity: 0.3,
      shadowOffset: { x: 2, y: -2 },
      height: 200,
      width: 300,
      overflow: "hidden",
      alignItems: 'center',
      borderRadius: 10
    },
    cardImage: {
      flex: 3,
      width: "100%",
      height: "100%",
      alignSelf: "center",
    },
    textContent: {
      flex: 2,
      padding: 5,
    },
    cardtitle: {
      fontSize: 12,
      marginTop: 2,
      fontWeight: "bold",
      
    },
    cardDescription: {
      fontSize: 12,
      color: "#444",
    },
    markerWrap: {
      alignItems: "center",
      justifyContent: "center",
      width:50,
      height:50,
    },
    marker: {
      width: 50,
      height: 50,
    },
    toggle : {
      elevation: 2,
      position: "absolute",
      marginTop : 80,
      marginLeft: 320,
      height: 60,
      width: 60,
      padding: 10,
      shadowColor: 'white',
      shadowOpacity: 0.5
      
      
    },
    toggleimage : {
      flex: 3,
      width: "100%",
      height: "100%",
      alignSelf: "center",
      borderColor: 'white'
    }
  });

export default DemoScreen