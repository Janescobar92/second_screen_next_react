"use client";

import useSWR from "swr";
import {
  Formik,
  Form,
  Field,
  FieldProps,
  FieldInputProps,
  FormikProps,
} from "formik";
import { TextField, Button } from "@mui/material";
import { Config } from "@/app/interfaces";
import { AppThemeProvider } from "@/app/providers";

import styles from "./settingsForm.module.css";

import { CONFIG_API_URL } from "@/app/constants/config";
import { validationSchema } from "./constants";
import { SettingsFormFields } from "./interfaces";

/**
 * Fetcher function for useSWR.
 * @param {string} url - The URL to fetch.
 * @param {string} [method] - The HTTP method to use.
 * @param {string} [body] - The body of the request.
 * @returns {Promise<any>} - The data from the response.
 */
const fetcher = async (url: string, method?: string, body?: string) => {
  const res = await fetch(url, { method, body });
  return await res.json();
};

/**
 * SettingsForm is a React component that displays a form to manage settings.
 * It uses the useSWR hook to fetch the configuration data,
 * and displays the form with the retrieved configuration values.
 * @returns {JSX.Element} - The rendered component.
 */
function SettingsForm() {
  const { data: config, error, isLoading } = useSWR(CONFIG_API_URL, fetcher);

  /**
   * Handles form submission.
   * @param {Config} values - The form values.
   */
  const handleSubmit = async (values: Config) => {
    const resp = await fetcher(CONFIG_API_URL, "POST", JSON.stringify(values));
    console.log({ resp });
  };

  // Handle the error state
  if (error) {
    console.error("Error getting configuration:", { error });
    return <div>Failed to load</div>;
  }

  // Show loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Create form fields based on configuration data
  const formFields = Object.entries(config).map(([key, _value], i) => {
    return {
      name: key,
      label: key,
      autofocus: i === 0,
    };
  });

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
                  color="secondary"
                  disableElevation
                  id="submit-settings-button"
                  type="submit"
                  variant="contained"
                  autoFocus
                >
                  Save
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
