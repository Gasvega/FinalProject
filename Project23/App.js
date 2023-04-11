
import React, { useState,useEffect } from "react";
import { StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavi from './component/Navigation/TabNavi';
import Landing from "./component/Auth/Landing";
import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import ForgotPW from "./component/Auth/ForgotPW";
import Signup from "./component/Auth/Register";
import { firebase } from "./firebase";
const Stack = createStackNavigator();


export default function App() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setLogin(false);
      } else {
        setLogin(true);
      }
    });
  }, []);

  if(!login)
  {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing'>
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{
            title:'홈' ,
            headerShown: false,
          }}
        />
        <Stack.Screen
          options={{ headerLargeTitle: true,
            title:'로그인' }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerLargeTitle: true,
            title:'회원 가입'  }}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          options={{ headerLargeTitle: true,
            title:'회원 등록'  }}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          name="ForgotPW"
          component={ForgotPW}
          options={{
            headerShown: true,
            title: "비밀번호 찾기",
            headerLargeTitle: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
  else
  {
    return (
      <NavigationContainer>
       <TabNavi/>
      </NavigationContainer>
    )
  }
}

