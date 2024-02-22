import React from 'react'
import { NavLink } from 'react-router-dom'


function Headers():JSX.Element {
  return (

<ul className="menu-main">
  <li><NavLink to='' >Hello</NavLink></li>
  <li><NavLink to=''>Hello</NavLink></li>
  <li><NavLink to=''>Hello</NavLink></li>
  <li><NavLink to=''>Hello</NavLink></li>
</ul>

  )
}
export default Headers