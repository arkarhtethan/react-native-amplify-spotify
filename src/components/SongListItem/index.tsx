import { Image, Text, View } from 'react-native'
import React from 'react'
import { Song } from '../../../types'
import styles from './styles';

interface ISongListItemProps {
    song: Song;
}

const SongListItem = (props: ISongListItemProps) => {
    const { song } = props;
    console.log(song)
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: song.imageUri }} />
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{song.title}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
            </View>
        </View >
    )
}

export default SongListItem
