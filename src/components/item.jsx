import { StyleSheet, Text, View, Button ,Image} from 'react-native'
import React from 'react'

const item = ({label,index}) => {
    return (
        <View style={{ backgroundColor: "#7b7cef" }}>
            <Text>{index}</Text>
            <Text>{label}</Text>
            <Button
                onPress={()=>{}}
                title="Basura"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}

export default item

const styles = StyleSheet.create({})