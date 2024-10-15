const Social = () => {
    return (
        <div className='flex flex-col justify-start w-[95vw] md:w-[88vw] lg:w-[90vw] xl:w-[75vw] mx-auto my-10 overflow-hidden'>
            <img src="/assets/social_media.png" alt="" className='w-[65vw] md:w-[58vw] lg:w-[46vw] xl:w-[35vw] lg:px-2' />
            <div className='flex items-center justify-center flex-col lg:flex-row'>
                <div className='relative'>
                    <img src="/assets/Union.png" alt="" className='w-[65vw] md:w-[58vw] lg:w-[46vw] xl:w-[45vw] absolute inset-0' />
                    <div className='relative'>
                        <div className='w-[40vh] h-[30vh] flex items-start justify-center pl-5 2xl:pl-10 gap-2 flex-col'>
                            <div className='flex items-center justify-center gap-4'><img src="/assets/twitter logo 1.png" alt=""  className='w-10 bg-[#353535] p-2 rounded-full'/> <span className='text-white font-semibold text-lg'>Twitter Link</span></div>
                            <div className='flex items-center justify-center gap-4'><img src="/assets/logo.png" alt=""  className='w-10'/> <span className='text-white font-semibold text-lg'>Telegram Link</span></div>
                        </div>
                    </div>
                </div>
                <img src="/assets/s-i-7.png" alt="" className='w-[65vw] md:w-[58vw] lg:w-[46vw] xl:w-[35vw]' />
            </div>
        </div>
    )
}

export default Social