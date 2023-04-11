import * as React from 'react';
import { useState } from "react";
import {
  Text, 
  View,
  SafeAreaView,TouchableOpacity,ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import {Card } from 'react-native-paper';
export default function Home({props,navigation}) { 
   
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

  
    const QCard = () => {
        return (
         

          <Card style={{ width: 400, }}>
          {/* <Card.Title title="질문" style={{ backgroundColor: '#9AC4F8', borderTopStartRadius: 10, borderTopEndRadius: 10,  }} titleStyle={{ color: 'white', fontSize: 25, marginTop: 18, fontWeight: 'bold' }} /> */}
          <Card.Content  >
            <Text style={{ fontWeight: 'bold', marginTop: 10, fontSize: 21 }} variant="titleLarge">제목</Text>
          </Card.Content>
          <Card.Content style={{ flexDirection: 'row' }} >
            <Text variant="bodyMedium" style={{ width: 280, marginTop: 10, fontSize: 18 }}>내용</Text>
            <Card.Cover style={{ marginBottom: 10, width: 100, height: 100 }} source={{ uri: 'https://picsum.photos/700' }} />
          </Card.Content>
          <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end' }}>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="thumbs-up-outline" size={20} style={{ color: '#9AC4F8', marginRight: 10 }} onPress={() => alert('좋아요')} />
              <Text style={{ marginRight: 10 }} variant="bodyMedium">0</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="share-outline" size={20} style={{ color: '#9AC4F8', marginRight: 10 }} />
              <Text variant="bodyMedium">0</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="eye-outline" size={20} style={{ color: '#9AC4F8', marginRight: 10 }} />
              <Text variant="bodyMedium">0</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="chatbubble-outline" size={20} style={{ color: '#9AC4F8', marginRight: 10 }} />
              <Text variant="bodyMedium">0</Text>
            </View>
          </Card.Content>
          <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', }}>
            <View>
              <Text variant="bodyMedium" style={{ fontSize: 16, marginLeft: 25 }}>작성자</Text>
            </View>
            <View>
              <Text variant="bodyMedium" style={{ marginRight: 37, fontSize: 18, }} >20xx.xx.xx</Text>
            </View>
          </Card.Content>
        </Card>
          )
      }

  const SCard = () => {
    return (
   

      <View >
      <Card style={{ width: 400 }}>
        {/* <Card.Title title="구독" style={{ color: '#9AC4F8', backgroundColor: '#9AC4F8', borderTopStartRadius: 10, borderTopEndRadius: 10, }} titleStyle={{ color: 'white', fontSize: 25, marginTop: 15, fontWeight: 'bold' }} /> */}
        <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 10 }} >
          <Text style={{ fontWeight: 'bold', marginTop: 10, fontSize: 21, }} variant="titleLarge">제목</Text>
        </Card.Content>
        <Card.Content style={{ flexDirection: 'row' }} >
          <Text variant="bodyMedium" style={{ width: 230,  fontSize: 18 }}>내용</Text>
          <Card.Cover style={{ marginBottom: 10, width: 140, height: 200 }} source={{ uri: 'https://picsum.photos/700' }} />
        </Card.Content>
        <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end', margintop: 5, marginBottom: 5 }} >


          <View style={{ flexDirection: 'row' }}>
            <Ionicons name="thumbs-up-outline" size={20} style={{ color: '#9AC4F8', marginRight: 10 }} onPress={() => alert('좋아요')} />
            <Text style={{ marginRight: 10 }} variant="bodyMedium">0</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Ionicons name="share-outline" size={20} style={{ color: '#9AC4F8', marginRight: 10 }} />
            <Text variant="bodyMedium">0</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Ionicons name="eye-outline" size={20} style={{ color: '#9AC4F8', marginRight: 10 }} />
            <Text variant="bodyMedium" >0</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Ionicons name="bookmark-outline" size={20} style={{ color: '#9AC4F8', marginRight: 10 }} onPress={() => alert('스크랩')} />
          </View>
        </Card.Content>
        <Card.Content style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', }}>
          <View>
            <Text variant="bodyMedium" style={{ fontSize: 16, marginLeft: 25 }}>작성자</Text>
          </View>
          <View>
            <Text variant="bodyMedium" style={{ marginRight: 37, fontSize: 18, }} >20xx.xx.xx</Text>
          </View>
        </Card.Content>
      </Card>
    </View>
       
      )

  }
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);


const Qlogding = ( ) => {
    setLoading(true);
    setTimeout(() => {
      
      setLoading(false);
    }, 500);
   }

const Slogding = ( ) => {
    setLoading2(true);
    setTimeout(() => {
      
      setLoading2(false);
    }, 500);
   }

        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'white'}}>
            <View>
              <Text style={{ marginLeft: 50, fontSize: 25, marginTop: 18, fontWeight: 'bold' }}> 질문 </Text>
            </View>
            <View style={{ flex: 1.3, alignItems:'center', paddingTop:10}}>
                <Carousel
                  layout={'default'}
                  data={state.carouselItems}
                  sliderWidth={400}
                  itemWidth={400}
                  renderItem={QCard}
                  onMomentumScrollBegin={() => Qlogding()}
                  onEndReachedThreshold={0}
                  ListFooterComponent={loading && <ActivityIndicator style={{height:230,marginLeft:10}} size="small" color="#000000"/>}
                 
             />
                  
            </View>
            <View style={{paddingBottom:5}}>
            </View>
            <View>
              <Text style={{ marginLeft: 50, marginBottom: 10, fontSize: 25, marginTop: 18, fontWeight: 'bold' }} > 구독 </Text>
            </View>
            <View style={{ flex: 2, alignItems:'center'}}>
                <Carousel
                  layout={'default'}
                  inactiveSlideShift={0}
                  data={state.carouselItems}
                  sliderWidth={400}
                  itemWidth={400}
                  renderItem={SCard}
                  onMomentumScrollBegin={() => Slogding()}
                  onEndReachedThreshold={0}
                  ListFooterComponent={loading2 && <ActivityIndicator style={{height:270,marginLeft:10}} size="small" color="#000000"/>}
                  />
            </View>
            <View style={{
                         borderStyle: 'solid',
                         width:110,
                         alignSelf: 'flex-end',
                         marginRight:10,
                         }}>
              <TouchableOpacity onPress = {() => navigation.navigate('QuestionPost')} style={{
                bottom: 10,
                right:0,
                flexDirection:'row'
                }}>
              <Ionicons name="help-circle-outline" size={35} style={{color:'#ffa7a7'}}/>
              <Text style={{top:12,fontWeight: "bold",color:'#ffa7a7'}}>질문 글쓰기</Text>
              </TouchableOpacity>
           </View>
          </SafeAreaView>
      
        );
            }
