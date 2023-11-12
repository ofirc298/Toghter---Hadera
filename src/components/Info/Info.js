import React from 'react'
export default function Info() {
  return (
    <section 
      className="
        grid grid-cols-1 gap-y-[15vw] font-heebo
        py-[15vw] bg-grdnt md:bg-lg-grdnt
        md:grid-cols-2 md:gap-x-[5vw] md:px-[5vw] md:py-[10vw]
        lg:px-[8vw]
        xl:px-[12vw] xl:gap-x-[8vw]
        2xl:py-[7vw]">


        <div 
          className="
            w-full flex flex-col justify-center items-center gap-4
            sm:text-xl
            md:text-base
            xl:text-xl
            2xl:text-2xl">
          <p 
            className="
              text-[#FFF] text-center px-[12vw] font-light
              sm:px-[14vw] 
              md:px-0 md:text-right ">
            {"שלום לכולם,"}
            <br/>
            {" שמי נורית מנחם ויחד עם קבוצה נוספת של אנשים טובים החלטנו לקשר בין משפחות מאזור חדרה והסביבה המעוניינות לארח לארוחת שישי, שבת או סתם לערב בכייף באמצע השבוע, משפחות שפונו מביתיהם ומתארחות בחדרה במלון ג'ייקוב ובכפר הנופש לחיילים בגבעת אולגה."}
          </p>
          <p 
            className='
              text-[#FFF] text-center px-[13vw]  font-medium
              sm:px-[15vw] 
              md:px-0 md:text-right '>
            {"הכוונה היא לתת להם רגע של משפחתיות וחום ויציאה מהטירוף במציאות בלתי נתפסת לכולנו. כולנו רוצים לתת וכולנו יודעים שרק ביחד ננצח בכוח וברוח והנה הזדמנות טובה."}
          </p>
        </div>


        <div 
          className="w-full flex justify-center items-center px-[6vw] sm:px-[8vw] md:px-0">
            <div 
              className="
                bg-white flex flex-col justify-center items-center gap-2
                w-full text-center px-[5vh] py-[2vh] 
                rounded-tr-[65px] rounded-bl-[65px] shadow
                sm:text-xl
                md:text-base md:px-[3vh] md:gap-0
                lg:gap-1 lg:text-lg
                xl:text-xl 
                2xl:text-2xl
            ">
              <p 
                className='text-[#0058C1] text-lg sm:text-2xl md:text-lg xl:text-2xl 2xl:text-3xl font-bold'>
                {"בנימה אישית:"}
              </p>

              <p className='text-[#2B2B2B] font-medium'>
                {"למשפחות המארחות – יישר כח !"}
              </p>

              <p className='text-[#2B2B2B] font-medium'>
                {"למשפחות המפונים – אשריכם על החוסן הנפשי האישי!"}
              </p>

              <p className='text-[#2B2B2B] font-medium'>
                {" אנו מבינים שזה לא פשוט לעשות את הצעד הראשון ולהיכנס אל תוך בית שאתם לא מכירים, גם אם זה רק לערב אחד. אך אנחנו רוצים שתדעו שיש כל כך הרבה משפחות שפותחות את ביתן ורוצות לארח אתכם אם רק תגידו כן."}
              </p>

              <p className='text-[#2B2B2B] font-medium'>
                {"מה שברור הוא שאנו זרים לכם רק בחיצוניות - לא בתודעה."}
              </p>

              <p className='text-[#2B2B2B] font-medium'>
                {"בתודעה אנחנו יחד - בלב ובנשמה."}
              </p>

              <p className='text-[#2B2B2B] font-bold'>
                {"מחכים לכם!"}
              </p>
              
              <svg xmlns="http://www.w3.org/2000/svg" 
                className='
                  w-[7vh] h-[5vh] mb-[-4.5vh] mt-1 
                  sm:w-[10vh] sm:h-[8vh] sm:mb-[-5.5vh]
                  md:w-[8vh] md:h-[6vh] md:mb-[-4.7vh]
                  lg:w-[9vh] lg:h-[7vh] lg:mb-[-5vh]
                  xl:w-[10vh] xl:h-[8vh] xl:mb-[-5.5vh]
                  2xl:w-[12vh] 2xl:h-[9vh] 2xl:mb-[-6vh]
                  ' viewBox="0 0 110 97" fill="none">
                <g clip-path="url(#clip0_83_802)">
                  <path className='max-md:hidden' d="M55.2742 96.9997L97.2672 55.1222C131.518 20.9653 89.5253 -20.9122 55.2742 13.2448C20.0784 -21.8542 -21.9145 20.0232 13.2813 55.1222L55.2742 96.9997Z" fill="#FC4C8F"/>
                  <path className='md:hidden' d="M55.2742 96.9997L97.2672 55.1222C131.518 20.9653 89.5253 -20.9122 55.2742 13.2448C20.0784 -21.8542 -21.9145 20.0232 13.2813 55.1222L55.2742 96.9997Z" fill="#AA5AB2"/>

                  <path className='max-md:hidden' opacity="0.36" d="M33.8533 2.0557C46.6563 6.50583 53.296 20.4347 48.6886 33.1673C44.0791 45.9 29.9648 52.6145 17.1618 48.1643C4.35881 43.7142 -2.28093 29.7853 2.32649 17.0527C6.93805 4.32002 21.0524 -2.39443 33.8533 2.0557Z" fill="#FC4C8F"/>
                  <path className='md:hidden' opacity="0.36" d="M33.8533 2.0557C46.6563 6.50583 53.296 20.4347 48.6886 33.1673C44.0791 45.9 29.9648 52.6145 17.1618 48.1643C4.35881 43.7142 -2.28093 29.7853 2.32649 17.0527C6.93805 4.32002 21.0524 -2.39443 33.8533 2.0557Z" fill="#AA5AB2"/>

                  <path className='max-md:hidden' opacity="0.36" d="M85.7158 47.9494C73.0909 48.8626 62.2291 39.3756 61.4543 26.7607C60.6774 14.1479 70.2817 3.18164 82.9066 2.27054C95.5314 1.35738 106.393 10.8444 107.168 23.4593C107.943 36.0721 98.3385 47.0383 85.7158 47.9494Z" fill="#FD4C8F"/>
                  <path className='md:hidden' opacity="0.36" d="M85.7158 47.9494C73.0909 48.8626 62.2291 39.3756 61.4543 26.7607C60.6774 14.1479 70.2817 3.18164 82.9066 2.27054C95.5314 1.35738 106.393 10.8444 107.168 23.4593C107.943 36.0721 98.3385 47.0383 85.7158 47.9494Z" fill="#AA5AB2"/>

                </g>
                <defs>
                  <clipPath id="clip0_83_802">
                    <rect width="110" height="97" fill="white"/>
                  </clipPath>
                </defs>
              </svg>

            </div>
        </div>

    </section>
  )
}