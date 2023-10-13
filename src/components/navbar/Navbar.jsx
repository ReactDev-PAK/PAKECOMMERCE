import React, { useContext } from 'react'
import MyContext from '../../context/myContext'

const Navbar = () => {
  const context = useContext(MyContext)
  const {mode,toggleMode} = context
  return (
    <div>
      <h1>{mode}</h1>
    </div>
  )
}

export default Navbar
