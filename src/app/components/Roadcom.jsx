const Roadcom = () => {

    const data =[
        {
            text:'Community Building and Initial Launch',
            img:'/assets/s-i-2.png',
            bg:'bg-gradient-to-b from-[#DBC70C] to-[#FFF280] '
        },
        {
            text:'Merchandise Store Launch',
            img:'/assets/s-i-3.png',
            bg:'bg-gradient-to-b from-[#00D4D4] to-[#41FFFF] '
        },
        {
            text:'Community Events and contests',
            img:'/assets/s-i-4.png',
            bg:'bg-gradient-to-b from-[#D427FF] to-[#D427FF] '
        },
        {
            text:'Expansion and New Features',
            img:'/assets/s-i-5.png',
            bg:'bg-gradient-to-b from-[#8F3A3C] to-[#8F3A3C] '
        }
    ]
    return (
        <div className=' relative overflow-hidden pt-20'>
            <div className='bg-gradient-to-t from-[#FFC700] to-[#FFF280]  absolute inset-0 rotate-6 w-[260%] -ml-20 h-[60vh] md:h-[50vh] lg:h-[63vh] xl:h-[78vh] overflow-hidden'></div>
            <div className='relative'>
                <img src="/assets/roadmap.png" alt="" className='w-[69vw] md:w-[45vw] lg:w-[40vw] xl:w-[42vw] pl-10 mb-10 bg-transparent' />
                <div className='flex items-center justify-center flex-col md:flex-row'>
                    <div className='font-bold font-kumbh  text-center text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl px-2 md:w-[80%] pt-5'>   
                         <p>Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store. </p>

                        <p className='text-[#FFA800] mt-3 md:mt-5 lg:mt-10 xl:mt-20'> Join us as we grow and achieve new heights.</p>
                    </div>

                    <img src="/assets/s-i-1.png" alt="" className='w-[69vw] md:w-[45vw] lg:w-[40vw] xl:w-[42vw]' />
                </div>
                <div className='flex flex-wrap justify-center gap-10 my-10'>
                    {data.map((item, index) => (
                        <div 
                            key={index} 
                            className={`${item.bg} flex flex-col items-center text-center justify-center p-4 rounded-2xl w-[70vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw] xl:w-[16vw]  shadow-lg`}>
                            
                            <p className='font-bold text-sm md:text-lg lg:text-xl xl:text-2xl text-white font-Monts pb-2'>{item.text}</p>
                            <img src={item.img} alt={`Step ${index + 1}`} className='mb-4 h-[30vh]' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Roadcom 
