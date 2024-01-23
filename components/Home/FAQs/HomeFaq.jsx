import React from "react";
import HomeAccordion from "./HomeAccordion";
import { faqs } from "./faqs";

// dark mode background: bg-[#100f13]

export default function HomeFaq() {
  return (
    <section className="w-full my-32">
      <div className="w-full mt-3 mb-2">
        <h2 className="w-fit mx-auto text-blackText-200 text-4xl font-semibold leading-10 tracking-tight font-Poppins">
          Frequently asked questions
        </h2>
      </div>

      <div className="mt-16 w-[85.49%] mx-auto">
        {faqs?.data.map((faq) => (
          <HomeAccordion key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
}
