'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from 'next/navigation';


const data = [
    {
        bgImg: '/assets/Alabay Games/alabay guard prev 2 1.png',
        btnColor: '#843AFC',
        id: '1'
    },
    {
        bgImg: "/assets/Alabay Games/alabay lost heritage prev 1.png",
        btnColor: '#45D689',
        id: '2'
    },
];

const img = [
    {
        img: '/assets/Alabay Games/Alabay Guard/image 1 alabay guard.png'
    },
    {
        img: '/assets/Alabay Games/Alabay Guard/image 2 alabay guard.png'
    },
    {
        img: '/assets/Alabay Games/Alabay Guard/image 3 alabay guard.png'
    }
]

const Game = () => {
    const router = useRouter()

    const handleDiscover = (id) => {
        router.push(`/details/${id}`)
        console.log(id)

    }

    return (
        <div className='relative overflow-hidden'>
            <div className='h-[70vh] bg-gradient-to-b from-[#FFC700] to-[#FFF280] absolute inset-0  xl:-mt-6 xl:w-[200%] overflow-hidden'></div>
            <div className='relative py-10'>
                <img src="/assets/games.png" alt="" className='w-[75vw] md:w-[58vw] lg:w-[46vw] xl:w-[30vw] mx-auto' />
                <p className='flex items-center justify-center pt-5 font-bold font-Monts text-xl md:text-2xl'>
                    Stay tuned for upcoming games !
                </p>
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
                                    <img src={item.bgImg} alt="background" className="absolute h-full object-contain rounded-2xl " />
                                    <div
                                        className="absolute bottom-12 lg:bottom-10 px-8 py-2 text-white font-bold rounded-2xl flex items-center justify-center gap-3 cursor-pointer shadow-lg shadow-black"
                                        style={{ backgroundColor: item.btnColor }}
                                        onClick={() => handleDiscover(item.id)}
                                    >
                                        Discover <FaArrowRightLong />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="swiper-button-next-custom absolute right-2 md:right-10 lg:right-22 xl:right-20 z-10 top-[50%] transform -translate-y-1/2 cursor-pointer w-12 h-16 bg-[url('/assets/rightarrow.png')] bg-cover"></div>
                </div>
            </div>
            <div className='w-[92%] xl:w-[80%] mx-auto'>
                <h1 className='font-bold text-2xl  md:text-4xl pb-5'><span className='text-[#FFA800] '>GAME</span> PREVIEWS</h1>
                <div className='flex items-center justify-start flex-wrap gap-1'>
                    {
                        img.map((item, index) => (
                            <img key={index} src={item.img} alt="" className='w-[22vh] md:w-[28vh] mx-5 rounded-2xl' />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Game