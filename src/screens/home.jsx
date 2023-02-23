import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import Title from '../components/title'
import Item from '../components/item'
import Input from '../components/input'

const home = () => {
  const [items, setitems] = useState([{ label: "almorzar a las 12" }])
  return (
    <View style={styles.container}>
      <Title style={styles.title}></Title>

      <View style={styles.itemList} >
        {items.map((item, index) => {
          return (<Item key={index} index={index + 1} label={item.label}></Item>)
        })}
      </View>

      <Input style={styles.input} />
    </View>
  )
}

export default home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:30,
    backgroundColor: "#5564eb",
  },
  title: {
    flex:1
  },
  itemList: {
    flex: 1
  },
  input: {
    flex: 1,
  }
})