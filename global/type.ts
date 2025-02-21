import { JSX } from "react";

export type RegisterData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type LoginHelper = {
  label: string;
  register: string;
  placeholder: string;
  type: string;
  icon?: JSX.Element;
  password_icon?: JSX.Element;
  secureEntry?: boolean;
};
