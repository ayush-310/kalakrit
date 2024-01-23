import React, { Fragment } from "react";
import { benefits } from "./benefits";
import { processes } from "./controlProcesses";
import Image from "next/image";
import Link from "next/link";

// dark mode background: bg-[#100f13]

export default function QualityControl() {
  return (
    <section className="w-full">
      <div className="my-36 w-[84.72%] mx-auto grid grid-cols-2 gap-[8.56em]">
        <div className="col-span-1">
          <div className="relative">
            <Image
              src="/qualityControl/undraw_winners_re_wr1l.svg"
              className="absolute left-[12.81rem] top-[-6.12rem]"
              width="300"
              height="300"
            />
          </div>

          <div className="flex flex-col gap-5 mt-72">
            <h3 className="text-blackText-200 text-3xl font-semibold font-Poppins leading-10 tracking-wide">
              Costing
            </h3>
            <ul className="w-full flex flex-col gap-3">
              {benefits?.data.map((benefit) => (
                <li
                  className="list-disc text-blackText-200 text-2xl font-Poppins leading-10 tracking-wide"
                  key={benefit.id}
                >
                  {benefit.benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-1">
          <h3 className="mb-12 flex items-center justify-end">
            <span className="text-blackText-200 text-3xl font-semibold font-Poppins leading-10 tracking-wide">
              4-step
            </span>
            <span className="text-[#EB5A00] text-3xl font-semibold font-Poppins leading-10 tracking-wide">
              &nbsp;Quality
            </span>
            <span className="text-blackText-200 text-3xl font-semibold font-Poppins leading-10 tracking-wide">
              &nbsp;Control Process
            </span>
          </h3>
          <ul className="w-full flex flex-col gap-10">
            {processes?.data.map((process) => (
              <Fragment key={process.id}>
                {process.id % 2 !== 0 ? (
                  <li
                    style={{ transform: `translateX(${process.shift}px)` }}
                    className="relative w-96 h-32 flex pl-10 box-border items-center bg-blackText-200 rounded shadow"
                  >
                    <Link href="/" className="absolute right-6 top-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                      >
                        <path
                          d="M8.125 4.875V6.5H18.3544L4.875 19.9794L6.02062 21.125L19.5 7.64562V17.875H21.125V4.875H8.125Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                    <div className="flex gap-2 w-fit items-center">
                      <span className="bg-[#EB5A00] w-11 h-11 flex items-center justify-center text-white text-3xl font-semibold font-Poppins leading-10 tracking-wide rounded-full">
                        {process.id}
                      </span>

                      <span className="text-white text-xl font-semibold font-Poppins leading-10 tracking-wide">
                        {process.process}
                      </span>
                    </div>
                  </li>
                ) : (
                  <li
                    style={{ transform: `translateX(${process.shift}px)` }}
                    className="relative w-96 h-32 flex pl-10 box-border items-center bg-[#EB5A00] rounded shadow"
                  >
                    <Link href="/" className="absolute right-6 top-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                      >
                        <path
                          d="M8.125 4.875V6.5H18.3544L4.875 19.9794L6.02062 21.125L19.5 7.64562V17.875H21.125V4.875H8.125Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                    <div className="flex gap-2 w-fit items-center">
                      <span className="bg-blackText-200 w-11 h-11 flex items-center justify-center text-white text-3xl font-semibold font-Poppins leading-10 tracking-wide rounded-full">
                        {process.id}
                      </span>
                      <span className="text-white text-xl font-semibold font-Poppins leading-10 tracking-wide">
                        {process.process}
                      </span>
                    </div>
                  </li>
                )}
              </Fragment>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
