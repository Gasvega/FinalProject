import React from "react";
import { View } from "react-native";
import { Button, Text, TextInput, Banner} from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
import {firebase } from "../../firebase";

export default function Login({ navigation }) {
  const [label, setLabel] = React.useState("");
  const [visible, setVisible] = React.useState(false);

  const [securedpassword, setSecuredpassword] = React.useState(true);
  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [color, setColor] = React.useState("#9d9d9d");
  const onSignin = () => {
    firebase.auth()
      .signInWithEmailAndPassword(Email, Password)
      .then((result) => {
        
      })
      .catch((error) => {
        console.log(error);
        setLabel(error.message);
        setVisible(true);
      });
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
          label="이메일"
          style={styles.input}
          value={Email}
          onChangeText={(text) => setEmail(text)}
          type="이메일"
          keyboardType="email-address"
          mode="outlined"
        />

        <TextInput
          Password
          label="비밀번호"
          style={styles.input}
          value={Password}
          onChangeText={(text) => setPassword(text)}
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

        <Button style={styles.button} mode="contained" onPress={onSignin}>
          로그인
        </Button>
        <Button
          uppercase={false}
          style={styles.button}
          onPress={() => navigation.navigate("ForgotPW")}
        >
          비밀번호 찾기
        </Button>
        <Button
          uppercase={false}
          style={styles.button}
          onPress={() => navigation.navigate("Signup")}
        >
          회원 가입
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
