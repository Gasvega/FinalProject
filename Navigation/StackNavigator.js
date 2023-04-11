
import React,{useEffect} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity} from 'react-native';
import Home from "../TabComponent/Home";
import Profile from "../TabComponent/Profile";
import Search from "../TabComponent/Search";
import FolderPostinglist from '../Function/FolderPostinglist';
import FolderPost from '../Post/FolderPost';
import QuestionPost from '../Post/QuestionPost';
import EditProfile from "../Function/EditProfile";
import { Ionicons } from '@expo/vector-icons';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Message from "../SwipeComponent/Message";
import PagePostinglist from "../Function/PagePostinglist";
import CreateNote from '../Function/CreateNote';
import CreateFolder from '../Function/CreateFolder';
import PagePost from '../Post/PagePost';
import Notification from '../TabComponent/Notification';
import Note from '../TabComponent/Note';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useState } from 'react';
import { firebase } from "../../firebase";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerShown: false,
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const DrawerNaviHome = ({navigation}) => {

const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeStackNavigator" 
      component={HomeStackNavigator} 
      options={{
        title:'홈',

        headerRight : () => (
          <TouchableOpacity onPress={() => navigation.navigate('Message')}>
          <Ionicons name="paper-plane-outline" size={28} style={{marginRight:10,color:'white'}}/>
         </TouchableOpacity>
        ),
        title: 'BABY',
        // Header 블록에 대한 스타일
        headerStyle: { 
          backgroundColor: '#FFD8D8',
        },
        // Header의 텍스트, 버튼 색상
        headerTintColor: '#ffffff',
        // 타이틀 텍스트의 스타일
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
        
      }}
      />
   
    </Drawer.Navigator>
  );
}


const DrawerNaviSearch = ({navigation}) => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="SearchStackNavigator" 
      component={SearchStackNavigator} 
      options={{
        
        title: 'BABY',
        // Header 블록에 대한 스타일
        headerStyle: { 
          backgroundColor: '#FFD8D8',
        },
        // Header의 텍스트, 버튼 색상
        headerTintColor: '#ffffff',
        // 타이틀 텍스트의 스타일
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          
        },
        
      }}
      />
   
    </Drawer.Navigator>
  );
}


const DrawerNaviProfile = ({navigation}) => {
  const Drawer = createDrawerNavigator();

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUser("", (user) => {
      console.log("user: ", user);
      setUser(user);
  
    });
  }, []);

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

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="ProfileStackNavigator" 
      component={ProfileStackNavigator} 
      options={{
        
        headerRight : () => (
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile', {user: user,
            navigation,})}>
          <Ionicons name="create-outline" size={28} style={{marginRight:10,color:'white'}}>

        </Ionicons>
         </TouchableOpacity>
        ),
        title: 'BABY',
        // Header 블록에 대한 스타일
        headerStyle: { 
          backgroundColor: '#FFD8D8',
        },
        // Header의 텍스트, 버튼 색상
        headerTintColor: '#ffffff',
        // 타이틀 텍스트의 스타일
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          
        },
        
      }}
      />
   
    </Drawer.Navigator>
  );
}

const DrawerNaviNote = () => {
const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="NoteStackNavigator" 
      component={NoteStackNavigator} 
      options={{
        
        title: 'BABY',
        // Header 블록에 대한 스타일
        headerStyle: { 
          backgroundColor: '#FFD8D8',
        },
        // Header의 텍스트, 버튼 색상
        headerTintColor: '#ffffff',
        // 타이틀 텍스트의 스타일
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          
        },
        
      }}
      />
   
    </Drawer.Navigator>
  );
}




const DrawerHome = ({route,navigation}) => {
  useEffect(() => {
  const routeName = getFocusedRouteNameFromRoute(route)

  
  }, [route]);

  return (
    <Stack.Navigator initialRouteName="drawerNaviHome" screenOptions={screenOptionStyle}>
      <Stack.Screen name="DrawerNaviHome" component={DrawerNaviHome} 
       />
       <Stack.Screen name="QuestionPost" component={QuestionPost} 
        
       options={{
        title:'질문글 작성',
        headerBackTitle:'홈',
        
        headerShown:false,
        headerRight : () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>  
      
          
        <Ionicons name="checkmark-outline" size={40} style={{color:'#000000'}}/>
      
         
          </TouchableOpacity>
        )
       
       }}/>
          <Stack.Screen name="Message" component={Message}
           

          
           options={{
            headerStyle: {
              backgroundColor: '#ffa7a7',
            },
            
            title:'메세지',
            headerBackTitle:'홈',
            
            
           headerShown:'true'}}/>
    </Stack.Navigator>
  );
}

const DrawerSearch = (props) => {
  
  return (
    <Stack.Navigator initialRouteName="DrawerNaviSearch" screenOptions={screenOptionStyle}>
      <Stack.Screen name="DrawerNaviSearch" component={DrawerNaviSearch}/>
    </Stack.Navigator>
  );
}

const DrawerProfile = ({navigation}) => {
  
  return (
    <Stack.Navigator initialRouteName="DrawerNaviProfile" screenOptions={screenOptionStyle}>
      <Stack.Screen name="DrawerNaviProfile" component={DrawerNaviProfile}/>
       <Stack.Screen name="CreateFolder" component={CreateFolder} 
        options={{
         title:'폴더 추가',
         headerBackTitle:'홈',
         headerShown:false,
         headerRight : () => (
           <TouchableOpacity onPress={() => navigation.navigate('Profile')}>  
           <Ionicons name="checkmark-outline" size={40} style={{color:'#000000'}}/>
           </TouchableOpacity>
         )
        
        }}/>

     <Stack.Screen name="EditProfile" component={EditProfile}
       options={{headerShown:'true',title:'프로필 수정',
       headerBackTitle:'프로필'}}/>

<Stack.Screen name="FolderPost" component={FolderPost}
       options={{headerShown:false,title:'글 작성'}}/>

     <Stack.Screen name="FolderPostinglist" component={FolderPostinglist}
     options={{headerShown:'true',title:'폴더 글 리스트',
     headerBackTitle:'프로필'}}/>

    </Stack.Navigator>
  );
}


const DrawerNote = (props) => {
  return (
    <Stack.Navigator initialRouteName="DrawerNaviNote" screenOptions={screenOptionStyle}>
      <Stack.Screen name="DrawerNaviNote" component={DrawerNaviNote}/>
  
      <Stack.Screen name="PagePostinglist" component={PagePostinglist}
      options={{headerShown:'true',title:'페이지 리스트',
      headerBackTitle:'수첩'}}/>
 
      <Stack.Screen name="CreateNote" component={CreateNote}
      options={{headerShown:false}}/> 

      <Stack.Screen name="PagePost" component={PagePost}
      options={{headerShown:false}}/> 
      
     </Stack.Navigator>
  );
}


const HomeStackNavigator = ({navigation, route}) => {
  
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  );
}

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}

const ProfileStackNavigator = ({ navigation } ) => {
  return (
    <Stack.Navigator initialRouteName="Profile" screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Profile} 

       options={{
        headerShown:false,
        headerLeft : () => (
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>  
          <Ionicons name="arrow-back-outline" size={40} style={{color:'#FFFFFF'}}/>
          </TouchableOpacity>
        )
       }}/>

    </Stack.Navigator>
  );
}

const NotificationStackNavigator = ({navigation, route}) => {
  
  return (
    <Stack.Navigator initialRouteName="Notification" screenOptions={screenOptionStyle}>
      <Stack.Screen name="Notification" component={Notification}
      options={{
        headerStyle: {
          backgroundColor: '#ffa7a7',
        },
        
        title:'알림 사항',
        headerShown:'true'
      }}/>
    </Stack.Navigator>
  );
}

const NoteStackNavigator = ({navigation, route}) => {
  
  return (
    <Stack.Navigator initialRouteName="Note" screenOptions={screenOptionStyle}>
      <Stack.Screen name="Note" component={Note}/>
    </Stack.Navigator>
  );
}

export {HomeStackNavigator, SearchStackNavigator,ProfileStackNavigator,NoteStackNavigator,NotificationStackNavigator,DrawerHome,DrawerSearch,DrawerProfile,DrawerNote };
