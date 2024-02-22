export type Theme = {
    id:number
    name: string
    Questions:Question[]

}

export type Question = {
    id:number
    name: string
    answer: string
    img: string
    price: number
    theme_id: number

}


export type StateThemes = {
    themes:Theme[]
}



