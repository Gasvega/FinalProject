import { StyleSheet, Text,View,TouchableOpacity,Image,Keyboard,Button,KeyboardAvoidingView} from 'react-native';
import { useState } from 'react';
import { LogBox } from "react-native";
LogBox.ignoreAllLogs()
import ModernHeader from "react-native-modern-header";
import {TextInput } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons';
import { KeyboardScrollView } from 'react-native-avoiding-keyboard-scroll-view'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
export default function QuestionPost( {navigation,props} ) { 

  
    const [titletext, Settitletext] = useState("");
    const [contenttext, Setcontenttext] = useState("");
    const [leftComponent, SetleftComponent] = useState(false);
    const [RightComponent, SetRightComponent] = useState(false);

  
    const HeaderComponentDisable = () => {
      SetleftComponent(true)
      SetRightComponent(true)

    }

    const HeaderComponentEnable = () => {
      SetleftComponent(false)
      SetRightComponent(false)
    }

  

    return (

     
      <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
      <ModernHeader title="질문글 작성" leftComponentDisable={leftComponent}  rightComponentDisable={RightComponent} rightImageSource={require("../../assets/check.png")} style={{backgroundColor:'#ffa7a7',height:180}} onLeftPress={() => navigation.navigate('Home')}  onRightPress={() => navigation.navigate('Home')} titleTextStyle={{top:60}} leftComponentStyle={{top:140}} rightComponentStyle={{top:140}}></ModernHeader>
      <KeyboardScrollView
        keyboardViewOffset={10}
        
        renderBottomComponent={() => 

          <View style={{bottom:25,flexDirection:'row',justifyContent:'space-around'}}>

    <Ionicons name="image-outline" size={35} style={{color:'#9AC4F8'}}/>
    <Ionicons name="camera-outline" size={35} style={{color:'#9AC4F8'}}/>
          </View>
        
        }
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <TextInput
        keyboardType="email-address"
        style={styles.titleinput}
        onFocus={() => HeaderComponentDisable()}
        onEndEditing={() => HeaderComponentEnable()}
        label='제목'
        type='제목'
        onChangeText={Settitletext}
        value={titletext}
        mode="flat"
        />
       <TextInput
        style={styles.Contentinput}
        onChangeText={Setcontenttext}
        onFocus={() => HeaderComponentDisable()}
        onEndEditing={() => HeaderComponentEnable()}
        value={contenttext}
        label='내용'
        multiline={true}
        type='내용'
        
        /> 

        </TouchableWithoutFeedback>
        </KeyboardScrollView>
     
        </View>
     
      
    )
}
const styles = StyleSheet.create({
    titleinput: {
      
      marginTop: 10,
      height:50,
      width:320,
      backgroundColor:'white'
    },
    Contentinput: {
     
      marginTop: 10,
      width:320,
      height: 280,
      marginBottom:20,
      backgroundColor:'white'
    },
  });