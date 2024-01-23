import React from "react";

// dark mode background: bg-[#100f13]

export default function NewsLetter() {
  return (
    <section id="newsletterBg" className="w-full h-full flex flex-col justify-center items-center">
      <div className="mx-auto w-[44.312rem] flex flex-col gap-y-8">
        <h2 className="text-white text-center text-4xl font-extrabold font-['Nunito Sans'] leading-9">
          Stay Updated
        </h2>
        <p className="w-full text-white text-2xl text-center font-normal font-['Nunito Sans'] leading-10">
          Stay updated with new features, product development and offers or to
          receive our newsletters on our services.
        </p>
      </div>
    </section>
  );
}
