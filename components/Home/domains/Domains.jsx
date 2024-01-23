import React from "react";
import { domainData } from "./domain";

const Domains = () => {
  // dark mode background: bg-[#201f22]
  return (
    <>
      <div className="py-12 lg:my-32 w-full lg:px-[3.75rem]">
        <div className="w-full px-4 flex flex-col gap-10">
          <div className="flex flex-col gap-10">
            {/* <h1 className="text-[#ffffff] text-4xl font-semibold">
              Multiple Domains
            </h1> */}

            <h2 className="w-fit text-blackText-200 text-4xl font-semibold font-Poppins leading-10 tracking-wide">
              Multiple Domains
            </h2>
            <p className="w-full md:w-10/12 lg:w-full text-blackText-200 text-opacity-80 text-2xl font-Poppins leading-10 tracking-wide xl:text-lg">
              Kalakrit has designed its localization solutions according to 15
              different Domains, what we have done is extensively train and
              assess linguists according to the mentioned domains along with
              creating pre-set guidelines to help our clients and maintain
              quality practices.
            </p>
          </div>
          <div className=" w-full md:w-11/12 lg:w-full flex gap-3 md:gap-4 flex-wrap">
            {domainData?.data.map((domain) => (
              <button
                key={domain.id}
                className="box-border w-fit h-20 px-[3.13em] bg-blackText-200 shadow flex justify-center items-center gap-2.5 cursor-pointer"
              >
                <img
                  src={domain.icon}
                  alt={domain.title}
                  className="w-6 h-auto"
                />
                <span className="text-white text-sm xl:text-2xl tracking-tight font-light">
                  {domain.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Domains;
