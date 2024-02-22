import React, { useState } from 'react'
import type { Question } from '../type'
import { checkAnswerFetch } from '../api'

function QuestionCard({question}:{question:Question}): JSX.Element {
  const [answerValue, setAnswerValue] = useState('')

  const checkAnswer = ():void => {
    checkAnswerFetch({answer:answerValue, id: question.id})
    .then(data=>console.log(data.message))
    .catch(console.log)
  }
  
  return (
    <div className='question-card'>
      <img src={question.img} alt="question-img" />
      <p>{question.name}</p>
      <form onSubmit={checkAnswer}>
      <input onChange={(e)=>setAnswerValue(e.target.value)} value={answerValue} placeholder='Введите ответ' required/>
      <button type='submit'>Отправить ответ</button>
      </form>

    </div>
  )
}

export default QuestionCard