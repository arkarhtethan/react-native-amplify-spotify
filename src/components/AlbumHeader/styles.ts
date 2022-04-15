import { StyleSheet, } from 'react-native'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        margin: 15,
    },
    name: {
        color: "#fff",
        fontSize: 30,
        fontWeight: 'bold'
    },
    creatorContainer: {
        flexDirection: 'row',
        margin: 10
    },
    button: {
        backgroundColor: "#1CD05D",
        height: 50,
        width: 175,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    },
    likes: {
        color: "lightgray",
        margin: 5,
        fontSize: 20
    },
    creator: {
        color: "lightgray",
        margin: 5,
        fontSize: 20
    },
})

export default styles;