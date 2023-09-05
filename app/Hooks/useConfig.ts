import { DEFAULT_CONFIG } from "../constants/config";
import { Config } from "../interfaces";

/**
 * Custom hook used for managing application configuration settings.
 */
const useConfig = () => {
  /**
   * Retrieves the configuration data from local storage.
   * @returns {Config} The configuration data.
   */
  function getConfigData() {
    const config = window.localStorage.getItem("config") || "{}";
    return JSON.parse(config);
  }

  /**
   * Writes the provided configuration values to local storage.
   * @param {Config} values - The configuration values to be stored.
   */
  function writeConfig(values: Config) {
    window.localStorage.setItem("config", JSON.stringify(values));
  }

  /**
   * Retrieves the global configuration.
   * If the configuration data doesn't exist in local storage, it initializes it with default values.
   * @returns {Config} The global configuration.
   */
  const getGlobalConfig = () => {
    const config = getConfigData();
    const configExists = !!config;
    if (configExists) {
      writeConfig(DEFAULT_CONFIG);
      return DEFAULT_CONFIG;
    }

    return config;
  };

  return {
    /**
     * Retrieves the global configuration.
     * If no configuration data exists, it initializes it with default values.
     * @returns {Config} The global configuration.
     */
    getGlobalConfig,

    /**
     * Writes the provided configuration values to local storage.
     * @param {Config} values - The configuration values to be stored.
     */
    writeConfig,
  };
};

export default useConfig;
