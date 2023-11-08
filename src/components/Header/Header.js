import React from 'react'
import '../../styles/Header/Header.css'
import TitleHeader from './TitleHeader'

function Header() {
  return (
    <div 
      className="background-container h-[130vw] sm:h-[110vw] md:h-[50vw] lg:h-[45vw] xl:h-[40vw] 2xl:h-[35vw]">
      <TitleHeader/>
    </div>
  )
}

export default Header