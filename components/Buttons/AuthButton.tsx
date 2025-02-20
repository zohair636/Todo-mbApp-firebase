import { Text, Pressable, StyleProp, ViewStyle, TextStyle } from "react-native";
import React from "react";

const AuthButton = ({
  label,
  isLoading,
  onPress,
  containerStyle,
  style,
}: {
  label: string;
  isLoading?: boolean;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<TextStyle>;
}) => {
  return (
    <Pressable onPress={onPress} style={containerStyle}>
      <Text style={style}>{isLoading ? "" : label}</Text>
    </Pressable>
  );
};

export default AuthButton;
