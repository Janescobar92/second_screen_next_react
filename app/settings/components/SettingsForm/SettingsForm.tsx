"use client";

import {
  Formik,
  Form,
  Field,
  FieldProps,
  FieldInputProps,
  FormikProps,
} from "formik";

import { validationSchema } from "@/app/components/LoginDialog/constants";
import { LoginFormFields } from "@/app/components/LoginDialog/interfaces";
import { TextField, Button } from "@mui/material";
import { Config } from "@/app/interfaces";
import { AppThemeProvider } from "@/app/providers";

import styles from "./settingsForm.module.css";

interface Props {
  config: Config;
}

function SettingsForm(props: Props) {
  const { config } = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const formFields = Object.entries(config).map(([key, _value], i) => {
    return {
      name: key,
      label: key,
      autofocus: i === 0,
    };
  });

  const handleSubmit = (values: Config) => {
    console.log({ values });
  };

  return (
    <AppThemeProvider>
      <div className={styles.formContainer}>
        <Formik
          initialValues={config}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false);
          }}
        >
          <Form>
            <>
              <div id="settings-form-inputs-container">
                {formFields.map((f) => {
                  return (
                    <Field name={f.name} key={f.name}>
                      {({
                        field,
                        form,
                      }: FieldProps<{
                        field: FieldInputProps<{ [x: string]: string }>;
                        form: FormikProps<LoginFormFields>;
                      }>) => {
                        const fieldName = field.name;

                        return (
                          <TextField
                            autoFocus={f.autofocus}
                            error={
                              !!form.touched[fieldName] &&
                              !!form.errors[fieldName]
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
                            type="text"
                            value={field.value}
                            onChange={({ target }) => {
                              form.setFieldValue(fieldName, target.value);
                            }}
                          />
                        );
                      }}
                    </Field>
                  );
                })}
              </div>
              <div
                id="settings-from-actions-container"
                className={styles.actionsContainer}
              >
                <Button
                  className={styles.button}
                  color="secondary"
                  disableElevation
                  id="submit-settings-button"
                  type="submit"
                  variant="contained"
                  autoFocus
                >
                  Guardar
                </Button>
              </div>
            </>
          </Form>
        </Formik>
      </div>
    </AppThemeProvider>
  );
}

export default SettingsForm;
