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
                    style={{fontFamily:"Heebo , sans-serif "}}
                    className="
                        font-bold text-[#0A4D9D] text-[28vw] leading-[14vw]
                        sm:text-[22vw] sm:leading-[11vw]
                        md:text-[15vw] md:leading-[7vw]
                        lg:text-[13vw] lg:leading-[6vw]
                        xl:text-[11vw] 
                    ">{"חדרה"}</p>
                <p  
                    style={{fontFamily:"Heebo , sans-serif "}}
                    className="
                        font-medium text-[#0A4D9D] text-[10.3vw] 
                        sm:text-[8vw]
                        md:text-[5.6vw]
                        lg:text-[4.8vw]
                        xl:text-[4vw]
                    ">{"מארחת באהבה"}</p>
                <p 
                    style={{fontFamily:"Heebo , sans-serif "}}
                    className="
                        font-light text-black text-[7.5vw] leading-[2vw] 
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

/*
        <div className=" lg:float-right  lg:mr-[7%] xl:mr-[14%] lg:mt-[13%] min-[1750px]:mr-[17%] xl:mt-[8%] text-center">
            <span className="text-blue-700 text-[170px] lg:text-[150px] xl:text-[200px] font-bold font-['Heebo'] leading-[120px] lg:leading-[100px] xl:leading-[138.75px]">חדרה<br /></span>
            <span className="text-blue-700 text-[63px] lg:text-[55px] xl:text-7xl font-medium font-['Heebo'] leading-[50px] lg:leading-[45px] xl:leading-[65.79px]">מארחת באהבה<br /></span>
            <span className="text-black text-[46px] lg:text-[40px] xl:text-[53px] font-light font-['Heebo'] leading-[48px] lg:leading-[40px] xl:leading-[63.27px]">את משפחות המפונים</span>
        </div>
*/