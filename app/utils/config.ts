import fs from "fs";
import path from "path";

import { DEFAULT_CONFIG } from "../constants/config";
import { Config } from "../interfaces";

export async function getConfigFilePath() {
  const baseDirectory = __dirname;
  const filePath = path.join(baseDirectory, DEFAULT_CONFIG.fileName);
  return filePath;
}

export async function writeFile(values: Config) {
  fs.writeFileSync(await getConfigFilePath(), JSON.stringify(values, null, 2));
}

export const getGlobalConfig = async () => {
  const filePath = await getConfigFilePath();
  // If config file doesn't exist, generate it from default values.
  if (!fs.existsSync(filePath)) {
    await writeFile(DEFAULT_CONFIG.settings);
  }

  // read config data from file
  const fileData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileData);
};
