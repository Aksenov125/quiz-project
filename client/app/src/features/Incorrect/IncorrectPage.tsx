import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './incorrect-styles.css'


function IncorrectPage():JSX.Element {
    const navigator = useNavigate()

    const mainredirect = ():void => {
        navigator('/')
    }
  return (
    <div className='incorrect-page-div' onClick={mainredirect}>
        <img className='incorrect-page-meme' src='https://chpic.su/_data/stickers/y/Yellowboi/Yellowboi_013.webp' alt='meme'/>
        <p className='incorrect-page-text'>404</p>
        <Link to='/'>Main Page</Link>
    </div>
  )
}

export default IncorrectPage