import React from 'react'

const History = () => {
    return (
        <div className='relative overflow-hidden'>
            <div className='h-screen md:h-[110vh] lg:h-[80vh] 2xl:h-[90vh] bg-gradient-to-b from-[#FFC700] to-[#FFF280] absolute inset-0 xl:rotate-2 xl:-mt-6 xl:w-[200%] xl:-ml-3'>
            </div>
            <div className='h-5 w-24 bg-[#FFF6A1] flex items-center justify-center absolute left-[50%] -translate-x-[50%] top-5 rounded-2xl'></div>
            <div className='relative px-6 py-14 flex flex-col lg:flex-row w-full gap-10'>

                <img src="/assets/historyImg.png" alt="" className='w-[60vw] md:w-[45vw] lg:w-[40vw] xl:w-[40vw] mx-auto' />
                <div>
                    <img src="/assets/historyText.png" alt="" className='w-[50vw] md:w-[40vw] lg:w-[40vw] xl:w-[40vw] mx-auto' />
                    <p className='font-kumbh font-semibold text-center md:text-lg xl:text-2xl 2xl:text-3xl lg:w-[40vw] xl:w-[37vw] pt-4 lg:text-right xl:ml-16'>
    The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.
</p>

                </div>
            </div>
        </div>
    )
}

export default History
