import { StyleSheet, } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#131313",
        width: "100%",
        position: "absolute",
        bottom: 49,
        borderWidth: 2,
        borderColor: "#000",
    },
    rightContainer: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        marginLeft: 10,
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
    },
    image: {
        width: 75,
        height: 75,
    },
    title: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        margin: 10
    },
    artist: {
        color: "lightgray",
        fontSize: 18,
    },
})

export default styles;