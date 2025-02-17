"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState, useEffect } from "react";
import Button from "../Button/button";
import { breakString } from "../utils/util";
import Container from "../Container/container";
import { heroSliderData } from "../Data/data";
const HeroSection = () => {
  return (
    <Container>
      <div className="grid grid-cols-12 lg:mx-0 md:mx-[100px]">
        <div className="lg:col-span-6 md:col-span-10 col-span-12 bg-black/50 h-screen flex items-center justify-start text-white md:px-[10px] px-[25px] hero-section z-0">
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {heroSliderData.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex flex-col mt-[22%]">
                    <p className="text-[13px] leading-none text-gray-300 ">
                      {item.name}
                    </p>
                    <p
                      className="md:text-[50px] text-[50px] leading-none mt-[18px] font-family"
                      dangerouslySetInnerHTML={{
                        __html: breakString(item?.title, 7),
                      }}
                    />
                    <p
                      className="my-[20px] text-[15px] text-gray-300"
                      dangerouslySetInnerHTML={{
                        __html: breakString(item?.description, 50),
                      }}
                    ></p>

                    <div className="mt-[30px]">
                      <Button text="Book reservation now" showBtnArrow={true} />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
