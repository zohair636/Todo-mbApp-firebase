import { View, Text } from "react-native";
import React from "react";
import { appColor } from "@/global/color";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack
      // initialRouteName="auth/login"
      screenOptions={{
        headerShown: false,
        statusBarBackgroundColor: appColor.black,
      }}
    >
      <View style={{ backgroundColor: appColor.purple_800 }}>
        <Stack.Screen name="auth/register" />
        <Stack.Screen name="auth/login" />
        <Stack.Screen name="auth/forgotPassword" />
      </View>
    </Stack>
  );
};

export default AuthLayout;
