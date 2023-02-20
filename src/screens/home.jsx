import { StyleSheet, View } from 'react-native'
import React from 'react'
import Title from '../components/title'

const home = () => {
  return (
    <View style={styles.container}>
      <Title></Title>
    </View>
  )
}

export default home

const styles = StyleSheet.create({
    container:{
        height:"100%",
        backgroundColor: "purple",
    }
})