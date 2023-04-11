import React from "react";
import {Text, View,Image} from 'react-native';
import {Avatar} from "react-native-paper";

export default function Message() {
  
      return (
        <View style={{backgroundColor:'white',flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image source={require("../../assets/message.jpg")} style={{width:100}}/>
            <Text style={{textAlign:'center'}}>메세지를 확인하세요!</Text>
        </View>
      )
}
