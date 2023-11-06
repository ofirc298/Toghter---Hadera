import React from 'react'

export default function Info() {
  return (
    <div className="flex justify-evenly items-center w-[100%] h-[464px] bg-gradient-to-r from-pink-500 via-violet-500 to-sky-700">

      <div className="w-[40%] text-right">
        <span className="text-white text-2xl font-normal font-['Heebo']">שלום לכולם,<br />שמי נורית מנחם ויחד עם קבוצה נוספת של אנשים טובים החלטנו לקשר בין משפחות מאזור חדרה והסביבה המעוניינות לארח לארוחת שישי, שבת או סתם לערב בכייף באמצע השבוע, משפחות שפונו מבתיהם ומתארחות בחדרה במלון ג'ייקוב ובכפר הנופש לחיילים בגבעת אולגה.<br /></span>
        <br />
        <span className="text-white text-2xl font-extrabold font-['Heebo']">הכוונה היא ליצור רגע של משפחתיות וחום ויציאה מהטירוף במציאות בלתי נתפסת לכולנו. כולנו רוצים לתת וכולנו יודעים שרק ביחד ננצח בכוח וברוח והנה הזדמנות טובה.</span>
      </div>

      <div className="w-[40%] h-[432px] bg-white rounded-tr-[65px] rounded-bl-[65px] shadow  flex justify-evenly items-center" >
        <div className="w-[587px] text-center">
          <span className="text-sky-700 text-[26px] font-bold font-['Heebo'] leading-[29px]">בנימה אישית:<br />          </span>
          <span className="text-zinc-800 text-2xl font-normal font-['Heebo'] leading-[29px]">למשפחות המארחות – יישר כח !<br />למשפחות המפונים – אשריכם על החוסן הנפשי האישי!<br />אנו מבינים שזה לא פשוט לעשות את הצעד הראשון ולהיכנס אל תוך בית שאתם לא מכירים, גם אם זה רק לערב אחד. אך אנחנו רוצים שתדעו שיש כל כך הרבה משפחות שפותחות את ביתן ורוצות לארח אתכם אם רק תגידו כן.<br />מה שברור הוא שאנו זרים לכם רק בחיצוניות - לא בתודעה. <br />בתודעה אנחנו יחד - בלב ובנשמה. <br /></span>
          <span className="text-zinc-800 text-2xl font-bold font-['Heebo'] leading-[29px]">מחכים לכם!</span>
        </div>
      </div>

      {/* ICON HEART */}
      {/* <div className="w-[110px] h-[97px] relative">
        <div className="w-[110px] h-[97px] left-[-0px] top-[-0px] absolute">
        </div>
      </div> */}


    </div>
  )
}
