/* eslint-disable @typescript-eslint/no-explicit-any */
export function cn(...classes: any[]): string {
    const classArray = [] as string[]

    for (const c of classes) {
        if ("string" === typeof c) {
            classArray.push(c)
            continue
        }

        if (Array.isArray(c)) {
            for (const content of c) {
                if (content) {
                    if (typeof content === "string") {
                        classArray.push(content)
                    }
                }
            }
            continue
        }

        if ("object" === typeof c && c !== null && !Array.isArray(c)) {
            const keys = Object.keys(c)
            for (const key of keys) {
                if (c[key]) {
                    classArray.push(key)
                }
            }
            continue
        }
    }

    return classArray.join(" ")
}
