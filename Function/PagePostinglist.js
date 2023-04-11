import * as React from 'react';
import { useState } from "react";
import {
  Text, 
  View,
  SafeAreaView,Dimensions,ImageBackground,Image,TouchableOpacity} from 'react-native';
import { Ionicons} from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';
import { MenuProvider } from 'react-native-popup-menu';
import { renderers } from 'react-native-popup-menu';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const { SlideInMenu } = renderers;
export default function Notelist({props,navigation}) { 

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

  const _renderItem = ({item,index}) => {
        return (
         
          <View style={{

              borderColor:'gray',
              borderRadius: 20,
              borderWidth:1,
              
              width: 270,
              height: 500,
              justifyContent:'center',
              alignItems:'center',
             
              marginLeft: 5,
              marginRight: 25,
              marginTop:50 }}>

           <ImageBackground style={{width:270,height:500}} source={require("../../assets/wall.jpg")} imageStyle={{borderRadius:20, borderWidth:1,}}>
             <Menu renderer={SlideInMenu} style={{alignItems:'flex-end'}} >
             <MenuTrigger style={{borderColor:'white',height:30,width:45}}>
             <Ionicons name="ellipsis-horizontal-outline" size={35} style={{color:'white',marginRight:15,left:0,bottom:0,width:35}}/>
             </MenuTrigger>
      
             <MenuOptions optionsContainerStyle={{borderWidth:2,borderColor:'black',borderRadius:30,justifyContent:'center',alignItems:'center',marginLeft:30,marginRight:30}}>
                 <MenuOption onSelect={() => alert(`수정`)}  >
                 <Text style={{textAlign:'center',fontSize:25,color:'gray',alignItems:'center',borderWidth:2,borderRadius:15,width:300}}>페이지 수정</Text>
               
                 </MenuOption>
                 <MenuOption onSelect={() => alert(`삭제`)}>
                 <Text style={{textAlign:'center',fontSize:25,color:'gray',borderWidth:2,borderRadius:15,width:300}}>페이지 삭제</Text>
                 </MenuOption>
      
           </MenuOptions>
           </Menu>

            <View style={{flexDirection:'row',justifyContent:'center',marginTop:30}}>

              <View>
              <Text style={{fontSize:20,color:'white',fontWeight:'bold',textAlign:'center',marginRight:10}}>제목</Text>
              </View>

              <View>
              <Text style={{fontSize:20,color:'white'}}>*</Text>
              </View>

              <View>
              <Text style={{fontSize:15,color:'white',marginLeft:10}}>2023-04-07</Text>

              </View>
            </View>

            <Image style={{width:270,height:3,marginTop:20}} source={require("../../assets/straight.png")} imageStyle={{borderRadius:20, borderWidth:1,}}/>
            <Image style={{width:270,height:130,justifyContent:'center',alignItems:'center'}} source={{ uri: 'https://picsum.photos/703' }}/>
            <Image style={{width:270,height:3}} source={require("../../assets/straight.png")} imageStyle={{borderRadius:20, borderWidth:1,}}/>

            <ScrollView style={{marginTop:10,marginBottom:10}}>
            <Text style={{justifyContent:'center',alignItems:'center',textAlign:'center',color:'#D4F4FA'}}>내용</Text>
            </ScrollView>

            </ImageBackground>

          </View>

        )
    }
      return (
          <MenuProvider>
          <SafeAreaView style={{flex: 1, backgroundColor:'white'}}>
        
                <Carousel
                layout={'default'} 
                loop={true}
                data={state.carouselItems}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                renderItem={_renderItem}
                />

          <TouchableOpacity onPress = {() => navigation.navigate('PagePost')} style={{
            alignSelf: 'flex-end',
            position: 'relative',
            bottom: 40,
            right:0,
            flexDirection:'row',
            marginRight:10,
            }}>

          <Ionicons name="reader-outline" size={35} style={{color:'#ffa7a7'}}/>
          <Text style={{top:12,fontWeight: "bold",color:'#ffa7a7'}}>페이지 추가</Text>
          </TouchableOpacity>
          </SafeAreaView>
          </MenuProvider>
          
        );
  
}
