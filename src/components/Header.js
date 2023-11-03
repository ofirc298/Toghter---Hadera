import React from 'react'
import backGroundHeader from '../assets/backGroundHeader.png';
import '../styles/Header.css'

function Header() {
  return (
    <div className="background-container w-[100%] h-[764px] bg-gradient-to-r from-pink-500 via-violet-500 to-sky-700">
      <div className="text-center">
        <span className="text-blue-700 text-[200px] font-bold font-['Heebo'] leading-[238.75px]">חדרה<br /></span>
        <span className="text-blue-700 text-7xl font-medium font-['Heebo'] leading-[65.79px]">מארחת באהבה<br /></span>
        <span className="text-black text-[53px] font-light font-['Heebo'] leading-[63.27px]">את משפחות המפונים</span>
      </div>
    </div>
  )
}

export default Header