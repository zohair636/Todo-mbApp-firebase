import { emailIcon, eyeIcons, lockIcons, userIcons } from "@/global/icons";
import {
  InputTypeText,
  LabelText,
  PlaceholderText,
  RegisterText,
} from "@/global/text";
import { LoginHelper } from "@/global/type";

export const RegisterHelperFunction = (isVisible: boolean[]): LoginHelper[] => {
  return [
    {
      label: LabelText.auth.NAME,
      register: RegisterText.NAME,
      placeholder: PlaceholderText.auth.NAME,
      type: InputTypeText.TEXT,
      icon: userIcons.user,
      secureEntry: false,
    },
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
      password_icon: isVisible[0] ? eyeIcons.eye_on : eyeIcons.eye_off,
      secureEntry: isVisible[0] && true,
    },
    {
      label: LabelText.auth.CONFIRM_PASSWORD,
      register: RegisterText.CONFIRM_PASSWORD,
      placeholder: PlaceholderText.auth.CONFIRM_PASSWORD,
      type: InputTypeText.PASSWORD,
      icon: lockIcons.lock,
      password_icon: isVisible[1] ? eyeIcons.eye_on : eyeIcons.eye_off,
      secureEntry: isVisible[1] && true,
    },
  ];
};

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
