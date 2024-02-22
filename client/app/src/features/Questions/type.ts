export type Question = {
    id:number,
    name:string,
    answer:string,
    img:string,
    price:number,
    theme_id:number
}

export type QuestionWithoutId = Omit<Question,'id'>