import React from "react";
import { FormBody } from "./FormBody";

export const FromContainer = () => {
  return (
    <div className="w-full flex justify-center items-center bg-form py-20">
      <article className="flex flex-col gap-12 container xl:w-3/4">
        <section className="flex flex-col items-center gap-6">
          <h1 className="text-xl font-semibold">
            נשמח למילוי השאלון וניצור אתכם קשר בהקדם
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.7"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </section>
        <section><FormBody /></section>
      </article>
    </div>
  );
};
