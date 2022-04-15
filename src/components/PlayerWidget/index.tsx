import { Image, Text, View } from 'react-native'
import React from 'react'
import { Song } from '../../../types'
import styles from './styles';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

interface IPlayerWidgetProps {
    song: Song;
}

const song = {
    id: '1',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'High on You',
    artist: 'Helen',
}

// const PlayerWidget = (props: IPlayerWidgetProps) => {
const PlayerWidget = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: song.imageUri }} />
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{song.title}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
            </View>
            <View style={styles.iconContainer}>
                <AntDesign style={{ marginRight: 30 }} name="hearto" size={30} color="white" />
                <FontAwesome name="play" size={30} color="white" />
            </View>
        </View >
    )
}

export default PlayerWidget
