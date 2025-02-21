import { appColor } from "@/global/color";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
        statusBarBackgroundColor: appColor.primary,
      }}
    />
  );
}
