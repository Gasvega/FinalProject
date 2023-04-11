import React from "react";
import {View} from "react-native";
import { Button, TextInput, Snackbar } from "react-native-paper";
import styles from "./styles";
import { firebase } from "../../firebase";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export default function Login({ navigation }) {
  const [Email, setEmail] = React.useState("");
  const [label, setLabel] = React.useState("");

  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const onPasswordReset = () => {
    firebase.auth()
      .sendPasswordResetEmail(Email)
      .then((res) => {
        console.log(res);
        onToggleSnackBar();
        visible ? "Hide" : "Show";
        setLabel(`Reset password link has been sent to you email id: ${Email}`);
      })
      .catch((error) => {
        setLabel(error);
        onToggleSnackBar();
        visible ? "Hide" : "Show";
      });
  };
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 30, y: 0 }}
        contentContainerStyle={[styles.authContainer, { marginBottom: 50 }]}
        scrollEnabled={true}
      >
        <TextInput
          label="이메일"
          value={Email}
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          type="이메일"
          keyboardType="email-address"
          mode="outlined"
        />

        <Button
          style={styles.button}
          mode="contained"
          onPress={onPasswordReset}
        >
          찾기
        </Button>
      </KeyboardAwareScrollView>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Undo",
          onPress: () => {
            navigation.navigate("Login");
          },
        }}
      >
        {label}
      </Snackbar>
    </View>
  );
}
