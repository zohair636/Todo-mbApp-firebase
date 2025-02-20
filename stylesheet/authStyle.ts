import { appColor } from "@/global/color";
import { StyleSheet } from "react-native";

export const authStyle = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: appColor.purple_900,
    padding: 14,
    borderRadius: 14,
    width: "90%",
  },
  formContainer: {
    width: "96%",
    marginTop: 24,
  },
  mainHeading: {
    color: appColor.white,
    fontSize: 20,
    fontWeight: "500",
  },
  subHeading: {
    color: appColor.secondary,
    fontSize: 15,
  },
  inputLabel: {
    color: appColor.white,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: appColor.secondary,
    borderColor: appColor.secondary,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 3,
  },
  input: {
    color: appColor.white,
    paddingHorizontal: 10,
    width: "88%",
  },
  error: {
    color: appColor.red,
    fontSize: 12,
  },
});
