import React, { useEffect } from 'react'
import * as api from '../api.ts'

function QuizMainPage():JSX.Element {

  useEffect(() => {
    api.initFetchThemeAndQuestion().then(data => console.log(data))
  },[])


  return (
    <div>

    </div>
  )
}

export default QuizMainPage