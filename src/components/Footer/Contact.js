import React from "react";

export const Contact = () => {
  return (
    <div className="h-[163px] sm:h-[235px] sm:text-2xl text-center text-slate-900 flex justify-center items-center">
      <article className="flex flex-col items-center">
        <p className="">לשאלות נוספות,</p>
        <p>מוזמנים לפנות אלי נורית מנחם</p>
        <a
          className="px-4 py-3 items-center flex flex-nowrap rounded-md bg-btn shadow-slate-500 shadow-lg text-white gap-3 mt-3"
          href="https://wa.me/+972543427777"
          target="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={28}
            height={28}
            fill="none"
          >
            <g clipPath="url(#a)">
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M17.343 15.637c-.53.216-.869 1.046-1.212 1.47-.176.217-.386.25-.657.142-1.99-.792-3.514-2.12-4.611-3.95-.186-.284-.153-.508.071-.772.332-.39.748-.834.838-1.36.2-1.164-1.322-4.773-3.332-3.138-5.781 4.712 9.645 17.207 12.43 10.449.787-1.916-2.65-3.201-3.527-2.841ZM14 25.554c-2.045 0-4.057-.543-5.818-1.572a1.23 1.23 0 0 0-.94-.124l-3.828 1.05 1.333-2.937c.181-.4.135-.865-.122-1.22A11.469 11.469 0 0 1 2.445 14C2.445 7.628 7.628 2.445 14 2.445S25.554 7.628 25.554 14c0 6.371-5.183 11.554-11.554 11.554ZM14 0C6.28 0 0 6.28 0 14c0 2.716.771 5.324 2.236 7.587L.11 26.271A1.223 1.223 0 0 0 1.223 28c.788 0 5.089-1.351 6.183-1.652A13.99 13.99 0 0 0 14 28c7.72 0 14-6.28 14-14S21.72 0 14 0Z"
                clipRule="evenodd"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h28v28H0z" />
              </clipPath>
            </defs>
          </svg>
          <p>054-3427777</p>
        </a>
      </article>
    </div>
  );
};
