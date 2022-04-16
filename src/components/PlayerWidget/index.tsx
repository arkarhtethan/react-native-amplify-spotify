import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Song } from '../../../types'
import styles from './styles';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Audio } from "expo-av";
import { AppContext } from '../../../AppContext';
import { API, graphqlOperation } from 'aws-amplify';
import { getSong } from '../../graphql/queries';
interface IPlayerWidgetProps {
    song: Song;
}

const song = {
    id: '1',
    uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'High on You',
    artist: 'Helen',
}

// const PlayerWidget = (props: IPlayerWidgetProps) => {
const PlayerWidget = () => {
    const [song, setSong] = useState(null);
    const [sound, setSound] = useState<Audio.Sound | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [duration, setDuration] = useState<number | null>(null);
    const [position, setPosition] = useState<number | null>(null)
    const { songId } = useContext(AppContext);

    const onPlaybackStatusUpdate = (status) => {
        setIsPlaying(status.isPlaying)
        setDuration(status.durationMillis)
        setPosition(status.positionMillis)
    }

    const playCurrentSong = async () => {
        if (sound) {
            await sound.unloadAsync();
        }
        const { sound: newSound } = await Audio.Sound.createAsync({ uri: song.uri }, { shouldPlay: isPlaying }, onPlaybackStatusUpdate)
        setSound(newSound);
    }

    useEffect(() => {
        const fetchSong = async () => {
            try {
                const data = await API.graphql(graphqlOperation(getSong, { id: songId }))
                setSong(data.data.getSong)
            } catch (error) {
                console.log(error)
            }
        }
        fetchSong();
    }, [songId])

    useEffect(() => {
        if (song)
            playCurrentSong();
    }, [song])

    const onPlayPausePress = async () => {
        if (!sound) { return; }
        if (isPlaying) {
            await sound.stopAsync();
        } else {
            await sound.playAsync();
        }
    }

    const getProgress = () => {
        if (sound === null || duration === null || position === null) {
            return 0;
        }
        return (position / duration) * 100;
    }

    if (!song) return null;

    return (
        <View style={styles.container}>
            <View style={[styles.progress, { width: `${getProgress()}%` }]}></View>
            <View style={styles.row}>
                <Image style={styles.image} source={{ uri: song.imageUri }} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <AntDesign style={{ marginRight: 30 }} name="hearto" size={30} color="white" />
                    <TouchableOpacity onPress={onPlayPausePress}>
                        <FontAwesome name={isPlaying ? "pause" : "play"} size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

export default PlayerWidget
