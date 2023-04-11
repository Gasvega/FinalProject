import React, { useState, useEffect } from "react";
import {
  View,
  Alert,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import {
  Button,
  Avatar,
  TextInput,
  IconButton,
} from "react-native-paper";

import styles from "./styles";
import * as ImagePicker from "expo-image-picker";
import { firebase } from "../../firebase";
import { getStorage, ref, getDownloadURL, uploadBytes, } from 'firebase/storage';

const EditProfile = (props) => {
  const { user } = props.route.params;
  const { navigation } = props;
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [bio, setBio] = useState(user?.introduce);
  const [image, setImage] = useState(user?.profilePicUrl);
  const [backImage, setbackImage] = useState(user?.backPicUrl);
  const [imageUrl, setImageUrl] = useState(null);
  const [userName, setUserName] = useState(user?.userName);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);

  const setUserData = async (userId, data) => {
    console.log("setUserData", userId, data);
    firebase.firestore().collection("users").doc(userId).update(data);
  };

  const updateProfile = async () => {
    if (name == "") {
      Alert.alert("Name is required");
      return;
    } else if (email == "") {
      Alert.alert("Email is required");
      return;
    } else {

      const childPath = `${user.id + Math.random().toString(36) + "dp"}`;

      const storage = getStorage();
      const fileRef = ref(storage, childPath);

      const responce = await fetch(image);
      const blob = await responce.blob();

      const response = await uploadBytes(fileRef, blob, {
        contentType: 'image/jpeg',
      });

      const imageset = await getDownloadURL(fileRef)
      var userData = {
        name: name,
        email: email,
        introduce: bio,
        userName: userName ? (userName.length > 0 ? userName : null) : null,
        profilePicUrl: image ? image : null,
        backPicUrl: backImage ? backImage : null,
      };
      setUserData(user.id, userData);

      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");
    })();
  }, []);

  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      // to add videos as well just alter this line
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.1,
    });
    if (!result.canceled) {

      uploadImage(result.assets[0].uri);
    }
  };

  const pickbackImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      // to add videos as well just alter this line
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [5, 2],
      quality: 0.1,
    });
    if (!result.canceled) {

      uploadbackImage(result.assets[0].uri);
    }
  };

  const uploadImage = async (puri) => {
    setImage(puri)
  };
  const uploadbackImage = async (buri) => {
    setbackImage(buri)
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <ImageBackground
          style={{ width: 410, height: 200, flexDirection: 'row', }}
          rasizMode="Cover"
          source={
            user?.backPicUrl
              ? { uri: user?.backPicUrl }
              : require("../../assets/wall.jpg")
          }>
          <View style={{ flex: 1, }}>
            <View style={{ height: 120, }}>
            </View>
            <View style={{ height: 90, backgroundColor: '#fff', borderTopWidth: 2, }}>
            </View>
          </View>
          <TouchableOpacity onPress={pickImage}>
          <View style={{ width: 90, marginTop: 80, borderTopEndRadius: 92, borderTopStartRadius: 92, backgroundColor: '#fff' }}>
            <View style={styles.userRaw}>
              <Avatar.Image
                size={100}
                source={
                  image
                    ? { uri: image }
                    : require("../../assets/defaultProfilePic.png")
                }
              />
              <IconButton
                icon="pencil"
                animated={true}
                style={styles.iconButton}
                size={22}
              />
            </View>
            <View style = {{ alignItems: 'center', width: 130, height: 28, marginTop: 10,backgroundColor: "#fff" }}>

            </View>
            </View>
          </TouchableOpacity>
          <View style={{ width: 30 }}>
            <View style={{ height: 120, }}>
            </View>
            <View style={{ height: 90, borderTopWidth: 2, backgroundColor: '#fff' }}>
            </View>
          </View>
        </ImageBackground>

        <View style = {{paddingHorizontal: 20,}}>
        <TextInput
          label="이름"
          mode="outlined"
          type="이름"
          keyboardType="default"
          value={name}
          onChangeText={(text) => {
            setName(text);
            console.log(name);
          }}
          style={styles.input}
        />

        <TextInput
          label="사용자 이름"
          value={userName}
          onChangeText={(text) => setUserName(text)}
          type="사용자 이름"
          keyboardType="default"
          style={styles.input}
          mode="outlined"
        />
        <TextInput
          label="이메일"
          value={email}
          onChangeText={(text) => setEmail(text)}
          type="이메일"
          keyboardType="email-address"
          style={styles.input}
          mode="outlined"
        />
        <TextInput
          label="소개"
          value={bio}
          multiline={true}
          onChangeText={(text) => setBio(text)}
          type="소개"
          keyboardType="default"
          style={styles.input}
          mode="outlined"
        />
        <Button mode="contained" style={styles.button} onPress={updateProfile}>
          완료
        </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfile;
