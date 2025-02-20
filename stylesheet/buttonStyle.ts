import { appColor } from "@/global/color";
import { StyleSheet } from "react-native";

export const buttonStyle = StyleSheet.create({
  authButtonContainer: {
    backgroundColor: appColor.purple_800,
    padding: 8,
    borderRadius: 8,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  authButton: {
    color: appColor.white,
  },
});
