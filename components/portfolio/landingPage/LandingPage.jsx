import React from "react";
import ClientsSlider from "./ClientsSlider";
import AchievementCircle from "./AchievementCircle";


const LandingPage = () => {
  // dark mode background:  md:bg-[url('/portfolio/shape2.png')] pt-20 bg-[#100F13] bg-center bg-no-repeat bg-cover
  return (
    <>
      <div className="relative">
        <div className="absolute top-20 left-10">
          <AchievementCircle metric="90%" desc="Customer satisfaction" />
        </div>

        <div className="absolute top-20 right-14">
          <AchievementCircle metric="150+" desc="Successful cases" />
        </div>

        <div className="absolute bottom-10 right-14">
          <AchievementCircle metric="40+" desc="Specialists in our team" />
        </div>

        <div className="absolute left-[-3.5rem] bottom-32">
          <img
            src="/portfolio/image1.svg"
            alt="image portfolio1"
            height={150}
            width={150}
            className="xl:w-[200px] xl:h-auto lg:w-[160px]"
          />
        </div>

        <div className=" w-full lg:h-[100vh] md:h-[80vh] h-auto">
          <div className="w-full h-full flex justify-center items-center relative">
            <div className="absolute right-[-3rem]">
              <img
                src="/portfolio/image2.svg"
                alt="image portfolio2"
                height={150}
                width={150}
                className="xl:w-[200px] xl:h-auto lg:w-[160px]"
              />
            </div>

            <div className="flex flex-col gap-7 w-fit mx-auto">
              <h1 className="text-blackText-200 text-center text-7xl font-bold font-Poppins tracking-widest italic">
                Portf<span className="text-[#EB5A00] ">o</span>lio
              </h1>
              <p className="text-blackText-200 text-center lg:text-xl md:text-lg text-base w-fit font-Poppins leading-9 tracking-widest">
                Explore our portfolio of Achievements and <br/> Case Studies.
              </p>
            </div>
          </div>
        </div>

        <div className="w-screen absolute bottom-0">
          <ClientsSlider />
        </div>
        
        <div className="w-screen h-32 origin-top-left rotate-[-6.50deg] bg-orange-600 bg-opacity-5 absolute bottom-[-7rem]" />
      </div>
    </>
  );
};

export default LandingPage;
