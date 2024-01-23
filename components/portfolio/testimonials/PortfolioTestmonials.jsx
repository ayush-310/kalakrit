"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalf } from "react-icons/fa";
import { testimonials } from "./testimonials";
import Image from "next/image";

const PortfolioTestmonials = () => {
  return (
    <section className="bg-[#100f13] w-full box-border pl-16 py-14 flex flex-col">
      <Carousel showArrows={false} showStatus={false}>
      {testimonials?.data.map((testimonial) => (
        <div key={testimonial.id} className="w-full grid grid-cols-2 gap-16 items-center h-fit">
          <div className="col-span-1">
          <h2 className="font-Poppins font-semibold text-left w-fit mb-4 md:text-3xl lg:text-4xl text-[#ffffff] text-2xl tracking-widest">
        Testimonials
      </h2>

            <p className="text-white text-left text-2xl font-medium font-Poppins leading-10 tracking-tight">
             {testimonial.testimonial}
            </p>
          </div>
          <div className="col-span-1 ">
              <Image
                src={testimonial.img}
                alt="testimonial image"
                className=""
                width={200}
                height={200}
              />
            
          </div>
        </div>
              ))}
        
      </Carousel>
    </section>
  );
};

export default PortfolioTestmonials;
