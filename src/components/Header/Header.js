import React from 'react'
import '../../styles/Header/Header.css'
import TitleHeader from './TitleHeader'

function Header() {
  return (
    <div className="background-container w-[100%] h-[540px] bg-gradient-to-r from-pink-500 via-violet-500 to-sky-700">
      <TitleHeader/>
    </div>
  )
}

export default Header