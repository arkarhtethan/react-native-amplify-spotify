import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native';
import SongListItem from '../components/SongListItem';
import albumDetails from '../data/albumDetails';
import AlbumHeader from '../components/AlbumHeader';

const AlbumScreen = () => {
    const route = useRoute();

    useEffect(() => {

    }, [])

    return (
        <View>
            <FlatList
                ListHeaderComponent={<AlbumHeader album={albumDetails} />}
                keyExtractor={(item) => item.id}
                data={albumDetails.songs}
                renderItem={({ item }) => <SongListItem song={item} />}
            />
        </View>
    )
}

export default AlbumScreen

const styles = StyleSheet.create({})