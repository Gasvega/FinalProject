import React from "react";
import { View, Text} from "react-native";
import { Button } from "react-native-paper";
import styles from "./styles";
const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.logoContainer}>
     
      
        <Text style={{ fontSize: 40 ,color:'pink'}}>BABY</Text>
      </View>
      <Text style={styles.loginText}>이미 계정이 있습니까?</Text>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => navigation.navigate("Login")}
      >
        로그인
      </Button>
      <Text style={styles.loginText}>Or</Text>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => navigation.navigate("Signup")}
      >
        회원가입
      </Button>
    </View>
  );
};

export default Landing;
