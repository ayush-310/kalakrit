// "use client";
// import React, { useState } from 'react';
import Link from "next/link";
import React from "react";
// import { Parallax } from "react-scroll-parallax";
// import { ParallaxProvider } from "react-scroll-parallax";
import "../hero/hero.css";
// import ''

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
const LandingPage = () => {


  // const [currentIndex, setCurrentIndex] = useState(0);

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + 2) % 2);
  // };

  return (
    <section>
      <div className=" mx-auto imge relative flex justify-start items-center">
        {/* <ParallaxProvider>
        <div id="wrapper">
          <div id="content" className="flex relative ">
            <div className="relative w-1/2 h-[60vh] sm:h-[60vh] md:h-[70vh]  lg:h-[100vh] bg-[url('/landingPage/582ddc857c49ad0a27800887_bg-home-aboutus.jpg')] shadow-lg bg-no-repeat bg-cover flex justify-center items-center">
              <div className="absolute left-[40%]  top-[30%] lg:top-[23%] w-3/4 h-auto">
                <Parallax speed={50} translateX={[0, -50]} translateY={[30, 0]}>
                  <div className="w-full flex ">
                    <img
                      src="/landingPage/landing_page_kalakrit.png"
                      alt="landing page"
                      className=" opacity-80"
                    />
                  </div>
                </Parallax>
              </div>

              <div className="text-[#f6f6f6] text-xs sm:text-sm lg:text-xl font-thin sm:font-light mt-40 sm:mt-60 md:mt-72  xl:mt-96 py-10">
                <li>Translation and Localization</li>
                <li>Voiceover and Dubbing</li>
                <li>Transcription</li>
              </div>
            </div>

            <div
              className={`w-1/2   relative h-[60vh] sm:h-[60vh] md:h-[70vh]   lg:h-[100vh] bg-[url('/landingPage/startup_dark.jpg')] bg-no-repeat bg-cover flex py-20`}
            >
              <div className="absolute top-[25%]  lg:top-[15%] w-full h-auto">
                <Parallax speed={50} translateX={[-20, 0]} translateY={[30, 0]}>
                  <img
                    src="/landingPage/main-parallax.png"
                    alt="parallax"
                    className=""
                  />
                </Parallax>
              </div>
            </div>

            <div className="absolute w-full -bottom-52 sm:-bottom-60 lg:-bottom-72 left-0">
              <div className="w-full lg:w-11/12 h-auto flex m-auto justify-between">
                <Parallax
                  speed={0}
                  translateX={[0, 10]}
                  className="bg-[#ffffff] shadow-lg border w-1/2  md:w-2/6  h-[250px] lg:h-[350px]"
                >
                  <div className="font-Poppins lg:p-8 p-4 flex flex-wrap gap-4 lg:gap-8">
                    <h1 className="text-md sm:text-xl  lg:text-3xl font-light ">
                      GLOBAL LANGUAGE COVERAGE 
                    </h1>
                    <h3 className="text-xs sm:text-sm lg:text-md sm:font-normal">
                      In an increasingly interconnected world, effective
                      communication is paramount. Whether you're a multinational
                      
                    </h3>

                    <Link
                      href="/"
                      className="flex justify-center w-11/12 items-center "
                    >
                      <div className="bg-[#100f13] hover:bg-[#eb5a00] hover:text-[#ffffff] hover:border-2 hover:border-white rounded-md text-center py-2 sm:mt-4 md:mt-2 lg:mt-0   px-3   text-[#ffffff]">
                        Learn More
                      </div>
                    </Link>
                  </div>
                </Parallax>

                <Parallax
                  speed={100}
                  translateY={[0, -50]}
                  className="bg-[#303030] hidden md:block w-[30%] md:w-2/6 text-[#ffffff]  shadow-md h-[250px] lg:h-[350px]"
                >
                  <div className="font-Poppins lg:p-8 p-4 flex flex-wrap gap-8">
                    <h1 className="text-xl lg:text-3xl font-light ">
                      GLOBAL LANGUAGE COVERAGE 
                    </h1>
                    <h3 className="text-sm lg:text-md font-light">
                      In an increasingly interconnected world, effective
                      communication is paramount. Whether you're a multinational
                     
                    </h3>

                    <Link
                      href="/"
                      className="flex justify-center w-11/12 items-center "
                    >
                      <div className="border-2 border-[#ffffff] hover:text-[#eb5a00] rounded-md text-center py-2   px-3   text-[#ffffff]">
                        Learn More
                      </div>
                    </Link>
                  </div>
                </Parallax>

                <Parallax
                  speed={0}
                  translateX={[0, -10]}
                  className="bg-[#100f13]  text-[#ffffff] md:text-black  md:bg-[#f6f6f6] w-1/2 md:w-2/6  shadow-lg border h-[250px] lg:h-[350px]"
                >
                  <div className="font-Poppins lg:p-8 p-4 flex flex-wrap gap-4 lg:gap-8 ">
                    <h1 className="text-md sm:text-xl lg:text-3xl font-light ">
                      GLOBAL LANGUAGE COVERAGE 
                    </h1>
                    <h3 className="text-xs sm:text-sm md:text-sm lg:text-md font-light sm:font-normal md:font-light ">
                      In an increasingly interconnected world, effective
                      communication is paramount. Whether you're a multinational
                      
                    </h3>

                    <Link
                      href="/"
                      className="flex justify-center w-11/12 items-center "
                    >
                      <div className="md:bg-[#100f13] bg-[#eb5a00] hover:bg-[#100f13]   md:hover:bg-[#eb5a00] hover:text-[#ffffff] hover:border-2 hover:border-white  rounded-md text-center py-2 sm:mt-4 md:mt-0  px-3   text-[#ffffff]">
                        Learn More
                      </div>
                    </Link>
                  </div>
                </Parallax>
              </div>
            </div>
          </div>
        </div>
       </ParallaxProvider> */}
        <div className="mt-20 mb-[4.38rem] grid grid-cols-1 ml-8">
          <h1 className="w-full  flex justify-center h-fit text-center text-white text-[3.625rem] font-Poppins font-semibold">
            Want to know how we  can <br /> help your business?
          </h1>

          <p className=" gap-3 text-center text-[2rem]">
            <span className="text-orange-600 font-semibold font-Poppins tracking-wide">
              Reach us:
            </span>
            <span className="text-blackText-200 font-Poppins tracking-wider text-white">
              contact@kalakrit.in
            </span>
          </p>
          {/* <Link href="/" className="w-[18.44rem] h-20 flex justify-center items-center text-white text-2xl font-semibold font-Poppins tracking-wider bg-orange-600 rounded">
              Contact Us
            </Link> */}
        </div>

        {/* Banner  */}

      </div>



      {/* Clients  */}
      {/* <div className="slider-container">
        <div className="slider-arrow" onClick={prevSlide}>
          &lt; First Arrow
        </div>
        <div className="slider">
          <div
            className="slider-inner"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="row w-[10%] flex">
              <img src="/landingPage/youtube.png" alt="" />
              <img src="/landingPage/youtube.png" alt="" />
              <img src="/landingPage/youtube.png" alt="" />
              <img src="/landingPage/youtube.png" alt="" />
              <img src="/landingPage/youtube.png" alt="" />
              <img src="/landingPage/youtube.png" alt="" />
            </div>
            <div className="row w-[10%] flex">
              <img src="/landingPage/youtube.png" alt="" />
              <img src="/landingPage/youtube.png" alt="" />
              <img src="/landingPage/youtube.png" alt="" />
              <img src="/landingPage/youtube.png" alt="" />
              <img src="/landingPage/youtube.png" alt="" />
              <img src="/landingPage/youtube.png" alt="" />
            </div>
          </div>
        </div>
        <div className="slider-arrow" onClick={nextSlide}>
          Second Arrow &gt;
        </div>
      </div> */}
      {/* <img src="/landingPage/youtube.png" alt="" /> */}

      <div className=" grid lg:grid-cols-2 sm:grid-cols-1 sm:w-[100%] p-8 bg-[black] pp">
        <div className="flex justify-center items-center">
          <div className="w-[100px]">
            <img src="/landingPage/small_img.png" className="w-[100%]" alt="" />
          </div>
          <div className="heading">
            <p className="text-white mx-6"><span className="font-semibold">Upload your file: </span> our translators <br />
              start most orders within 20 minutes!</p>
          </div>
        </div>
        <div className="text-white flex justify-center items-center">
          <button>
            <Link href="/" className="flex justify-center items-center small text-white font-semibold font-Poppins tracking-wider bg-orange-600 rounded">
              ORDER NOW
            </Link>
          </button>
          <button>
            <Link href="/" className="flex justify-center items-center small text-white font-semibold font-Poppins tracking-wider bg-orange-600 rounded">
              CONTACT US
            </Link>
          </button>
        </div>
      </div>

      <div className="w-[100%] grid lg:grid-cols-2 sm:grid-cols-1 bg-[white]  my-20">
        <div className="flex  flex-col justify-around m-4 ">
          <h1 className="flex justify-center  text-center font-size-[35px]  text-[35px] font-Poppins font-semibold">
            High-quality translation solutions
          </h1>
          <p className="text-center mt-4 mb-10 text-[18px]">Our intuitive translation platform allows companies  of any size to order
            cost-efficient translations from professional translators.
          </p>
          <p className="text-center text-[green]">Read our Quality Guarantee →</p>
        </div>
        <div className="p-10 flex justify-center">
          <img src="/landingPage/explainer_video.png" alt="" />
        </div>
      </div>

      <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 text-white my-10 p-10 bg-[black]">

        <div className="p-4">
          <div className=" bdr">
            <div>
              <h1 className="font-bold text-[26px] text-orange-600">Fast turnaround</h1>

              <p className="my-10">
                Our transparent per-word pricing is a fraction of the cost of traditional agencies so you can drive business in new markets at competitive rates.</p>
            </div>
            <div className="font-semibold">
              <p className="flex">
                <FontAwesomeIcon icon={faCheck} className="ss" />No add-ons or minimum spend</p>
              <p className="flex">
                <FontAwesomeIcon icon={faCheck} className="ss" />
                Competitive pricing</p>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="bdr">
            <div>
              <h1 className="font-bold text-[26px] text-orange-600">Fast turnaround</h1>
              <p className="my-10">Our transparent per-word pricing is a fraction of the cost of traditional agencies so you can drive business in new markets at competitive rates.</p>
            </div>
            <div className="font-semibold">
              <p className="flex">
                <FontAwesomeIcon icon={faCheck} className="ss" />
                No add-ons or minimum spend</p>
              <p className="flex">
                <FontAwesomeIcon icon={faCheck} className="ss" />
                Competitive pricing</p>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className=" bdr">
            <div>
              <h1 className="font-bold text-[26px] text-orange-600">Fast turnaround</h1>
              <p className="my-10">Our transparent per-word pricing is a fraction of the cost of traditional agencies so you can drive business in new markets at competitive rates.</p>
            </div>
            <div className="font-semibold">
              <p className="flex">
                <FontAwesomeIcon icon={faCheck} className="ss" />
                No add-ons or minimum spend</p>
              <p className="flex">
                <FontAwesomeIcon icon={faCheck} className="ss" />
                Competitive pricing</p>
            </div>
          </div>
        </div>
      </div>


      <div className="text-center mb-12">
        <p className="font-bold text-[47px]">Friction-free ordering</p>
        <p>Three easy ways to order translation, depending on your project size and scope.</p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 bg-[#f4f4f4]">

        <div className=" flex flex-col justify-center items-center p-10 ">
          <img src="/landingPage/custom_services.png" className="w-[15rem]" alt="" />
          <h1 className=" my-10 font-bold text-[25px]">Order online</h1>
          <p className=" mb-10">Fast self-serve ordering straight from our <br /> platform via our simple web-based order form.</p>
          <ol className="font-semibold text-[#4d4843] mb-10">
            <li className="flex"> <FontAwesomeIcon icon={faCheck} className="ss" /> Available on-demand, 24/7</li>
            <li className="flex"> <FontAwesomeIcon icon={faCheck} className="ss" /> Track your order status</li>
            <li className="flex"> <FontAwesomeIcon icon={faCheck} className="ss" /> Translation begins immediately</li>
          </ol>
          <button>
            <Link href="/" className="flex justify-center items-center  small text-white font-semibold font-Poppins tracking-wider bg-orange-600 rounded">
              ORDER NOW
            </Link>
          </button>
        </div>

        <div className=" flex flex-col justify-center my-10 items-center p-10 ">
          <img src="/landingPage/api_integration.png" className="w-[15rem]" alt="" />
          <h1 className=" my-10 font-bold text-[25px]">Order online</h1>
          <p className=" mb-10">Fast self-serve ordering straight from our <br /> platform via our simple web-based order form.</p>
          <ol className="font-semibold text-[#4d4843] mb-10">
            <li className="flex"> <FontAwesomeIcon icon={faCheck} className="ss" /> Available on-demand, 24/7</li>
            <li className="flex"> <FontAwesomeIcon icon={faCheck} className="ss" /> Track your order status</li>
            <li className="flex"> <FontAwesomeIcon icon={faCheck} className="ss" /> Translation begins immediately</li>
          </ol>
          <button>
            <Link href="/" className="flex justify-center items-center  small text-white font-semibold font-Poppins tracking-wider bg-orange-600 rounded">
              ORDER NOW
            </Link>
          </button>
        </div>

        <div className=" flex flex-col justify-center items-center p-10 ">
          <img src="/landingPage/order_online.png" className="w-[15rem]" alt="" />
          <h1 className=" my-10 font-bold text-[25px]">Order online</h1>
          <p className=" mb-10">Fast self-serve ordering straight from our <br /> platform via our simple web-based order form.</p>
          <ol className="font-semibold text-[#4d4843] mb-10">
            <li className="flex"> <FontAwesomeIcon icon={faCheck} className="ss" /> Available on-demand, 24/7</li>
            <li className="flex"> <FontAwesomeIcon icon={faCheck} className="ss" /> Track your order status</li>
            <li className="flex"> <FontAwesomeIcon icon={faCheck} className="ss" /> Translation begins immediately</li>
          </ol>
          <button>
            <Link href="/" className="flex justify-center items-center  small text-white font-semibold font-Poppins tracking-wider bg-orange-600 rounded">
              ORDER NOW
            </Link>
          </button>
        </div>
      </div>


    </section>
  );
};

export default LandingPage;
