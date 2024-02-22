import type { Theme } from "./type"

export const initFetchThemeAndQuestion = async ():Promise<Theme[]> => {
    const res = await fetch('/api/theme')
    const data = await res.json()
    return data.themes
}



