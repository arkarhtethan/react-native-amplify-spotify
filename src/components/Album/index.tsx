import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import styles from "./styles";
import { Album } from '../../../types';
import { useNavigation } from '@react-navigation/native';

interface IAlbumProps {
    album: Album;
}

const AlbumComponent = (props: IAlbumProps) => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate("AlbumScreen", { id: props.album.id })
    }
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image source={{ uri: props.album.imageUri }} style={styles.image} />
                <Text style={styles.text}>{props.album.artistsHeading}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default AlbumComponent
