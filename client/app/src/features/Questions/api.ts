/* eslint-disable import/prefer-default-export */


export const checkAnswerFetch = async (obj:{answer:string, id:string}):Promise<{message:number, result:boolean, score:number}>=>{
    const res = await fetch('/api/questions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    })
    const data = await res.json()
    return data
}