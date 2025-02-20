import { emailIcon, eyeIcons, lockIcons } from "@/global/icons";
import {
  InputTypeText,
  LabelText,
  PlaceholderText,
  RegisterText,
} from "@/global/text";
import { LoginHelper } from "@/global/type";

export const LoginHelperFunction = (isVisible: boolean): LoginHelper[] => {
  return [
    {
      label: LabelText.auth.EMAIL,
      register: RegisterText.EMAIL,
      placeholder: PlaceholderText.auth.EMAIL,
      type: InputTypeText.EMAIL,
      icon: emailIcon.email,
      secureEntry: false,
    },
    {
      label: LabelText.auth.PASSWORD,
      register: RegisterText.PASSWORD,
      placeholder: PlaceholderText.auth.PASSWORD,
      type: InputTypeText.PASSWORD,
      icon: lockIcons.lock,
      password_icon: isVisible ? eyeIcons.eye_on : eyeIcons.eye_off,
      secureEntry: !isVisible,
    },
  ];
};
