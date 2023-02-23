import { View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const input = ({ style }) => {


    const [text, onChangeText] = React.useState(null);

    return (
        <View style={{ ...styles.container, ...style }}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={'agrege una tarea'}
            />

            <TouchableOpacity style={styles.button}>
                <Image
                    style={styles.add}
                    source={require('../images/add2.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignSelf:"center"
    },
    input: {
        height: 40,
        width: "80%",
        margin: 10,
        borderWidth: 1,
        padding: 10,
        borderColor: "white",
        borderRadius: 15,
        backgroundColor: "#7b7cef",
        color: "white"
    },
    add: {
        marginTop: 16,
        width: 30,
        height: 30,
        color: "white"
    }
})

export default input