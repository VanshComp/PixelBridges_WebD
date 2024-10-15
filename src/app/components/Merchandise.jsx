'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

export const Merchandise = () => {
    const data = [
        {
            bgImg: '/assets/Alabay Merch/black hoodie bck.png',
            productImg: '/assets/Alabay Merch/black hoodie.png'
        },
        {
            bgImg: "/assets/Alabay Merch/blue cap bck.png",
            productImg: '/assets/Alabay Merch/cap mockup.png'
        },
        {
            bgImg: '/assets/Alabay Merch/pink tee bck.png',
            productImg: '/assets/Alabay Merch/pink tshirt.png'
        },
        {
            bgImg: '/assets/Alabay Merch/yellow tee bck.png',
            productImg: '/assets/Alabay Merch/yellow tshirt.png'
        }
    ];

    return (
        <div>
            <img src="/assets/merchandise.png" alt="" className='w-[85vw] md:w-[68vw] lg:w-[56vw] xl:w-[45vw] mx-auto' />

            <div className='my-5 md:my-10 relative'>
                {/* Custom Navigation Buttons */}
                <div className="swiper-button-prev-custom absolute left-2 md:left-10 lg:left-22 xl:left-20 z-10 top-[50%] transform -translate-y-1/2 cursor-pointer w-12 h-16 bg-[url('/assets/leftarrow.png')] bg-cover"></div>

                <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        prevEl: '.swiper-button-prev-custom',
                        nextEl: '.swiper-button-next-custom',
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-[50vh] md:h-[80vh] flex justify-center items-center rounded-2xl">
                                <img src={item.bgImg} alt="background" className="absolute h-full object-contain opacity-70 rounded-2xl " />
                                <img src={item.productImg} alt="product" className="relative z-10 w-full  md:w-[70%] lg:w-[60%] h-auto" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="swiper-button-next-custom absolute right-2 md:right-10 lg:right-22 xl:right-20 z-10 top-[50%] transform -translate-y-1/2 cursor-pointer w-12 h-16 bg-[url('/assets/rightarrow.png')] bg-cover"></div>
            </div>
        </div>
    );
}
