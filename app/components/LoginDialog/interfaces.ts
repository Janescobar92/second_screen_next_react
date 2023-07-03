import { FORM_FIELD_USER, FORM_FIELD_PASSWORD } from "./constants";

export interface LoginFormFields {
  [FORM_FIELD_USER]: string;
  [FORM_FIELD_PASSWORD]: string;
}
