import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as api from '../api.ts'
import type { RootState} from '../../../store/store.ts';
import QuestionCard from '../../Questions/components/QuestionCard.tsx';


function QuizMainPage():JSX.Element {

  const dispatch = useDispatch()

  const themes = useSelector((store:RootState) => store.initialThemeState.themes)

 
  
  
  useEffect(() => {
    api.initFetchThemeAndQuestion().then(data => dispatch({type:'Theme/Init', payload:data})).catch(console.log)

  },[])
  console.log(themes.themes[0].Questions, '1111');


  return (
    <div>
{
  themes.themes.map((theme) =><> <p>{theme.name}</p> {theme.Questions.map((question)=> <QuestionCard question={question}/>)}</>)
}

    </div>
  )
}

export default QuizMainPage