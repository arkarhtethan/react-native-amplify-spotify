import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AlbumCategory from '../components/AlbumCategory'
import { API, graphqlOperation } from 'aws-amplify'
import { listAlbumCategories, } from '../graphql/queries'

const HomeScreen = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchAlbumCategories = async () => {
            try {
                const data = await API.graphql(graphqlOperation(listAlbumCategories));
                setCategories(data.data.listAlbumCategories.items)
            } catch (error) {
                console.log(error);
            }
        }
        fetchAlbumCategories();
    }, [])

    return (
        <SafeAreaView style={styles.container} >
            <FlatList
                keyExtractor={(item) => item.id}
                data={categories}
                renderItem={({ item }) => {
                    return <AlbumCategory
                        title={item.title}
                        albums={item.albums.items}
                    />
                }
                }
            />
        </SafeAreaView >
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: { width: "100%", paddingBottom: 70 }
})