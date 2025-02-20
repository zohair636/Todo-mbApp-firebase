import { appColor } from "@/global/color";
import { View } from "react-native";
import LoginScreen from "./auth/login";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: appColor.primary,
      }}
    >
      <LoginScreen />
    </View>
  );
}
