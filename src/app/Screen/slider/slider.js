"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import sliderImageOne from "../../../../public/images/sliderImgOne.png";
import sliderImageTwos from "../../../../public/images/sliderImgTwo.png";

const Slider = ({ data, odd }) => {
    return <div className='mt-[30px]'>
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            }}
            autoplay={{
                delay: 2000,
            }}
            speed={1000}
            modules={[Pagination, Autoplay]}
            pagination={false}
            className="mySwiper"
        >
            {data.map((item, index) => {
                return <SwiperSlide key={index} className='md:px-0 px-[20px]'>
                    <Image src={item.image} alt="" className={`${(odd ? index % 2 === 0 : index % 2 === 1) ? 'even-slider' : ''}`}
                    />
                    <p className='text-center py-[20px] text-[20px] text-gray-300 font-family'>
                        {item.text}
                    </p>
                </SwiperSlide>
            })}
        </Swiper >
    </div >
}

export default Slider