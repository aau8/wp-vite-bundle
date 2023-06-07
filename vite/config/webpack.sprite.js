/**
 * Спрайт создается из svg-иконок в папке icons-to-sprite
 */

import SVGSpritemapPlugin from 'svg-spritemap-webpack-plugin'
import * as path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicFolder = path.resolve(__dirname, '..', 'public')
const iconsFolder = path.resolve(publicFolder, 'icons-to-sprite')

fs.writeFile(`${iconsFolder}/index.js`, '', (err) => {
    if (err) {
        throw Error(err)
    }
})

export default {
    mode: 'production',
    entry: `${iconsFolder}/index.js`,
    output: {
        path: `${iconsFolder}`,
        filename: 'app.min.js',
    },
    plugins: [
        new SVGSpritemapPlugin('public/icons-to-sprite/*.svg', {
            output: {
                filename: `../../../ThemeName/dist/img/sprite.svg`,
                svg: {
                    sizes: false,
                },
            },
            sprite: {
                prefix: false,
                generate: {
                    use: true,
                    view: true,
                    symbol: '-sym',
                },
            },
        }),
    ],
}
