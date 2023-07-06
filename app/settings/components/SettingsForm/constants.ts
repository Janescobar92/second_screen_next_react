import * as Yup from "yup";

import { FORM_ERR_MSGS } from "@/app/constants";

export const validationSchema = Yup.object({
  COMPANY: Yup.string().required(FORM_ERR_MSGS.REQUIRED_FIELD),
  WS_ROOM: Yup.string().required(FORM_ERR_MSGS.REQUIRED_FIELD),
  WS_SERVER_PORT: Yup.string().required(FORM_ERR_MSGS.REQUIRED_FIELD),
});
