import React, { useEffect } from "react";
import {
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  Button,
  Text,
  TextInput,
  Banner,
} from "react-native-paper";
import { firebase } from "../../firebase";
import styles from "./styles";

export default function Signup({ navigation }) {
  const [Name, setName] = React.useState("");
  const [securedpassword, setSecuredpassword] = React.useState(true);
  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [color, setColor] = React.useState("#9d9d9d");

  //SnackBar manage
  const [label, setLabel] = React.useState("");
  const [visible, setVisible] = React.useState(false);

  const onSignUp =  ( props ) => {
    if (Name == "" || Email == "" || Password == "") {
      setLabel("Please fill all the fields");
      setVisible(true);
    } else {
     
      firebase.auth().createUserWithEmailAndPassword(Email,Password)
        .then((props) => {
          firebase.auth().currentUser.sendEmailVerification();
          
       
          
          firebase.firestore().collection("users")
            .doc(firebase.auth().currentUser.uid)
            .set({
              name: Name,
              email: Email,
              id: firebase.auth().currentUser.uid,
              profilePicUrl: null,
              userName: "",
              introduce: "",
              postNum: 0,
              followerNum : 0,
              followingNum : 0
            })
            .then((props) => {
              navigation.navigate('Login')
            })
            .catch((error) => {
              console.log("Error writing document: ", error);
            });
        })
        .catch((error) => {
          console.log(error);
          setLabel(error.message);
          setVisible(true);
        });
    }
  };

  const eyeColor = () => {
    if (!securedpassword) {
      setColor("#9d9d9d");
    } else {
      setColor("#3d3d3d");
    }
  };
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 30, y: 0 }}
        contentContainerStyle={styles.authContainer}
        scrollEnabled={true}
      >
        <TextInput
          label="이름"
          
          value={Name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
          mode="outlined"
        />

        <TextInput
          label="이메일"
          value={Email}
          onChangeText={(text) => setEmail(text)}
          type="이메일"
          keyboardType="email-address"
          style={styles.input}
          mode="outlined"
        />

        <TextInput
          Password
          label="비밀번호"
          value={Password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          mode="outlined"
          secureTextEntry={securedpassword}
          right={
            <TextInput.Icon
              icon={"eye"}
              size={30}
              color={color}
              onPress={() => {
                setSecuredpassword(!securedpassword);
                eyeColor();
              }}
            />
          }
        />

        <Button style={styles.button} mode="contained" onPress={onSignUp}>
          회원 가입
        </Button>
        <Button
          uppercase={false}
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          로그인
        </Button>
        <Banner
          visible={visible}
          actions={[
            {
              label: "확인",
              onPress: () => setVisible(false),
            },
          ]}
          contentStyle={{
            backgroundColor: 'red',
            borderRadius: 9,
          }}
          style={{
            margin: 10,
            borderRadius: 9,
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 15, color: "#000" }}>{label}</Text>
        </Banner>
      </KeyboardAwareScrollView>
    </View>
  );
}
