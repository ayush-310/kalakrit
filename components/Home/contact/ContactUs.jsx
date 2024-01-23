import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <section className="w-full bg-[#100f13]">
      {/* <div className="xl:w-1/2 lg:w-3/4 md:w-3/4 w-11/12 sm:h-auto h-[auto] m-auto flex gap-6 md:gap-8 lgLgap-10 xl:gap-12 flex-col  sm:justify-center">
          <div className="flex  sm:w-11/12 m-auto ">
            <h1 className="font-medium text-center lg:text-6xl md:text-4xl sm:text-2xl  text-2xl text-[#f6f6f6] drop-shadow-2xl">
              Want to know how we can help your business?
            </h1>
          </div>

          <div className="flex flex-col sm:gap-4 md:flex-row justify-center items-center ">
          <div>
          <h1 className="text-[#f6f6f6] font-normal lg:text-3xl md:text-xl text-md">
            Reach us:
            <span className="text-[#eb5a00]"> contact@kalakrit.in</span>
          </h1>
          </div>
            <Link
              href="/contact-us"
              className="bg-[#eb5a00] lg:text-3xl w-fit mt-8 sm:mt-0 md:text-xl text-md text-[#ffffff] font-normal rounded-sm shadow-sm md:p-2.5 p-1.5 hover:bg-transparent hover:border  "
            >
              Contact Us
            </Link>
          </div>
        </div> */}
      <div className="w-[84.72%] mx-auto pt-[5.94rem] pb-[9.38rem] box-border grid grid-cols-3 gap-10">
        <div className="col-span-1">
          <div className="flex flex-col gap-24">
            <h3 className="text-[#F6F6F6] font-Poppins text-[4.375em] tracking-tighter">
              reach out <br /> <span className="text-[#EB5A00]">to us. </span>
            </h3>
            <div className="flex flex-col gap-[2.62rem] text-[#F6F6F6] text-3xl font-Poppins">
              <span className="flex items-center gap-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path
                    d="M28.4993 15.4375H26.1243C26.1233 14.493 25.7476 13.5875 25.0798 12.9196C24.4119 12.2517 23.5063 11.8761 22.5618 11.875V9.50001C24.136 9.50181 25.6452 10.1279 26.7583 11.241C27.8714 12.3542 28.4975 13.8633 28.4993 15.4375Z"
                    fill="#F6F6F6"
                  />
                  <path
                    d="M33.2493 15.4375H30.8743C30.8719 13.2337 29.9953 11.1208 28.4369 9.5624C26.8786 8.00403 24.7657 7.12746 22.5618 7.12501V4.75001C25.3954 4.75316 28.1119 5.88017 30.1156 7.88378C32.1192 9.8874 33.2462 12.604 33.2493 15.4375Z"
                    fill="#F6F6F6"
                  />
                  <path
                    d="M24.1451 25.5102L26.8051 22.8502C27.1611 22.4941 27.6138 22.2503 28.1071 22.149C28.6003 22.0476 29.1125 22.0933 29.5801 22.2802L32.8197 23.5762C33.2972 23.7672 33.7065 24.097 33.9948 24.5229C34.283 24.9489 34.437 25.4515 34.4368 25.9658V31.8573C34.4376 32.2075 34.367 32.5541 34.2291 32.876C34.0913 33.1979 33.8893 33.4882 33.6353 33.7293C33.3814 33.9704 33.0809 34.1571 32.7523 34.278C32.4237 34.3989 32.0739 34.4515 31.7242 34.4325C9.01696 33.0189 4.43119 13.7886 3.57916 6.42189C3.53794 6.06179 3.57342 5.69703 3.6833 5.35163C3.79317 5.00623 3.97493 4.688 4.21663 4.41789C4.45832 4.14778 4.75447 3.93191 5.08559 3.78448C5.41671 3.63705 5.77529 3.5614 6.13775 3.56251H11.9242C12.4384 3.5625 12.9409 3.71658 13.3667 4.00487C13.7925 4.29316 14.1221 4.70244 14.3131 5.17989L15.609 8.41939C15.796 8.88694 15.8416 9.39907 15.7403 9.89231C15.639 10.3856 15.3951 10.8382 15.039 11.1942L12.379 13.8542C12.379 13.8542 13.8535 24.2238 24.1451 25.5102Z"
                    fill="#F6F6F6"
                  />
                </svg>
                <a href="tel:+917011845899">+91 701 1845899</a>
              </span>

              <span className="flex items-center gap-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                >
                  <path
                    d="M4.75033 4.75H33.2503C34.1248 4.75 34.8337 5.45889 34.8337 6.33333V31.6667C34.8337 32.5411 34.1248 33.25 33.2503 33.25H4.75033C3.87588 33.25 3.16699 32.5411 3.16699 31.6667V6.33333C3.16699 5.45889 3.87588 4.75 4.75033 4.75ZM19.0963 18.4979L8.94176 9.87636L6.89223 12.2903L19.1161 22.6687L31.1198 12.2806L29.0475 9.88608L19.0963 18.4979Z"
                    fill="#F6F6F6"
                  />
                </svg>
                <a href="mailto:contact@kalakrit.in">contact@kalakrit.in</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <h1 className="font-medium text-center lg:text-6xl md:text-4xl sm:text-2xl  text-2xl text-[#f6f6f6] drop-shadow-2xl">
           contact form
          </h1>
          <form>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
