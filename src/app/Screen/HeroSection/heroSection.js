"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { breakString } from "../utils/util";
import "swiper/css";
import "swiper/css/pagination";
import Button from "../Button/button";
const HeroSection = () => {
  return (
    <div className="grid grid-cols-12 lg:mx-0 md:mx-[100px]">
      <div className="lg:col-span-6 md:col-span-10 col-span-12 bg-black/50 h-screen flex items-center justify-start text-white md:px-[10px] px-[25px] hero-section">
        <Swiper
          // pagination={{
          //     clickable: true,
          // }}
          pagination={false}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col mt-[22%]">
              <p className="text-[13px]  leading-none text-gray-300 ">
                KHAWAJA YANNI
              </p>
              <p
                className="md:text-[68px] text-[55px] leading-none mt-[18px] font-family"
                dangerouslySetInnerHTML={{
                  __html: breakString("The new era of luxury", 7),
                }}
              ></p>{" "}
              <p className="my-[20px] text-[15px] text-gray-300 ">
                Lorem Ipsum is simply dummy text of the printing and{" "}
                <span className="flex flex-col">
                  typesetting industry. Lorem Ipsum.
                </span>
              </p>
              <div className="mt-[30px]">
                <Button text="Book reservation now" showBtnArrow={true} />
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
