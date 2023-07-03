import * as Yup from "yup";
import { FORM_ERR_MSGS, SUPPORT_IT_LOGIN_ERR_MSGS } from "@/app/constants";

export const FORM_FIELD_USER = "user";
export const FORM_FIELD_PASSWORD = "password";

const user = process.env.IT_SUPPORT_USER || "soporte";
const password = process.env.IT_SUPPORT_PASSWORD || "soporte.it.12345";

export const loginFields = [
  { name: FORM_FIELD_USER, label: "Usuario", autofocus: true },
  {
    name: FORM_FIELD_PASSWORD,
    label: "Contraseña",
    autofocus: false,
  },
];

export const validationSchema = Yup.object({
  [FORM_FIELD_USER]: Yup.string()
    .required(FORM_ERR_MSGS.REQUIRED_FIELD)
    .test(
      "check-user",
      SUPPORT_IT_LOGIN_ERR_MSGS.WRONG_USER,
      (value) => value === user
    ),
  [FORM_FIELD_PASSWORD]: Yup.string()
    .required(FORM_ERR_MSGS.REQUIRED_FIELD)
    .test(
      "check-password",
      SUPPORT_IT_LOGIN_ERR_MSGS.WRONG_PASSWORD,
      (value) => value === password
    ),
});
