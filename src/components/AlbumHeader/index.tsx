import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Album } from '../../../types';
import styles from './styles';

interface IAlbumHeaderProps {
    album: Album;
}

const AlbumHeader = (props: IAlbumHeaderProps) => {
    const { album } = props;
    return (
        <View style={styles.container}>
            <Image source={{ uri: album.imageUri }} style={styles.image} />
            <Text style={styles.name}>{album.name}</Text>
            <View style={styles.creatorContainer}>
                <Text style={styles.creator}>By {album.by}</Text>
                <Text style={styles.likes}>{album.numberOfLikes} Likes</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Play</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default AlbumHeader
