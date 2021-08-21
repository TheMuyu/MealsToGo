import React from 'react'
import { StyleSheet, SafeAreaView, Text, View, StatusBar } from 'react-native'
import { Searchbar } from 'react-native-paper';
import RestaurantInfo from '../components/RestaurantInfo';

const RestaurantsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.search}>
                <Searchbar placeholder='Search...' />
            </View>
            <View style={styles.list}>
                <RestaurantInfo />
            </View>
        </SafeAreaView>
    )
}

export default RestaurantsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
    search: {
        padding: 16,
    },
    list: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16
    }
})
