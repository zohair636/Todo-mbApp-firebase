import { Eye, EyeOff, Lock, Mail } from "lucide-react-native";
import { appColor } from "./color";

export const emailIcon = { email: <Mail size={16} color={appColor.secondary} /> };

export const lockIcons = { lock: <Lock size={16} color={appColor.secondary} /> };

export const eyeIcons = { eye_on: <Eye size={16} color={appColor.secondary} />, eye_off: <EyeOff size={16} color={appColor.secondary} /> };
