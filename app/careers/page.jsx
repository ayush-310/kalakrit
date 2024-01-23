import Link from "next/link";
import React from "react";
import { LiaCloudUploadAltSolid } from "react-icons/lia";

const Careers = () => {
  return (
    <section>
      <div className="w-full pb-6 font-Poppins">
        <div className="bg-[url('/about/career/career.jpg')] md:h-[480px] h-[300px] opacity-800 backdrop-blur-sm w-full bg-center md:bg-cover bg-no-repeat flex items-center justify-center">
          <div className="space-y-3 mx-auto w-fit">
            <h1 className="text-white text-[3.125rem] font-bold text-center">
              Come Grow With Us
            </h1>
            <h1 className="text-[#ffffff] text-center text-sm md:text-base">
              If you love to make a difference,and have fun while at it, <br /> reach
              out to us and join our great country
            </h1>
          </div>
        </div>

        <section className="w-full h-fit">

          <div className="w-[78.2%] mx-auto my-[4.38rem]">
            <h2 className="text-center font-semibold font-Poppins leading-10 tracking-tight text-xl md:text-3xl text-blackText-200">
              Fill this form to <span className="text-[#EB5A00]">apply</span>
            </h2>

            <form className="mt-[3.12rem] w-full">
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-blackText-200 "
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  id="full_name"
                  className="border border-solid border-blackText-200 focus:outline-none text-blackText-200 text-sm rounded-full block w-full p-2.5 dark:text-white "
                  placeholder=""
                  required=""
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-blackText-200 dark:text-white"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-solid border-blackText-200 focus:outline-none text-blackText-200 text-sm rounded-full block w-full p-2.5 dark:text-white "
                  required=""
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="mobile"
                  className="block mb-2 text-sm font-medium text-blackText-200 dark:text-white"
                >
                  Mobile/Phone*
                </label>
                <input
                  type="text"
                  id="mobile"
                  className="border border-solid border-blackText-200 focus:outline-none text-blackText-200 text-sm rounded-full block w-full p-2.5 dark:text-white "
                  required=""
                />
              </div>
              <div className="mb-6 flex space-x-3">
                <div className=" text-blackText-200 text-sm  block lg:w-1/4 w-full p-2.5 dark:text-white space-x-3">
                  <input type="checkbox" />
                  <span>Employee</span>
                </div>
                <div className="text-blackText-200 text-sm block lg:w-1/4 w-full p-2.5 dark:text-white space-x-3">
                  <input type="checkbox" />
                  <span>Freelancer</span>
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-blackText-200 "
                >
                  Upload Resume/Portfolio*
                </label>
                <div className="max-w-xl ">
                  <label className="flex justify-center w-full h-40 px-4 transition border-2 border-solid border-blackText-200 border-dashed rounded-sm appearance-none cursor-pointer  focus:outline-none">
                    <span className="flex items-center space-x-2">
                      <div className="flex flex-col space-y-4 jutify-center items-center">
                        <span className="font-medium text-blackText-200">
                          Drag & Drop files here
                        </span>
                        <span className="font-medium text-blackText-200">or</span>

                        <div className="w-3/4 ">
                          <input
                            type="file"
                            name="file_upload"
                            className="text-[#F6F6F6a1] "
                          />
                        </div>
                      </div>
                    </span>
                  </label>
                </div>
              </div>

              <div className="mb-6 h-auto">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-blackText-200 dark:text-white"
                >
                  Message*
                </label>
                <textarea className="max-h-80 rounded-lg border border-solid border-blackText-200 focus:outline-none text-blackText-200 text-sm  block w-full p-10"></textarea>
              </div>

              <div className="w-full">
                <button
                  type="submit"
                  className="text-white bg-[#Eb5A00] focus:outline-none  font-medium  text-sm w-full sm:w-auto md:w-1/3 px-6 py-4 text-center"
                >
                  Submit
                </button>
              </div>

            </form>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Careers;
