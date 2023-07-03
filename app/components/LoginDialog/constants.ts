import * as Yup from "yup";
import { FORM_ERR_MSGS } from "@/app/constants";

export const FORM_FIELD_USER = "user";
export const FORM_FIELD_PASSWORD = "password";

export const loginFields = [
  { name: FORM_FIELD_USER, label: "Usuario", autofocus: true },
  {
    name: FORM_FIELD_PASSWORD,
    label: "Contraseña",
    autofocus: false,
  },
];

export const validationSchema = Yup.object({
  [FORM_FIELD_USER]: Yup.string().required(`*${FORM_ERR_MSGS.REQUIRED_FIELD}`),
  [FORM_FIELD_PASSWORD]: Yup.string().required(
    `*${FORM_ERR_MSGS.REQUIRED_FIELD}`
  ),
});
