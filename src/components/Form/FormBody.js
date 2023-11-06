import React, { useRef, useState } from "react";
import { InputContainer } from "./InputContainer";

export const FormBody = () => {

  const [familyType, setFamilyType] = useState(null);
  
  const formRef = useRef()

  const handleSubmit = (e) => {
    // e.preventDefault()
    // console.log(formRef.current.elements)
  }

  return (
    <div className="flex flex-col w-full gap-8">
      <section className="flex flex-col items-center gap-8 w-full bg-white py-6 shadow-md px-2">
        <h1 className="text-lg text-center">
          האם אתם משפחה שרוצה לארח או משפחה מפונה המעוניינת להתארח?
        </h1>
        <div className="flex gap-3">
          <button
            onClick={() => setFamilyType("host")}
            className={`p-1 px-6 rounded duration-75 ${
              familyType == "host"
                ? "bg-btn text-white"
                : "bg-form text-slate-600"
            }`}
          >
            משפחה מארחת
          </button>
          <button
            onClick={() => setFamilyType("guest")}
            className={`p-1 px-6 rounded duration-75 ${
              familyType == "guest"
                ? "bg-btn text-white"
                : "bg-form text-slate-600"
            }`}
          >
            משפחה מתארחת
          </button>
        </div>
      </section>
      <form className="flex flex-col gap-8">
        <section
        ref={formRef}
          action="#"
          className="grid grid-cols-1 lg:grid-cols-3 w-full gap-8 bg-white p-2 md:p-6 lg:p-14 shadow-md [&_input]:rounded-md [&_input]:bg-slate-200 [&_input]:p-2 [&_label]:text-slate-800 [&_label]:text-md"
        >
          <article className="w-full flex flex-col gap-8">
            <h1 className="font-bold text-btn text-lg border-b border-btn py-2 mb-4">
              פרטי משפחה
            </h1>
            <InputContainer>
              <label htmlFor="name">שם מלא של נציג / נציגת המשפחה</label>
              <input className="w-full" required minLength={3} maxLength={20} type="text" name="name" />
            </InputContainer>
            <InputContainer>
              <label htmlFor="phone">טלפון של נציג / נציגת המשפחה</label>
              <div className="w-full flex bg-slate-200 border-2 focus-within:border-black box-border border-transparent rounded-md items-center pl-2">
                <input
                required
                  minLength={9}
                  maxLength={9}
                  type="tel"
                  name="phone"
                  className="focus:outline-none grow"
                />
                <i className="bg-slate-400 w-px h-6 mx-1"></i>
                <span className="text-slate-600">972+</span>
              </div>
            </InputContainer>
            <InputContainer>
              <label htmlFor="address">כתובת המשפחה המארחת</label>
              <input className="w-full" minLength={5} required type="text" name="address" />
            </InputContainer>
          </article>
          <article className="w-full flex flex-col gap-8">
            <h1 className="font-bold text-btn text-lg border-b border-btn py-2 mb-4">
              אנא ספרו קצת על עצמכם
            </h1>
            <InputContainer>
              <label htmlFor="children">
                כמה ילדים יש במשפחה ובאילו גילאים
              </label>
              <input className="w-full" required type="text" name="children" />
            </InputContainer>
            <InputContainer>
              <label htmlFor="description">תאר בקצרה את משפחתך</label>
              <input className="w-full" required minLength={10} type="text" name="description" />
            </InputContainer>
            <InputContainer>
              <label>תאריך אירוח</label>
                <div className="flex [&_input]:grow gap-8 items-center">
                  <label htmlFor="date-start">מ-</label>
                  <input className="grow text-slate-500 focus:text-black" required type="date" name="date-start" />
                  <label htmlFor="date-end">עד-</label>
                  <input className="grow text-slate-500 focus:text-black" required type="date" name="date-end" />
                </div>
            </InputContainer>
          </article>
          <article className="w-full flex flex-col">
            <h1 className="font-bold text-btn text-lg border-b border-btn py-2 mb-4 gap-8">
              העדפות תזונתיות
            </h1>
            <div className="flex flex-col grow justify-start gap-4">
              <label htmlFor="nutrition">האם יש אצלכם הגבלות תזונתיות כלשהן? טבעוני? צמחוני? רגישויות וכדומה...</label>
              <textarea className="bg-slate-200 w-full resize-none" name="nutrition" id="" cols="30" rows="10"></textarea>
            </div>
          </article>
        </section>
        <button onClick={handleSubmit} className="w-full bg-btn font-bold text-2xl p-4 text-center rounded-md text-white shadow-md">
          לשליחת השאלון
        </button>
      </form>
    </div>
  );
};
