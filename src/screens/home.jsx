import { StyleSheet, View } from 'react-native'
import React, {useState} from 'react'
import Title from '../components/title'
import Item from '../components/item'

const home = () => {
    const [items, setitems] = useState([{label:"almorzar a las 12"}])

  return (
    <View style={styles.container}>
      <Title></Title>
      {items.map((item,index)=>{
        return(<Item key={index} index={index+1} label={item.label}></Item>)
      })}
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