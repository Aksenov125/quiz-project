import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Headers from './Headers'
import './main.css'

function Main():JSX.Element {
  return (
    <div className='main'>
    <Headers/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Main