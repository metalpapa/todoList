import { StyleSheet, Text } from 'react-native'
import React from 'react'
import Item from './item'

export default function title() {
  return (
    <Text style={styles.title}>Todo list:</Text>
  )
}

const styles = StyleSheet.create({
  title: {
      color:"white",
      fontSize:25,
      textAlign:'center'
  }
})