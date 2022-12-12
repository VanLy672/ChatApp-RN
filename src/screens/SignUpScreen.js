import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { auth, db } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import SignStyles from "../styles/SignStyles";
const SignUpScreen = ({ navigation }) => {
  const initialState = {
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  };
  const [userInfo, setuserInfo] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const handleChange = (e, name) => {
    setuserInfo((prevState) => ({
      ...prevState,
      [name]: e,
    }));
  };
  const submitUser = async () => {
    handleSignUp(userInfo);
    //const jsonValue = JSON.stringify(userInfo);
    //await AsyncStorage.setItem('@user', jsonValue);
    //getUser();
  };

  const handleSignUp = (data) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, data.email, data.password).then(
      async (response) => {
        await setDoc(doc(db, `users`, response.user.uid), {
          email: response.user.email,
          photoURL: "",
          id: response.user.uid,
          firstName: data.firstName,
          lastName: data.lastName,
        });
        setLoading(false);
        alert("Account Created");
        navigation.navigate("SignIn");
      }
    );
  };

  return (
    <View style={SignStyles.container}>
      {loading && <ActivityIndicator size="large" style={SignStyles.loading} />}
      <Text style={SignStyles.APPtitle}>lyvippro</Text>
      <Text style={SignStyles.title}>SIGN UP</Text>
      <TextInput
        style={SignStyles.textInput}
        placeholder="Firstname"
        value={userInfo?.firstName}
        onChangeText={(e) => handleChange(e, "firstName")}
      />
      <TextInput
        style={SignStyles.textInput}
        placeholder="Lastname"
        value={userInfo?.lastName}
        onChangeText={(e) => handleChange(e, "lastName")}
      />
      <TextInput
        style={SignStyles.textInput}
        placeholder="Email"
        value={userInfo?.email}
        onChangeText={(e) => handleChange(e, "email")}
      />
      <TextInput
        style={SignStyles.textInput}
        placeholder="Password"
        secureTextEntry
        value={userInfo?.password}
        onChangeText={(e) => handleChange(e, "password")}
      />
      <TextInput
        style={SignStyles.textInput}
        placeholder="Confirm Password"
        secureTextEntry
        value={userInfo?.confirmPassword}
        onChangeText={(e) => handleChange(e, "confirmPassword")}
      />
      <TouchableOpacity
        style={{
          ...SignStyles.submitbutton,
          ...(loading ? SignStyles.disableButton : SignStyles.enableButton),
        }}
        onPress={submitUser}
        disabled={loading}
      >
        <Text style={SignStyles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
      <Text style={SignStyles.askText}>Already have an account?</Text>
      <TouchableOpacity
        disabled={loading}
        style={{
          ...SignStyles.submitbutton,
          ...(loading ? SignStyles.disableButton : SignStyles.enableButton),
        }}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={SignStyles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

