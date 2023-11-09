import React from 'react'

function TitleHeader() {
    return (
        <div className='w-[100vw] flex flex-col justify-center items-center'>
            <p className=' leading-[60px] md:w-full md:text-right md:pr-8 '>{"ב״ה"}</p>
            <div className='
                    flex flex-col justify-center items-center w-full mt-[3vw]
                    md:mr-[-55vw] lg:mr-[-52vw] xl:mr-[-50vw] 2xl:mr-[-44vw]
                    sm:mt-[4vw] md:mt-[10vw] lg:mt-[11vw] xl:mt-[9vw] 2xl:mt-[7vw]'>
                <p 
                    className="
                        font-bold font-heebo text-[#0A4D9D] text-[28vw] leading-[14vw]
                        sm:text-[22vw] sm:leading-[11vw]
                        md:text-[15vw] md:leading-[7vw]
                        lg:text-[13vw] lg:leading-[6vw]
                        xl:text-[11vw] 
                    ">{"חדרה"}</p>
                <p  
                    className="
                        font-medium font-heebo text-[#0A4D9D] text-[10.3vw] 
                        sm:text-[8vw]
                        md:text-[5.6vw]
                        lg:text-[4.8vw]
                        xl:text-[4vw]
                    ">{"מארחת באהבה"}</p>
                <p 
                    className="
                        font-light font-heebo text-black text-[7.5vw] leading-[2vw] 
                        sm:text-[5.77vw] sm:leading-[1.5vw]
                        md:text-[4.1vw] md:leading-[1vw]
                        lg:text-[3.47vw] lg:leading-[0.5vw]
                        xl:text-[2.9vw]
                    ">{"את משפחות המפונים"}</p>
            </div>
        </div>
    )
}

export default TitleHeader

