import React from 'react'
import '../../styles/Header/TitleHeader.css'

function TitleHeader() {
    return (
        <div className="position text-center">
            <span className="text-blue-700 text-[200px] font-bold font-['Heebo'] leading-[138.75px]">חדרה<br /></span>
            <span className="text-blue-700 text-7xl font-medium font-['Heebo'] leading-[65.79px]">מארחת באהבה<br /></span>
            <span className="text-black text-[53px] font-light font-['Heebo'] leading-[63.27px]">את משפחות המפונים</span>
        </div>
    )
}

export default TitleHeader