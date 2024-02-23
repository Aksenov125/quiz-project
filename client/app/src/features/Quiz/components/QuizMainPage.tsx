import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as api from '../api.ts'
import type { RootState} from '../../../store/store.ts';
import QuestionCard from '../../Questions/components/QuestionCard.tsx'


function QuizMainPage():JSX.Element {
  const dispatch = useDispatch()
  const [statebtn, setStatebtn] = useState(false)
  const themes = useSelector((store:RootState) => store.initialThemeState.themes)
  useEffect(() => {
    api.initFetchThemeAndQuestion().then(data => dispatch({type:'Theme/Init', payload:data})
    ).catch(console.log)
  },[])
  return (
    <div className='container'>
      {themes.map((theme) =>
          <div> 
          <div className='themeName' key={theme.id}>{theme.name}</div>
          {theme.Questions.map((question)=> <QuestionCard key={question.id} question={question}/>)}
          </div>
        )}
    </div>
  )
}

export default QuizMainPage