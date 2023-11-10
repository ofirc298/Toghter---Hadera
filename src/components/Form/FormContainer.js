import React from "react";
import { FormBody } from "./FormBody";

export const FormContainer = () => {
  return (
    <div className="w-full flex justify-center items-center bg-form py-2 sm:py-8 md:py-16 lg:py-20">
      <article className="flex flex-col gap-12 container xl:w-3/4">
        <section className="flex flex-col items-center gap-6">
          <h1 className="text-xl font-semibold">
            נשמח למילוי השאלון וניצור אתכם קשר בהקדם
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.7}
            className="w-8 h-8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 5.25-7.5 7.5-7.5-7.5m15 6-7.5 7.5-7.5-7.5"
            />
          </svg>
        </section>
        <section>
          <FormBody />
        </section>
      </article>
    </div>
  );
};

