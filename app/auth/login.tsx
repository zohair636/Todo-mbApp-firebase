import { View, Text } from "react-native";
import React from "react";
import LoginForm from "@/components/Forms/LoginForm";
import { HeadingText } from "@/global/text";
import { authStyle } from "@/stylesheet/authStyle";
import { appColor } from "@/global/color";

const LoginScreen = () => {
  return (
    <View style={authStyle.container}>
      <Text style={authStyle.mainHeading}>{HeadingText.auth.LOGIN}</Text>
      <Text style={authStyle.subHeading}>{HeadingText.auth.LOGIN_SUB_HEADING}</Text>
      <LoginForm />
    </View>
  );
};

export default LoginScreen;
