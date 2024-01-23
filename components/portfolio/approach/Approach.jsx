import React from "react";
import { approach } from "./kalakritApproach";

const Approach = () => {
  return (
    <section className="w-full mt-[3rem] mb-36">
      <div className="mx-auto w-[89%] flex flex-col gap-8">
        {approach?.data.map((approach) => (
          <div key={approach.id} className="w-full flex flex-col gap-4">
            <h3 className="w-fit text-blackText-200 text-4xl font-semibold font-Poppins tracking-widest">
              {approach.title}
            </h3>
            <p className="w-full text-blackText-200 text-2xl font-normal font-Poppins leading-10 tracking-wide">
              {approach.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Approach;
