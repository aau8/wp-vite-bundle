/**
 * Удаление в теме папки assets перед билдом сборки
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import config from "../../config.json" assert { type: "json" }


const THEME_NAME = config.THEME_NAME
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const assetsFolder = path.resolve(__dirname, '../..', `${THEME_NAME}/dist/assets`)

fs.rmdir( assetsFolder, { recursive:true }, (err) => {
    console.error(err);
});
