"use client";
import { useState } from "react";
import {
  Formik,
  Form,
  Field,
  FieldProps,
  FieldInputProps,
  FormikProps,
} from "formik";
import {
  Dialog,
  DialogTitle,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";

import { useNavigation } from "@/app/Hooks";
import { ROUTES } from "@/app/constants";

import styles from "./loginDialog.module.css";
import {
  FORM_FIELD_PASSWORD,
  FORM_FIELD_USER,
  loginFields,
  validationSchema,
} from "./constants";
import { LoginFormFields } from "./interfaces";

interface Props {
  open: boolean;
  onShow: (show: boolean) => void;
}

/**
 * LoginDialog component for displaying a login dialog.
 * @param {Props} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 */
function LoginDialog(props: Props): JSX.Element {
  const { open, onShow } = props;
  const { router } = useNavigation();

  const [showPassword, setShowPassWord] = useState<boolean>(false);

  const handleClose = () => {
    onShow(false);
  };

  const handleSubmit = () => {
    router.push(ROUTES.settings);
    handleClose();
  };

  const EndAdornment = (
    <IconButton
      id="login-see-password-data-end-adornment"
      size="small"
      onClick={() => setShowPassWord(!showPassword)}
    >
      {showPassword ? <VisibilityOff /> : <Visibility />}
    </IconButton>
  );

  return (
    <Dialog id="login-dialog" open={open} onClose={handleClose}>
      <DialogTitle id="login-dialog-title">
        Introduzca sus credenciales.
      </DialogTitle>
      <Formik
        initialValues={{
          [FORM_FIELD_USER]: "",
          [FORM_FIELD_PASSWORD]: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(_values, { setSubmitting }) => {
          handleSubmit();
          setSubmitting(false);
        }}
      >
        <Form>
          <div id="form-inputs-container" className={styles.inputsContainer}>
            {loginFields.map((f) => (
              <Field name={f.name} key={f.name}>
                {({
                  field,
                  form,
                }: FieldProps<{
                  field: FieldInputProps<{ [x: string]: string }>;
                  form: FormikProps<LoginFormFields>;
                }>) => {
                  const fieldName = field.name;
                  const isPasswordField = fieldName === FORM_FIELD_PASSWORD;
                  const fieldType =
                    !showPassword && isPasswordField ? "password" : "text";

                  return (
                    <TextField
                      autoFocus={f.autofocus}
                      error={
                        !!form.touched[fieldName] && !!form.errors[fieldName]
                      }
                      fullWidth
                      helperText={
                        (!!form.touched[fieldName] &&
                          (form.errors[fieldName] as string)) ||
                        " "
                      }
                      label={f.label}
                      name={fieldName}
                      spellCheck={false}
                      type={fieldType}
                      value={field.value}
                      onChange={({ target }) => {
                        form.setFieldValue(fieldName, target.value);
                      }}
                      InputProps={{
                        ...(isPasswordField && {
                          endAdornment: EndAdornment,
                        }),
                      }}
                    />
                  );
                }}
              </Field>
            ))}
          </div>
          <div
            id="login-dialog-actions-container"
            className={styles.actionsContainer}
          >
            <Button
              className={styles.button}
              color="secondary"
              id="submit-login-button"
              type="submit"
              variant="contained"
              autoFocus
            >
              Accept
            </Button>
            <Button
              className={styles.button}
              color="primary"
              id="cancel-login-button"
              variant="contained"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </div>
        </Form>
      </Formik>
    </Dialog>
  );
}

export default LoginDialog;
