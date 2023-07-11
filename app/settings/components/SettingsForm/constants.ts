import * as Yup from "yup";

import { AURGI, FORM_ERR_MSGS, MOTORTOWN } from "@/app/constants";

export const COMPANY_VALUES = [
  { label: "Aurgi", value: AURGI },
  { label: "Motortown", value: MOTORTOWN },
];

export const validationSchema = Yup.object({
  COMPANY: Yup.string().required(FORM_ERR_MSGS.REQUIRED_FIELD),
  WS_ROOM: Yup.string().required(FORM_ERR_MSGS.REQUIRED_FIELD),
  WS_SERVER_PORT: Yup.string().required(FORM_ERR_MSGS.REQUIRED_FIELD),
});
