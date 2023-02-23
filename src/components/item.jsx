import { StyleSheet, Text, View, Button ,Image} from 'react-native'
import React from 'react'

const item = ({label,index}) => {
    return (
        <View style={styles.container}>
            <Text>{index}</Text>
            <Text>{label}</Text>
            <Image
                    style={styles.trash}
                    source={require('../images/basurero.png')}
                />
        </View>
    )
}

export default item

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#7b7cef",
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        maxHeight:40,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 15,
        marginVertical: 7,
        marginHorizontal:10,   
    },
    trash: {
        width: 20,
        height: 20,
        color: "white"
    }
})
