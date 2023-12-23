import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import AutoImport from "unplugin-auto-import/vite"
import path from "path"

const slugify = (text: string) => {
    const temp: Array<string> = []

    text.split("").forEach((char) => {
        if (!/[A-Za-z]/g.test(char)) {
            temp.push("")
            return
        }

        if (char !== char.toUpperCase()) {
            const len = temp.length

            if (!len) {
                temp[0] = char
                return
            }

            temp[len - 1] = temp[len - 1] + char
            return
        }

        temp.push(char.toLowerCase())
    })

    return temp.join("-")
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        AutoImport({
            dts: "./src/auto-import.d.ts",
            dirs: ["./src/utils/*.ts"],
        }),
    ],
    base: "",
    build: {
        rollupOptions: {
            output: {
                chunkFileNames(info) {
                    return `assets/js/${slugify(info.name)}.chunk.js`
                },
                entryFileNames(info) {
                    return `${slugify(info.name)}.js`
                },
                assetFileNames(info) {
                    const { ext, name } = path.parse(info.name)

                    switch (ext) {
                        case ".css":
                            return `assets/css/${slugify(name)}${ext}`
                        case ".jpg":
                        case ".webp":
                        case ".png":
                            return `assets/images/${slugify(name)}${ext}`
                        default:
                            return `assets/[name].[ext]`
                    }
                },
            },
        },
        chunkSizeWarningLimit: 2000,
    },
})
