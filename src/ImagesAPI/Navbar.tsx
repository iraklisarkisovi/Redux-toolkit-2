import React from 'react'
import { Link } from 'react-router-dom'

const Navbar:React.FC = () => {
  return (
    <div style={{display: 'flex'}}>
        <li><Link to={'/images'}>images</Link></li>
        <li><Link to={'/'}>Home</Link></li>
    </div>
  )
}

export default Navbar
