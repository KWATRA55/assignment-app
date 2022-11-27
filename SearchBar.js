import React from 'react'
import { View, TextInput, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native'

function SearchBar(props) {
  return (
    <View style = {styles.container}>
        <TextInput 
            placeholder="Search"
            style={styles.input}
            value={props.searchText}
            onChangeText={(text) => props.setSearchText(text)}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        elevation: 0,
    }, 
    input : {
        backgroundColor: '#fff',
        padding : 10,
        borderRadius : 10,
        color : "#000",
        borderWidth : 1,
        borderColor : 'grey'
    }
});

export default SearchBar