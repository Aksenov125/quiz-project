/* eslint-disable import/prefer-default-export */


export const checkAnswerFetch = async (obj:{answer:string, id:number}):Promise<{message:string, result:boolean, score:number}>=>{
    const res = await fetch('/api/question', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    })
    const data = await res.json()
    return data
}