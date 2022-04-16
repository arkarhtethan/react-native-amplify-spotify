import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from "./styles";
import AlbumComponent from '../Album';
import { Album } from '../../../types';

interface IAlbumCategoryProps {
    title: string;
    albums: Album[];
}

const AlbumCategory = (props: IAlbumCategoryProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            {/* list of albums */}
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                keyExtractor={(item) => item.id}
                data={props.albums}
                renderItem={({ item }) => <AlbumComponent album={item} />}
            />
        </View>
    )
}

export default AlbumCategory
