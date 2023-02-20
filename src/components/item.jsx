import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const item = () => {
    return (
        <View style={{ backgroundColor: "grey" }}>
            <Text>1</Text>
            <Text>nombre de la task</Text>
            <Button
                onPress={()=>{}}
                title="Basura"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}

export default item

const styles = StyleSheet.create({})