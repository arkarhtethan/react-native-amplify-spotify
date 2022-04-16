import { Image, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useContext } from 'react'
import { Song } from '../../../types'
import styles from './styles';
import { AppContext } from '../../../AppContext';

interface ISongListItemProps {
    song: Song;
}

const SongListItem = (props: ISongListItemProps) => {
    const { song } = props;
    const { setSongId } = useContext(AppContext);
    const onPress = () => { setSongId(song.id); }
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <>
                    <Image style={styles.image} source={{ uri: song.imageUri }} />
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{song.title}</Text>
                        <Text style={styles.artist}>{song.artist}</Text>
                    </View>
                </>
            </View >
        </TouchableWithoutFeedback>
    )
}

export default SongListItem
