import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as api from '../api.ts'
import type { RootState} from '../../../store/store.ts';
import QuestionCard from '../../Questions/components/QuestionCard.tsx';


function QuizMainPage():JSX.Element {

  const dispatch = useDispatch()
  const themes = useSelector((store:RootState) => store.initialThemeState.themes)
  
  useEffect(() => {
    console.log('lol',13124144141414)
    api.initFetchThemeAndQuestion().then(data => dispatch({type:'Theme/Init', payload:data})).catch(console.log)

  },[])
  

  


  return (
    <div>
{
  themes.map((theme) =><> <p key={theme.id}>{theme.name}</p> {theme.Questions.map((question)=> <QuestionCard key={question.id} question={question}/>)}</>)
}

    </div>
  )
}

export default QuizMainPage