import React, { useEffect, useState } from "react";
import { MenuProvider } from 'react-native-popup-menu';
import { renderers } from 'react-native-popup-menu';
import { StickyHeaderScrollView } from 'react-native-simple-sticky-header';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuContext,
} from 'react-native-popup-menu';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  ImageBackground,
  Text, FlatList,
  Image, Dimensions
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Button } from "react-native-paper";
import { firebase } from "../../firebase";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const { SlideInMenu } = renderers;
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',

  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d732',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d742',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d743',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d744',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d745',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d746',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d747',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d748',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d749',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7410',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7411',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7412',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7413',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7414',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7415',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7416',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7417',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7418',

  },

];

const { width, height } = Dimensions.get('window');
const Folder = (props) => {
  const imagedata = props.imagedata
  return (

    <View key={props.item} style={{
      borderStyle: 'solid', borderWidth: 1, borderRadius: 30,
      margin: 10, shadowOpacity: '0.05', backgroundColor: 'white', shadowRadius: 10, shadowColor: 'black'
    }}>
      <TouchableOpacity onPress={() => props.navigation.navigate('FolderPostinglist')}>
        <ImageBackground source={{ url: "https://cdn.pixabay.com/photo/2018/11/24/02/05/lichterkette-3834926__480.jpg" }}
          style={{
            width: width / 2 - 20, height: 100,
            borderColor: 'gray',
          }}
          imageStyle={{ borderRadius: 30 }}>

          <Menu renderer={SlideInMenu} style={{ alignItems: 'flex-end' }} >
            <MenuTrigger style={{ borderColor: 'white', height: 30, width: 40 }}>
              <Ionicons name="ellipsis-horizontal-outline" size={25} style={{ color: 'white', marginRight: 12, alignItems: 'center' }} />
            </MenuTrigger>

            <MenuOptions optionsContainerStyle={{ borderWidth: 2, borderColor: 'black', borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginLeft: 30, marginRight: 30 }}>
              <MenuOption onSelect={() => alert(`수정`)}  >
                <Text style={{ textAlign: 'center', fontSize: 25, color: 'gray', alignItems: 'center', borderWidth: 2, borderRadius: 15, width: 300 }}>폴더 수정</Text>

              </MenuOption>
              <MenuOption onSelect={() => alert(`삭제`)}>
                <Text style={{ textAlign: 'center', fontSize: 25, color: 'gray', borderWidth: 2, borderRadius: 15, width: 300 }}>폴더 삭제</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>

        </ImageBackground>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', paddingTop: 1 }}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Image source={
            imagedata?.profilePicUrl
              ? { uri: imagedata?.profilePicUrl }
              : require("../../assets/defaultProfilePic.png")
          }
            style={{ width: 40, height: 40, borderRadius: 37.5 }} />
        </View>
        <View style={{ flex: 2 }}>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Text style={{ fontSize: 15, fontWeight: 'bold', paddingBottom: 5, textAlign: 'center' }}>제목</Text>
              <Text style={{ fontSize: 15, color: 'gray' }}>2023-03-28</Text>
            </View>
          </View>
        </View>
      </View>
    </View>

  )
}

const Scrap = (props) => {
  return (
    <View style={{ borderRadius: 1, borderWidth: 1 }}>
      <View key={props.item} style={{ width: 300, height: 100, flexDirection: 'row', marginBottom: 1 }} >
        <Image source={{ url: "https://cdn.pixabay.com/photo/2018/11/29/19/29/autumn-3846345__480.jpg" }} style={{ flex: 1, borderRadius: 20 }} />
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }} >제목</Text>
          <View style={{ flexDirection: 'row', padding: 20, justifyContent: 'space-around' }}>
            <Text>작성자 </Text>
            <Text>작성날짜</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
const Tab = createMaterialTopTabNavigator();
export default function Profile({ props, navigation }) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUser("", (user) => {
      setUser(user);

    });
  }, [navigation]);

  const fetchUser = (userId, callback) => {
    const id = firebase.auth().currentUser.uid;
    firebase.firestore().collection("users")
      .doc(id)
      .onSnapshot((snapshot) => {
        if (snapshot.exists) {
          callback(snapshot.data());
        } else {
          console.log("errors: snapshot not exist");
        }
      });
  };
  const [activeIndex, setactiveIndex] = useState(0);
  const FoldermakeButton = () => {
    if (activeIndex == 0) {
      return (
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('CreateFolder')} style=
            {{
              alignSelf: 'center',
              position: 'relative',
              bottom: -360,
              left: 120,
              flexDirection: 'row',
              marginRight: 10
            }}>
            <Ionicons name="folder-open-outline" size={35} style={{ color: '#ffa7a7' }} />
            <Text style={{ top: 12, fontWeight: "bold", color: '#ffa7a7' }}>폴더 추가</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }

  const Pagestate = (props) => {

    if (activeIndex == 0) {
      return (
        <View style={{ flex: 1 }}>
          <SafeAreaView>
            <FlatList
              scrollEnabled={false}
              data={DATA}
              renderItem={({ item }) =>
                <Folder imagedata={user} item={item} navigation={props.navigation} />
              }
              keyExtractor={item => item.id}
              numColumns={2}
              scrollEventThrottle={1}
              scrollToOverflowEnabled={true} />
          </SafeAreaView>
        </View>
      )
    }
    else {
      return (
        <View style={{ flex: 1 }}>
          <SafeAreaView>
            <FlatList
              scrollEnabled={false}
              data={DATA}
              renderItem={({ item }) =>
                <Scrap item={item} />
              }
              keyExtractor={item => item.id} />
          </SafeAreaView>
        </View>
      );
    }
  }

  const senmentClicked = (activeIndex) => {
    setactiveIndex(activeIndex)
  }

  return (
    <MenuProvider>

      <StickyHeaderScrollView
        top={() => (
          <View style={{ backgroundColor: 'white', borderWidth: 0, width: 410, height: 250, marginBottom: 10 }}>
            <View style={{ paddingHorizontal: 0, paddingVertical: 0 }}>
              <ImageBackground
                    style={{ width: 410, height: 200, flexDirection: 'row', }}
                    rasizMode = "Cover"
                    source={
                      user?.backPicUrl
                        ? { uri: user?.backPicUrl }
                        : require("../../assets/wall.jpg")
                    }>
                <View style={{ flex: 1, }}>
                  <View style={{ height: 120, }}>
                  </View>
                  <View style={{ height: 90, backgroundColor: '#fff', borderTopWidth: 2, }}>
                    {user?.introduce && user?.introduce != "" && (
                      <Text style={{ marginTop: 10, marginLeft: 20, fontSize: 19 }}>{user?.introduce}</Text>
                    )}
                    {/* <Text style={{ marginTop: 10, marginLeft: 20, fontSize: 20 }}>{user?.introduce}</Text> */}
                    {/* <Text style={{ marginTop: 10, marginLeft: 20, fontSize: 19 }}>exit is not detected</Text> */}
                  </View>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', width: 90, marginTop: 80, borderTopEndRadius: 92, borderTopStartRadius: 92, backgroundColor: '#fff' }}>
                  <Image source={
                    user?.profilePicUrl
                      ? { uri: user?.profilePicUrl }
                      : require("../../assets/defaultProfilePic.png")
                  }
                    style={{ width: 91, height: 91, borderRadius: 50000 }} />
                  <View style={{ alignItems: 'center', width: 130, height: 28, marginTop: 10, backgroundColor: '#fff' }}>
                    {user?.name && user?.name != "" && (
                      <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>{user?.name}</Text>
                    )}
                    {/* <Text style={{ fontWeight: 'bold', fontSize: 18, }}>{user?.userName}</Text> */}
                  </View>
                </View>
                <View style={{ width: 30 }}>
                  <View style={{ height: 120, }}>
                  </View>
                  <View style={{ height: 90, borderTopWidth: 2, backgroundColor: '#fff' }}>
                  </View>
                </View>
                </ImageBackground>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 10, marginBottom: 5 }}>

              <View style={{ flex: 3 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <View style={{ flexDirection: 'row', }}>
                    <Text style={{ fontSize: 15, color: 'gray' }}>게시물  </Text>
                    <Text style={{ fontSize: 15, }}>{user?.postNum}   </Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 15, color: 'gray' }}>팔로워  </Text>
                    <Text style={{ fontSize: 15, }}>{user?.followerNum}   </Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 15, color: 'gray' }}>팔로잉  </Text>
                    <Text style={{ fontSize: 15 }}>{user?.followingNum}   </Text>
                  </View>
                </View>
              </View>
            </View>

          </View>
        )}
        bottom={() => (

          <View style={{ height: 35, bottom: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: 350, height: 40, borderWidth: 1, borderRadius: 30 }}>
              <Button onPress={() => senmentClicked(0)}>
                <Ionicons name="ios-apps" size={20}
                  style={[activeIndex === 0 ? {} : { color: 'grey', textDecorationLine: 'underline' }]} />
              </Button>
              <Button onPress={() => senmentClicked(1)}>
                <Ionicons name="ios-bookmark" size={20}
                  style={[activeIndex === 1 ? {} : { color: 'grey', textDecorationLine: 'underline' }]} />

              </Button>
            </View>
            <FoldermakeButton />
          </View>

        )}>
        <Pagestate user={user} navigation={navigation} />
      </StickyHeaderScrollView>

    </MenuProvider>
  );
};

