import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { RegisterHelperFunction } from "../../helpers/AuthHelper";
import { RegisterData } from "../../global/type";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { authStyle } from "@/stylesheet/authStyle";
import { appColor } from "@/global/color";
import AuthButton from "../Buttons/AuthButton";
import { ButtonText } from "@/global/text";
import { buttonStyle } from "@/stylesheet/buttonStyle";
import { router } from "expo-router";

const schema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Please enter valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState<boolean[]>([]);
  const userRegistration = RegisterHelperFunction(showPassword);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const handleShowPassword = (index: number) => {
    setShowPassword((prev) => {
      const password = [...prev];
      password[index] = !password[index];
      return password;
    });
  };

  const onSubmit = (data: RegisterData) => {
    console.log(data);
  };

  return (
    <View style={authStyle.formContainer}>
      {userRegistration.map((item, index) => (
        <View key={item.register} style={{ marginVertical: 2 }}>
          <Text style={authStyle.inputLabel}>{item.label}</Text>
          <Controller
            name={
              item.register as "name" | "email" | "password" | "confirmPassword"
            }
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
                    secureTextEntry={item.secureEntry}
                  />
                </View>
                <Pressable onPress={() => handleShowPassword(index)}>
                  {item.password_icon}
                </Pressable>
              </View>
            )}
          />
          {errors[
            item.register as "name" | "email" | "password" | "confirmPassword"
          ] && (
            <Text style={authStyle.error}>
              {
                errors[
                  item.register as
                    | "name"
                    | "email"
                    | "password"
                    | "confirmPassword"
                ]?.message
              }
            </Text>
          )}
        </View>
      ))}
      {/* register button */}
      <AuthButton
        label={ButtonText.REGISTER}
        isLoading={false}
        onPress={handleSubmit(onSubmit)}
        containerStyle={buttonStyle.authButtonContainer}
        style={buttonStyle.authButton}
      />
      {/* login follow on button */}
      <AuthButton
        label={ButtonText.LOGIN_FOLLOW_ON}
        onPress={() => router.push("/auth/login")}
        style={{
          ...buttonStyle.authButton,
          textAlign: "center",
          marginTop: 10,
        }}
      />
    </View>
  );
};

export default RegisterForm;
