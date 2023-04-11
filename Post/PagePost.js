import { StyleSheet, View,TouchableOpacity,Image,Keyboard} from 'react-native';
import { useState } from 'react';
import ModernHeader from "react-native-modern-header";
import {TextInput } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
export default function PagePost( {navigation,props} ) { 
  
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
    
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          
         <ModernHeader title="페이지 작성" leftComponentDisable={leftComponent}  rightComponentDisable={RightComponent} rightImageSource={require("../../assets/check.png")} style={{backgroundColor:'#ffa7a7',height:90}} onLeftPress={() => navigation.navigate('PagePostinglist')}  onRightPress={() => navigation.navigate('PagePostinglist')} titleTextStyle={{top:15}} leftComponentStyle={{top:50}} rightComponentStyle={{top:50}}></ModernHeader>
          <KeyboardAwareScrollView
           resetScrollToCoords={{ x: 30, y: 0 }}
           contentContainerStyle={styles.authContainer}
           scrollEnabled={true}
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
        mode="outlined"
        />
        </TouchableWithoutFeedback>
        <TouchableOpacity onPress={() => alert('누름')}>

       <Image style={{width:200,marginLeft:50,marginTop:30}} source={require("../../assets/camera.png")}/>
       </TouchableOpacity>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <TextInput
      keyboardType="email-address"
      style={styles.Contentinput}
      onFocus={() => HeaderComponentDisable()}
      onEndEditing={() => HeaderComponentEnable()}
      label='내용'
      type='내용'
      onChangeText={Setcontenttext}
      value={contenttext}
      multiline={true}
      mode="outlined"
      />
      </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
      </View>
    )
}


const styles = StyleSheet.create({
    titleinput: {
      marginTop: 10,
      height:60,
      width:320,
    },
    Contentinput: {
      marginTop: 10,
      width:320,
      height: 240,
      marginBottom:20
    },
  });