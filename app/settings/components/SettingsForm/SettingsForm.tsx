"use client";
import { useContext } from "react";

import {
  Formik,
  Form,
  Field,
  FieldProps,
  FieldInputProps,
  FormikProps,
} from "formik";
import { TextField, Button, MenuItem } from "@mui/material";

import { AppContext } from "@/app/providers";

import styles from "./settingsForm.module.css";

import { COMPANY_VALUES, validationSchema } from "./constants";
import { Config } from "@/app/interfaces";
import { SettingsFormFields } from "./interfaces";
import { setConfig } from "@/app/providers/AppContextProvider/actions";
import { useConfig } from "@/app/Hooks";

/**
 * SettingsForm is a React component that displays a form to manage settings.
 * It uses the useContext hook to fetch the configuration data,
 * and displays the form with the retrieved configuration values.
 * @returns {JSX.Element} - The rendered component.
 */
function SettingsForm(): JSX.Element {
  const { state, dispatch } = useContext(AppContext);
  const { writeConfig } = useConfig();
  const config = {
    COMPANY: state.config.company,
    WS_ROOM: state.config.ws_room,
    WS_SERVER_PORT: state.config.ws_server_port,
  };

  /**
   * Handles form submission.
   * @param {Config} values - The form values.
   */
  const handleSubmit = async (values: Config) => {
    writeConfig(values);
    setConfig(values, dispatch);
  };

  // Create form fields based on configuration data
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const formFields = Object.entries(config).map(([key, _value], i) => {
    return {
      name: key,
      label: key,
      autofocus: i === 0,
    };
  });

  return (
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
                if (f.name === "COMPANY") {
                  return (
                    <Field name={f.name} key={f.name}>
                      {({
                        field,
                        form,
                      }: FieldProps<{
                        field: FieldInputProps<{ [x: string]: string }>;
                        form: FormikProps<SettingsFormFields>;
                      }>) => {
                        const fieldName = field.name;

                        return (
                          <TextField
                            error={
                              !!form.touched[fieldName] &&
                              !!form.errors[fieldName]
                            }
                            fullWidth
                            id="company-select-input"
                            select
                            label={f.label}
                            helperText={
                              (!!form.touched[fieldName] &&
                                (form.errors[fieldName] as string)) ||
                              " "
                            }
                            value={field.value}
                            onChange={({ target }) => {
                              form.setFieldValue(fieldName, target.value);
                            }}
                          >
                            {COMPANY_VALUES.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        );
                      }}
                    </Field>
                  );
                }
                return (
                  <Field name={f.name} key={f.name}>
                    {({
                      field,
                      form,
                    }: FieldProps<{
                      field: FieldInputProps<{ [x: string]: string }>;
                      form: FormikProps<SettingsFormFields>;
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
                color="primary"
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
  );
}

export default SettingsForm;
