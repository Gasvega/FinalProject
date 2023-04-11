
import { StyleSheet,Image} from 'react-native';

import {DrawerHome,DrawerProfile,DrawerSearch,DrawerNote,NotificationStackNavigator} from "./StackNavigator"

import React, { useState,useEffect } from "react";
import 'react-native-gesture-handler';
import {Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import { firebase } from "../../firebase";
const Tab = createBottomTabNavigator();


export default function TabNavi({navigation, route}) {
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
     
      <Tab.Navigator tabBarPosition="bottom"  screenOptions={({ route, navigation }) => ({
        headerShown:false,
        tabBarActiveTintColor: "#29b6f6",
        tabBarInactiveTintColor: "#262626",
        tabBarStyle: {
          borderTopWidth: 0.2,
          borderColor: "#000",
        },
        tabBarIndicatorStyle: {
          height: 0,
        },
       })}
      >
      <Tab.Screen name="홈" component={DrawerHome} 
       options={({ route }) => ({
        tabBarStyle: ((route) => {
          const routeName = getFocusedRouteNameFromRoute(route)
          if (routeName == 'Folderpost') {
            return { display: "none" }
          }
          
        })(route),

        tabBarIcon: ({ focused, color }) => (
          focused ? (
          <Ionicons name="ios-home" size={25}/>
          ): 
          (
          <Ionicons name="ios-home-outline" size={25}/>
          )
        )
      })}
    

      />
      <Tab.Screen name="검색" component={DrawerSearch}
       options={{
      
        tabBarIcon: ({ focused, color }) => (
         
          focused ? (
          <Ionicons name="ios-search" size={25}/>
          ): 
          (
          <Ionicons name="ios-search-outline" size={25}/>
          )
        ),
    }} />
    <Tab.Screen name= "　" component={DrawerProfile}
     
        options={({ route }) => ({

          tabBarIcon: () => (
            <Image 
            source={
              user?.profilePicUrl
                ? { uri: user?.profilePicUrl }
                : require("../../assets/default.png")
            }
            style={{ height:60, width:60,borderRadius:37.5}} />
          ),
           })} />
    <Tab.Screen name= "알림" component={NotificationStackNavigator}
       options={{
        tabBarIcon: ({ focused, color }) => (
          focused ? (
          <Ionicons name="notifications" size={25}/>
          ): 
          (
          <Ionicons name="notifications-outline" size={25}/>
          )
        ),
    }} />
    <Tab.Screen name="수첩" component={DrawerNote}
       options={{
       
        tabBarIcon: ({ focused, color }) => (
          focused ? (
          <Ionicons name="book" size={25}/>
          ): 
          (
          <Ionicons name="book-outline" size={25}/>
          )
        ),
    }} />
   
    </Tab.Navigator>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
