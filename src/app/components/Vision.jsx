import React from 'react'

const Vision = () => {
    return (
        <div className='mt-20 '>
            <img src="/assets/visionImg.png" alt="" className='w-[69vw] md:w-[45vw] lg:w-[40vw] xl:w-[42vw] mx-auto mb-10' />
            <div className=' relative overflow-hidden'>
                <div className='bg-gradient-to-b from-[#FFC700] to-[#FFF280] absolute inset-0 -rotate-6 mt-10 xl:mt-24 w-[200%] -ml-10'></div>
                <div className='relative flex items-center justify-center flex-col mt-10'>
                    <img src="/assets/visionGroup.png" alt="" className='w-[85vw] md:w-[68vw] lg:w-[56vw] xl:w-[45vw] mx-auto py-10' />
                    <p className='font-kumbh font-bold text-center text-lg md:text-xl lg:text-xl xl:text-3xl 2xl:text-4xl px-2 md:w-[80%] pt-5'>
                        Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Vision