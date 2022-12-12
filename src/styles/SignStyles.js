import { StyleSheet } from "react-native";

export default SignStyles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      flex: 1,
      paddingTop: 64,
    },
    APPtitle: {
      fontWeight: "800",
      fontSize: 24,
      color: "orange",
      textAlign: "center",
      textShadowRadius: 4,
      textShadowColor: "#33382c",
      marginBottom: 32,
    },
    title: {
      fontWeight: "800",
      fontSize: 24,
      color: "black",
      textAlign: "center",
      textShadowRadius: 4,
      textShadowColor: "#33382c",
      marginBottom: 32,
    },
    textInput: {
      backgroundColor: "white",
      color: "gray",
      fontSize: 12,
      borderRadius: 8,
      marginLeft: 32,
      marginRight: 32,
      marginBottom: 16,
      height: 40,
      padding: 8,
      borderColor: "orange",
      borderWidth: 1,
  
      fontWeight: "400",
    },
    submitbutton: {
      marginTop: 8,
      marginLeft: 32,
      marginRight: 32,
      backgroundColor: "orange",
      padding: 8,
      borderRadius: 8,
    },
    buttonText: {
      color: "white",
      fontWeight: "800",
      fontSize: 12,
      textAlign: "center",
    },
    askText: {
      marginTop: 64,
      textAlign: "center",
      color: "blue",
    },
    loading: {
      position: "absolute",
      alignSelf: "center",
      bottom: 152,
    },
    disableButton: {
      backgroundColor: "gray",
    },
    enableButton: {
      backgroundColor: "orange",
    },
  });
  