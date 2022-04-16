import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import SongListItem from '../components/SongListItem';
import albumDetails from '../data/albumDetails';
import AlbumHeader from '../components/AlbumHeader';
import { API, graphqlOperation } from 'aws-amplify';
import { getAlbum } from '../graphql/queries';

const AlbumScreen = () => {
    const [album, setAlbum] = useState(null)
    const route = useRoute();
    const albumId = route.params.id;

    useEffect(() => {
        const fetchAlbumDetails = async () => {
            try {
                const data = await API.graphql(graphqlOperation(getAlbum, { id: albumId }));
                setAlbum(data.data.getAlbum)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAlbumDetails();
    }, [])
    if (!album) return <Text>Loading...</Text>
    return (
        <View>
            <FlatList
                ListHeaderComponent={<AlbumHeader album={albumDetails} />}
                keyExtractor={(item) => item.id}
                data={album.songs.items}
                renderItem={({ item }) => <SongListItem song={item} />}
            />
        </View>
    )
}

export default AlbumScreen

const styles = StyleSheet.create({})