

export const Token = () => {
    const data = [
        {
            text1:'LIQUIDITY',
            text2:'LOCKED'
        },
        {
            text1:'CONTRACT',
            text2:'RENOUNCED'
        },
        {
            text1:'TAXES',
            text2:'0%'
        }
    ]
    return (
            <div className=' relative  mt-10 lg:mt-32 mb-20'>
                <div className='bg-gradient-to-b from-[#FFC700] to-[#FFF280]  absolute inset-0'></div>
                <div className='relative flex items-center justify-center flex-col pt-28'>
                    <img src="/assets/tokenImg.png" alt="" className='w-[85vw] md:w-[68vw] lg:w-[56vw] xl:w-[45vw] mx-auto' />
                    <div className='flex flex-col md:flex-row items-center justify-center pt-5'>
                        <div className='flex flex-col gap-3'>
                            {
                                data.map((item, index) => (
                                    <div key={index} className='font-extrabold rounded-2xl font-Monts text-left text-lg   px-10 py-2 bg-[#353535]'>
                                        <p className='text-white md:text-sm xl:text-lg 2xl:text-xl'>{item.text1}</p>
                                        <p className='text-[#FFF280] md:text-xl xl:text-2xl 2xl:text-3xl'>{item.text2}</p>
                                    </div>
                                ))
                            }
                        </div>

                        <img src="/assets/s-i-6.png" alt="" className='w-[50vw] md:w-[45vw] lg:w-[40vw] xl:w-[25vw]'/>
                    </div>
                </div>
            </div>
    )
}
