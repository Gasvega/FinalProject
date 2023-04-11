import * as React from "react";
import { Text, View, Image,Dimensions,TouchableOpacity,ImageBackground } from "react-native";
import { interpolate } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from "expo-blur";
import { MenuProvider } from 'react-native-popup-menu';
import { renderers } from 'react-native-popup-menu';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
const { SlideInMenu } = renderers;
function Folderlist( {navigation}) {

  const SLIDER_WIDTH = Dimensions.get('window').width;
  const SLIDER_HEIGHT= Dimensions.get('window').height;
  const headerHeight = 100;
  const scale = 0.9;

  const RIGHT_OFFSET = SLIDER_WIDTH * (1 - scale);

  const ITEM_WIDTH = SLIDER_WIDTH * scale;
  const ITEM_HEIGHT = 120;

  const PAGE_HEIGHT = SLIDER_HEIGHT - headerHeight;
  const PAGE_WIDTH = SLIDER_WIDTH;

  const animationStyle = React.useCallback(
    (value) => {
      "worklet";

      const translateY = interpolate(
        value,
        [-1, 0, 1],
        [-ITEM_HEIGHT, 0, ITEM_HEIGHT],
      );
      const right = interpolate(
        value,
        [-1, -0.2, 1],
        [RIGHT_OFFSET / 2, RIGHT_OFFSET, RIGHT_OFFSET / 3],
      );
      return {
        transform: [{ translateY }],
        right,
      };
    },
    [RIGHT_OFFSET],
  );

  return (
    <MenuProvider>

   
    <View style={{ flex: 1 }}>
 
      <Image
        source={require("../../assets/wall.jpg")} 
        style={{
         
          width: PAGE_WIDTH,
          height: PAGE_HEIGHT +100,
          position: "absolute",
        }}
      />
      
      <BlurView
        intensity={80}
        tint="dark"
        style={{
          width: PAGE_WIDTH,
          height: PAGE_HEIGHT +100,
          position: "absolute",
        }}
      />
      <Carousel
        loop
        vertical
        style={{
          justifyContent: "center",
          width: PAGE_WIDTH,
          height: PAGE_HEIGHT+100,
        }}
        width={ITEM_WIDTH}
        pagingEnabled={false}
        height={ITEM_HEIGHT }
        data={[...new Array(10).keys()]}
        renderItem={({ index }) => {
          return (
            <View key={index} style={{ flex: 1, padding: 10 }}>
              <View
                style={{
                  alignItems: "flex-start",
                  flex: 1,
                  justifyContent: "space-between",
                  flexDirection: "row",
                  borderRadius: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                 
                </View>
                <View
                  style={{
                    width: ITEM_WIDTH * 0.8,
                    height: ITEM_HEIGHT + 30,
                    borderRadius: 10,
                    overflow: "hidden",
                  }}
                >

                  <TouchableOpacity>
                  
                  <ImageBackground
                    style={{
                      
                      width: ITEM_WIDTH * 0.6,
                      height: ITEM_HEIGHT - 40,

                      marginRight: 5,
                      marginBottom:10,
                      
                    }}
                    imageStyle={{borderRadius: 10}}
                    
                            source={{ url: "https://cdn.pixabay.com/photo/2018/11/29/21/19/hamburg-3846525__480.jpg" }} 


                  >
                  <Menu renderer={SlideInMenu} style={{alignItems:'flex-end'}} >
                  <MenuTrigger style={{borderColor:'white',height:30,width:45}}>
                  <Ionicons name="ellipsis-horizontal-outline" size={35} style={{color:'white',marginRight:15,left:0,bottom:0,width:35}}>
        
                  </Ionicons>
                  </MenuTrigger>
      
                  <MenuOptions optionsContainerStyle={{borderWidth:2,borderColor:'black',borderRadius:30,justifyContent:'center',alignItems:'center',marginLeft:30,marginRight:30}}>
                 <MenuOption onSelect={() => alert(`수정`)}  >
                 <Text style={{textAlign:'center',fontSize:25,color:'gray',alignItems:'center',borderWidth:2,borderRadius:15,width:300}}>글 수정</Text>
               
                 </MenuOption>
                 <MenuOption onSelect={() => alert(`삭제`)}>
                 <Text style={{textAlign:'center',fontSize:25,color:'gray',borderWidth:2,borderRadius:15,width:300}}>글 삭제</Text>
                 </MenuOption>
                  </MenuOptions>
                  </Menu>

                  </ImageBackground>

                  <View style={{flexDirection:'row'}}>

                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 10,
                      marginRight: 5,
                     
                    }}
                    source={{ url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbGphB3RVOS3y0ZKN3ipGrX0bNZzFhzkY9ew&usqp=CAU" }} 
                  />
                  <Text
                    numberOfLines={1}
                    style={{
                      maxWidth: ITEM_WIDTH * 0.3 + 40,
                      color: "white",
                    }}
                  >
                    제목 
                  </Text>

                  <Text
                    numberOfLines={1}
                    style={{
                      marginLeft:10,
                      marginRight:10,
                      maxWidth: ITEM_WIDTH * 0.3 + 40,
                      color: "white",
                    }}
                  >
                   *
                   </Text>
                  <Text
                    numberOfLines={1}
                    style={{
                      maxWidth: ITEM_WIDTH * 0.3 + 40,
                      color: "white",
                    }}
                  >
                    2023-04-07
                  </Text>

                  </View>
                  </TouchableOpacity>

                
                </View>
              </View>
            </View>
          );
        }}
        customAnimation={animationStyle}
      />
      <TouchableOpacity onPress = {() => navigation.navigate('FolderPost')} style={{
           
            bottom:210,
            left:280,
            
            flexDirection:'row',
            marginRight:10,
            }}>

          <Ionicons name="pencil-outline" size={35} style={{color:'#ffa7a7'}}/>

          <Text style={{top:12,fontWeight: "bold",color:'#ffa7a7'}}>글 쓰기</Text>

          </TouchableOpacity>
      </View>
      </MenuProvider>
  );
}

export default Folderlist;