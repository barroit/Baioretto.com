import { join } from "path";

const COOKIE_SECRET = getValue("COOKIE_SECRET");
const GITHUB_TOKEN = getValue("GITHUB_TOKEN");
const ABORT_DELAY = Number(getValue("ABORT_DELAY"));

const IS_PRODUCTION = process.env["NODE_ENV"] === "production";

const IMAGE_TMP_FOLDER = join(__dirname, "images", ".tmp");

function getValue(key: string) {
  let value;
  if (!(value = process.env[key]))
    throw new Error(`${ key } must be set`);
  return value;
}

export {
  COOKIE_SECRET,
  GITHUB_TOKEN,
  IS_PRODUCTION,
  ABORT_DELAY,
  IMAGE_TMP_FOLDER,
};