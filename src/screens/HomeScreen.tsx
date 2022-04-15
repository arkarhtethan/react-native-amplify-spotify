import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AlbumCategory from '../components/AlbumCategory'
import albumCategories from '../data/albumCategories'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList keyExtractor={(item) => item.id} data={albumCategories} renderItem={({ item }) => <AlbumCategory
                title={item.title}
                albums={item.albums}
            />
            } />

        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: { width: "100%" }
})