import * as React from "react";
import { View,TouchableOpacity,Image,ImageBackground } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Card,Text } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { MenuProvider } from 'react-native-popup-menu';
import { renderers } from 'react-native-popup-menu';
const { SlideInMenu } = renderers;
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
function Note({navigation}) {
  const [mode, setMode] = React.useState("horizontal-stack");
  const [snapDirection, setSnapDirection] = React.useState("left")
  const [pagingEnabled, setPagingEnabled] = React.useState(true);
  const [snapEnabled, setSnapEnabled] = React.useState(true);
  const [loop, setLoop] = React.useState(true);
  const [autoPlay, setAutoPlay] = React.useState(false);
  const [autoPlayReverse, setAutoPlayReverse] = React.useState(false);
  const viewCount = 5;

  const NoteCard = () => {
    return (
      <Card  style={{flex:1,width:300,height:350,borderRadius:30,marginTop:30}}>
         <TouchableOpacity onPress={() => navigation.navigate('PagePostinglist')}>
         <ImageBackground style={{width:300,height:350,justifyContent:'center',alignItems:'center'}} source={{ uri: 'https://picsum.photos/703' }} imageStyle={{borderRadius:30}} >
         <Menu renderer={SlideInMenu} style={{alignItems:'flex-end'}} >
           <MenuTrigger style={{borderColor:'white',height:30,width:45}}>
             <Ionicons name="ellipsis-horizontal-outline" size={35} style={{color:'white',marginRight:12,left:100,bottom:120}}/>
           </MenuTrigger>
           <MenuOptions optionsContainerStyle={{borderWidth:2,borderColor:'black',borderRadius:30,justifyContent:'center',alignItems:'center',marginLeft:30,marginRight:30}}>
                 <MenuOption onSelect={() => alert(`수정`)}  >
                 <Text style={{textAlign:'center',fontSize:25,color:'gray',alignItems:'center',borderWidth:2,borderRadius:15,width:300}}>수첩 수정</Text>
               
                 </MenuOption>
                 <MenuOption onSelect={() => alert(`삭제`)}>
                 <Text style={{textAlign:'center',fontSize:25,color:'gray',borderWidth:2,borderRadius:15,width:300}}>수첩 삭제</Text>
                 </MenuOption>
         </MenuOptions>
         </Menu>
          <Text style={{bottom:-90,color:'white',fontSize:30,fontWeight:'bold'}}>제목</Text> 
          <Text style={{bottom:-120,color:'#D5D5D5',fontSize:30}}>2023-04-06</Text>
          </ImageBackground>
          </TouchableOpacity>
     </Card>
        
      )

  }

  let state = {
    carouselItems: [
    {
        title:"Item 1",
        text: "Text 1",
    },
    {
        title:"Item 2",
        text: "Text 2",
    },
    {
        title:"Item 3",
        text: "Text 3",
    },
    {
        title:"Item 4",
        text: "Text 4",
    },
    {
        title:"Item 5",
        text: "Text 5",
    },
  ]
}

  return (
   <MenuProvider >
    <View style={{flex:1,backgroundColor:'white'}}>
     <View style={{justifyContent:'center',alignItems:'flex-end',marginRight:10}}>
      <Carousel
        style={{
          width: 400,
          height: 520,
          alignItems: "center",
          justifyContent: "center",
          borderRadius:20
        }}
        width={280}
        height={380}
        pagingEnabled={pagingEnabled}
        snapEnabled={snapEnabled}
        mode={mode}
        loop={loop}
        autoPlay={autoPlay}
        autoPlayReverse={autoPlayReverse}
        data={state.carouselItems}
        modeConfig={{
          snapDirection,
          stackInterval: mode === "vertical-stack" ? 8 : 18,
        }}
        customConfig={() => ({ type: "positive", viewCount })}
        renderItem={NoteCard}/>
    </View>
    <Image source={require("../../assets/notebutton.png")} style={{ 
      marginTop:70,
      width:335,
      height:100,
      justifyContent:'center',
      alignItems:'center',
      borderWidth:3,
      borderRadius:20,
      left:25,
      right:40,
      borderColor:'#9AC4F8',
      bottom: 0,
      right:0,
      marginRight:10,}}/>
    <TouchableOpacity onPress = {() => navigation.navigate('CreateNote')} style={{
      alignSelf: 'center',
      position: 'relative',
      bottom:160,
      left:10,
      right:0,
      flexDirection:'row',
      marginRight:10}}>
    <Image source={require("../../assets/plus3Dg.png")} style={{ height: 120, width: 120 }} resizeMode="contain"/>
    </TouchableOpacity>
    </View>
    </MenuProvider>
  );
}

export default Note;