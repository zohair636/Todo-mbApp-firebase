import { View, Text, TextInput, Pressable } from "react-native";
import React, { Fragment, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { LoginData } from "@/global/type";
import { LoginHelperFunction } from "@/helpers/AuthHelper";
import AuthButton from "../Buttons/AuthButton";
import { ButtonText } from "@/global/text";
import { authStyle } from "@/stylesheet/authStyle";
import { appColor } from "@/global/color";
import { buttonStyle } from "@/stylesheet/buttonStyle";
import { router } from "expo-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email("Please enter valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const userLogin = LoginHelperFunction(showPassword);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = (data: LoginData) => {
    console.log(data);
  };

  return (
    <View style={authStyle.formContainer}>
      {userLogin.map((item) => (
        <View key={item.register} style={{ marginVertical: 2 }}>
          <Text style={authStyle.inputLabel}>{item.label}</Text>
          <Controller
            name={item.register as "email" | "password"}
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={authStyle.inputContainer}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View>{item.icon}</View>
                  <TextInput
                    placeholder={item.placeholder}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={authStyle.input}
                    placeholderTextColor={appColor.secondary}
                    // keyboardType={item.type}
                    secureTextEntry={item.secureEntry}
                  />
                </View>
                <Pressable onPress={handleShowPassword}>
                  {item.password_icon}
                </Pressable>
              </View>
            )}
          />
          {errors[item.register as "email" | "password"] && (
            <Text style={authStyle.error}>
              {errors[item.register as "email" | "password"]?.message}
            </Text>
          )}
        </View>
      ))}
      {/* forgot password button */}
      <AuthButton
        label={ButtonText.FORGOT_PASSWORD_FOLLOW_ON}
        isLoading={false}
        onPress={() => router.push("/auth/forgotPassword")}
        style={{
          ...buttonStyle.authButton,
          textAlign: "right",
          marginVertical: 4,
        }}
      />
      {/* login button */}
      <AuthButton
        label={ButtonText.LOGIN}
        isLoading={false}
        onPress={handleSubmit(onSubmit)}
        containerStyle={buttonStyle.authButtonContainer}
        style={buttonStyle.authButton}
      />
      {/* register button */}
      <AuthButton
        label={ButtonText.REGISTER_FOLLOW_ON}
        isLoading={false}
        onPress={() => router.push("/auth/register")}
        style={{
          ...buttonStyle.authButton,
          textAlign: "center",
          marginTop: 10,
        }}
      />
    </View>
  );
};

export default LoginForm;
