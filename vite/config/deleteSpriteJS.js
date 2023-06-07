/**
 * Для создания спрайта используется webpack, который создает лишние app.min.js и index.js.
 * Данный скрипт удаляет эти файлы, после создания спрайта
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const iconsFolder = path.resolve(__dirname, '..', 'public/icons-to-sprite')

const filesDeletePaths = [
	path.resolve(iconsFolder, 'app.min.js'),
	path.resolve(iconsFolder, 'index.js'),
]

for (let i = 0; i < filesDeletePaths.length; i++) {
	const path = filesDeletePaths[i];

	fs.unlink(path, err => {
		if (err) {
			throw Error(err)
		}
	})
}