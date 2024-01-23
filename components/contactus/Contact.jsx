import React from "react";
import { HiLocationMarker } from "react-icons/hi";

const Contact = () => {
  return (
    <section className="w-full">
      <div className=" w-full bg-[#100F13] mx-auto h-auto font-Poppins">
        <div className="image md:w-10/12 lg:py-20 full mx-auto md:h-auto border-b border-blackText-200 ">
          <div className="w-11/12 mx-auto">
            <div className="flex justify-end 1">
              <div className="row1 w-3/4 justify-between flex">
                <div className="img1">
                  <img
                    src="/contactus/Ellipse 127.png"
                    alt=""
                    className="lg:h-[140px] lg:w-[140px] h-[60px] w-[60px] md:h-[100px] md:w-[100px]"
                  />
                </div>
              </div>
              <div className="img2">
                <img
                  src="/contactus/Ellipse 129.png"
                  alt=""
                  className="lg:h-[140px] lg:w-[140px] h-[60px] w-[60px] md:h-[100px] md:w-[100px] md:h-[100px] md:w-[100px]"
                />
              </div>
            </div>
            <div className="row2 w-1/2 lg:w-1/2 md:w-2/3 mx-auto  flex justify-between relative">
              <div className="img1">
                <img
                  src="/contactus/Ellipse 130.png"
                  alt=""
                  className="lg:h-[140px] lg:w-[140px] h-[60px] w-[60px] md:h-[100px] md:w-[100px] md:h-[100px] md:w-[100px]"
                />
              </div>
              <div className="xl:text-5xl lg:text-4xl md:text-3xl text-lg   text-[#FFFFFF] flex items-center justify-center">
                <span className="xl:-ml-36 lg:-ml-28 md:-ml-20 -ml-10 font-bold md:-mt-12">
                  Contact Us
                </span>
              </div>
              <div className="img2">
                <img
                  src="/contactus/Ellipse 128.png"
                  alt=""
                  className="lg:h-[140px] lg:w-[140px] h-[60px] w-[60px] lg:-mt-16 md:-mt-10 -mt-4 md:h-[100px] md:w-[100px]"
                />
              </div>
            </div>
            <div className="flex justify-start 1">
              <div className="row1 w-3/4 justify-between flex">
                <div className="img1">
                  <img
                    src="/contactus/Ellipse 132.png"
                    alt=""
                    className="lg:h-[140px] lg:w-[140px] h-[60px] w-[60px] md:h-[100px] md:w-[100px]"
                  />
                </div>
              </div>
              <div className="img2">
                <img
                  src="/contactus/Ellipse 133.png"
                  alt=""
                  className="lg:h-[140px] lg:w-[140px] h-[60px] w-[60px] md:h-[100px] md:w-[100px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-10/12 w-full mx-auto h-auto font-Poppins">
        <div className="w-full mx-auto">
          <div className="content w-full mx-auto pt-20 space-y-10">
            <div className="lg:text-5xl md:text-3xl text-2xl border-solid border-b border-blackText-200 text-blackText-200 py-6">
              <span>Let's Discuss</span>
            </div>
            <div className="border-solid border-b border-blackText-200 text-blackText-200 flex flex-wrap md:flex-no-wrap">
              <div className="md:w-1/2 w-full">
                <h1 className="lg:text-5xl md:text-3xl text-2xl border-solid border-b md:border-none py-5 md:py-0 border-blackText-200">
                  Your Project
                </h1>
              </div>
              <div className="md:w-1/2 w-full flex flex-col space-y-3 py-8 md:py-3">
                <span className="md:text-xl text-base  text-[#EB5A00] ">
                  contact@kalakrit.in | +91742836081
                </span>
              </div>
            </div>
          </div>
          <div className="last w-full h-auto mx-auto flex justify-between flex-wrap mmd:flex-no-wrap py-4">
            <div className="left md:w-2/6 pr-4 w-full flex flex-col justify-center items-center h-auto">
              <div className="">
                <div className="flex">
                  <div className="space-y-2">
                    <div className="flex space-x-3">
                      <HiLocationMarker className="text-[#EB5A00] md:text-3xl text-2xl" />
                      <span className="text-[#EB5A00] md:text-2xl text-lg">
                        Gurugram Office
                      </span>
                    </div>
                    <p className="text-blackText-200 md:text-base text-sm ml-10">
                      B198 Shushant Lok 1, Sector 43, Gurugram, Haryana, India
                    </p>
                  </div>
                </div>
                <div className="flex mt-6">
                  <div className="space-y-2">
                    <div className="flex space-x-3">
                      <HiLocationMarker className="text-[#EB5A00] md:text-3xl text-2xl" />
                      <span className="text-[#EB5A00]  md:text-2xl text-lg">
                        Delhi Office
                      </span>
                    </div>
                    <p className="text-blackText-200 md:text-base text-sm ml-10">
                      498/5 Mehrauli New Delhi, 110030, India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right md:w-3/6 w-full">
              <form className="mt-6">
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="email"
                    name="full_name"
                    id="full_name"
                    class="block py-2.5 px-0 w-full text-sm text-blackText-200 bg-transparent border-solid border-b border-blackText-200 appearance-none  dark:focus:border-blackText-200 focus:outline-none focus:ring-0 focus:border-blackText-200 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="full_name"
                    class="peer-focus:font-medium absolute text-sm text-blackText-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blackText-200  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Full Name *
                  </label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    class="block py-2.5 px-0 w-full text-sm text-blackText-200 bg-transparent border-solid border-b border-blackText-200 appearance-none  dark:focus:border-blackText-200 focus:outline-none focus:ring-0 focus:border-blackText-200 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="phone_number"
                    class="peer-focus:font-medium absolute text-sm text-blackText-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blackText-200  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone Number *
                  </label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="block py-2.5 px-0 w-full text-sm text-blackText-200 bg-transparent border-solid border-b border-blackText-200 appearance-none  dark:focus:border-blackText-200 focus:outline-none focus:ring-0 focus:border-blackText-200 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="full_name"
                    class="peer-focus:font-medium absolute text-sm text-blackText-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blackText-200  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email *
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <textarea
                    id="message"
                    name="message"
                    className="block py-2.5 px-0 w-full text-sm text-blackText-200 bg-transparent border-solid border-b border-blackText-200 dark:focus:border-blackText-200 focus:outline-none focus:ring-0 focus:border-blackText-200 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="message"
                    className="peer-focus:font-medium absolute text-sm text-blackText-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blackText-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Tell us about your project or anything you wish *
                  </label>
                </div>
                <div className="mb-6 z-0 w-full group">
                  <button className="py-4 bg-[#EB5A00] w-full rounded-xl font-semibold text-[#FFFFFF]">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
