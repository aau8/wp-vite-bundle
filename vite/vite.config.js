import { defineConfig, splitVendorChunkPlugin } from 'vite'
import liveReload from 'vite-plugin-live-reload'
import path from 'path'
import { replaceCodePlugin } from 'vite-plugin-replace'
import config from '../config.json' assert { type: 'json' }

const THEME_NAME = config.THEME_NAME
const THEME_DOMAIN = config.THEME_DOMAIN
const PORT = config.PORT
const WP_HOST = process.env.APP_ENV === 'dev' ? `http://${THEME_DOMAIN}/wp-content/themes/${THEME_NAME}/dist` : `..`

export default defineConfig({
    plugins: [
        liveReload([__dirname + `/../${THEME_NAME}/**/*.php`]),
        splitVendorChunkPlugin(),
        replaceCodePlugin({
            replacements: [
                {
                    from: /@assets/g,
                    to: WP_HOST,
                },
                {
                    from: /@fonts/g,
                    to: WP_HOST + '/fonts',
                },
                {
                    from: /@img/g,
                    to: WP_HOST + '/img',
                },
                {
                    from: /@sprite/g,
                    to: WP_HOST + '/img/sprite.svg',
                },
            ],
        }),
    ],

    optimizeDeps: {
        exclude: ['js-big-decimal'],
    },

    root: 'src',
    base: process.env.APP_ENV === 'dev' ? `/${THEME_NAME}/` : '/dist/',

    build: {
        outDir: `../../${THEME_NAME}/dist`,
        emptyOutDir: false,

        manifest: true,

        rollupOptions: {
            input: path.resolve(__dirname, 'src/main.js'),
        },
    },

    server: {
        strictPort: true,
        port: PORT,
    },
})
