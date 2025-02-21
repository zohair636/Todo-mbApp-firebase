import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import RegisterForm from "@/components/Forms/RegisterForm";
import { HeadingText } from "@/global/text";
import { authStyle } from "@/stylesheet/authStyle";
import { appColor } from "@/global/color";

const RegisterScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: appColor.primary,
      }}
    >
      <View style={authStyle.container}>
        <Text style={authStyle.mainHeading}>{HeadingText.auth.REGISTER}</Text>
        <Text style={authStyle.subHeading}>
          {HeadingText.auth.REGISTER_SUB_HEADING}
        </Text>
        <RegisterForm />
      </View>
    </View>
  );
};

export default RegisterScreen;
