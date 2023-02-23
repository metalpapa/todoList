import { View, StyleSheet ,TextInput,Image} from 'react-native'
import React from 'react'

const input = ({style}) => {
    

const [text, onChangeText] = React.useState(null);

  return (
    <View style={{...styles.container,...style}}>
       <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={'agrege una tarea'}
      />
     <Image
        style={styles.add}
        source={require('../images/add2.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row"
    },
    input: {
      height: 40,
      width: "80%",
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderColor:"white",
      borderRadius:23, 
      backgroundColor:"#7b7cef",
      color:"white"
    },
    add:{
        marginTop:15,
        width: 30,
        height: 30,
        color:"white"
    }
})

export default input