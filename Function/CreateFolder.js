import { StyleSheet, View,TouchableOpacity,Image,Keyboard} from 'react-native';
import {useState } from 'react';
import {TextInput} from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RNPickerSelect from 'react-native-picker-select';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ModernHeader from "react-native-modern-header";
export default function CreateFolder({navigation,props}) { 
  
    const [titletext, Settitletext] = useState("");
   
    const placeholder = {
      label: '공개 범위를 선택하세요',
      value: null,
      color: '#9EA0A4',
    };
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

      
                 
        <ModernHeader leftComponentDisable={leftComponent}  rightComponentDisable={RightComponent} title="폴더 추가" rightImageSource={require("../../assets/check.png")} style={{backgroundColor:'#ffa7a7',height:90}} onLeftPress={() => navigation.navigate('Profile')}  onRightPress={() => navigation.navigate('Profile')} titleTextStyle={{top:15}} leftComponentStyle={{top:50}} rightComponentStyle={{top:50}}></ModernHeader>
          <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 30, y: 0 }}
          contentContainerStyle={styles.authContainer}
          scrollEnabled={true}
          >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

           
        <TextInput
        keyboardType="email-address"
        style={styles.titleinput}
        label='제목'
        type='제목'
        onFocus={() => HeaderComponentDisable()}
        onEndEditing={() => HeaderComponentEnable()}
       
        
        onChangeText={(text) => Settitletext(text)}
        value={titletext}
        mode="outlined"
        />
          </TouchableWithoutFeedback>

        <View style={styles.inputIOS}>
        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: '전체 공개', value: 'all' },
                { label: '친구만', value: 'friend' },
                { label: '나만 보기', value: 'me' },
            ]}
            useNativeAndroidPickerStyle={false}
            placeholder={placeholder}
         />
       </View>
       <TouchableOpacity onPress={() => alert('누름')}>
        <Image style={{width:200,justifyContent:'center',marginLeft:50,top:50}} source={require("../../assets/camera.png")}/>
       </TouchableOpacity>
       </KeyboardAwareScrollView>
       </View>
    )
}
const styles = StyleSheet.create({
    titleinput: {
      marginTop: 10,
      height:50,
      width:320,
    
    },
    Contentinput: {
      marginTop: 10,
      width:320,
      height: 150,

      marginBottom:100
      
    },
    inputIOS: {
      marginTop:20,
      marginBottom:20,
      fontSize: 16,
      width:320,
      height:50,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      
      paddingRight: 30, 
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30,
    },
  });
