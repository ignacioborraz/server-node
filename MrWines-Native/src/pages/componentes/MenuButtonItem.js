import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native"

const MenuButtonItem = ({text, onPress, image }) => {
return (

<TouchableOpacity
style = { styles.buttonContainer}
onPress={onPress}
>
<Image
source ={{uri: image}}
style = {styles.image}
/>
<Text style = {styles.text}>{text}</Text>

</TouchableOpacity>

 )
}
const styles = StyleSheet.create({

buttonContainer:{
    alignItems: "center",
backgroundColor: "#d9d9d9",
borderRadius: 10,
flexDirection: "row",
marginBottom: 15,
padding: 15,
},
image:{
    borderRadius: 23,
    height: 45,
    width: 45,
},
text:{
    fontWeight: "bold",
    marginStart: 7,
}

})

export default MenuButtonItem