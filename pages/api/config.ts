import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

import { DEFAULT_CONFIG } from "@/app/constants/config";
import { Config } from "@/app/interfaces";

/**
 * Gets the file path of the configuration file.
 * @returns {Promise<string>} - The file path.
 */
export async function getConfigFilePath() {
  const baseDirectory = path.join(process.cwd(), "json");
  const filePath = path.join(baseDirectory, DEFAULT_CONFIG.fileName);
  return filePath;
}

/**
 * Writes the configuration values to the file.
 * @param {Config} values - The configuration values to write.
 */
export async function writeFile(values: Config) {
  console.log({ values });
  fs.writeFileSync(await getConfigFilePath(), JSON.stringify(values, null, 2));
}

/**
 * Retrieves the global configuration.
 * If the config file doesn't exist, it generates it from default values.
 * @returns {Promise<Config>} - The global configuration.
 */
export const getGlobalConfig = async (): Promise<Config> => {
  const filePath = await getConfigFilePath();
  if (!fs.existsSync(filePath)) {
    await writeFile(DEFAULT_CONFIG.settings);
  }

  const fileData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileData);
};

/**
 * Request handler for the configuration API.
 * Handles GET and POST requests.
 * @param {NextApiRequest} req - The request object.
 * @param {NextApiResponse} res - The response object.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const data = await getGlobalConfig();
    res.status(200).json(data);
  } else if (req.method === "POST") {
    const newData = JSON.parse(req.body);
    await writeFile(newData);
    res.status(200).json({ body: newData });
  }
}
