import React from 'react'
import omri from '../assets/omri.png'

function Omri() {
    return (
        <div className='flex justify-center'>
            <a href='https://www.facebook.com/omri.niv.fireshtein.memorial' Style={'margin-left: 2%;'}>
                <p className=" font-medium font-heebo text-[#0A4D9D] text-[4.3vw] " >
                    לזכר סמ"ר עומרי ניב פיירשטיין ז"ל
                </p>
            </a>

            <img src={omri} alt='omri' width="5%" height="5%" />
        </div >
    )
}

export default Omri