'use client';

import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import image5 from "../assets/5.png";
import image6 from "../assets/6.png";
import image7 from "../assets/7.png";

// Import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

const images = {
  all: [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
  ],
  photos: [
    image1,
    image2,
    image3,
  ],
  videos: [
    image4,
    image5,
    image6,
    image7,
  ],
};

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const swiperRef = React.useRef(null);

  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='w-[60%] mx-auto my-10'>
      <div className='flex items-center justify-center font-extrabold text-2xl gap-5 font-Monts py-6 cursor-pointer'>
        <h3
          onClick={() => handleCategoryChange('all')}
          className={`cursor-pointer ${selectedCategory === 'all' ? 'text-[#FFA800]' : 'text-black'}`}
        >All</h3>
        <h3
          onClick={() => handleCategoryChange('photos')}
          className={`cursor-pointer ${selectedCategory === 'photos' ? 'text-[#FFA800]' : 'text-black'}`}
        >PHOTOS</h3>
        <h3
          onClick={() => handleCategoryChange('videos')}
          className={`cursor-pointer ${selectedCategory === 'videos' ? 'text-[#FFA800]' : 'text-black'}`}
        >VIDEOS</h3>
      </div>

      <div className='relative'>
        <div className="swiper-button-prev-custom absolute -left-20 z-10 top-[50%] transform -translate-y-1/2 cursor-pointer w-12 h-16 bg-[url('/assets/leftarrow.png')] bg-cover" onClick={() => swiperRef.current.swiper.slidePrev()}></div>

        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode, Pagination, Navigation]}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {images[selectedCategory].map((src, index) => (
            <SwiperSlide key={index}>
              <div>
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-[100vw] sm:w-[60vw] md:w-[40vw] lg:w-[20vw] h-[60vw] sm:h-[60vw] md:h-[40vw] lg:h-[20vw] rounded-2xl bg-[#A6A6A6] p-3"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-next-custom absolute -right-20 z-10 top-[50%] transform -translate-y-1/2 cursor-pointer w-12 h-16 bg-[url('/assets/rightarrow.png')] bg-cover" onClick={() => swiperRef.current.swiper.slideNext()}></div>
      </div>
    </div>
  );
}
