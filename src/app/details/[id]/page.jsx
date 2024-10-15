'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaPlayCircle } from "react-icons/fa";

const Page = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)

  const fetchData = async () => {
    try {
      const response = await fetch('/data.json')
      const jsonData = await response.json()
      const item = jsonData.find((item) => item.id === id)
      setData(item)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  
  useEffect(() => {
    fetchData()
  }, [id])
  
  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div className='relative overflow-hidden min-h-screen w-full'>
      <img src={data?.bgImg} alt="" className='absolute w-full h-full object-cover' />
      <div className='relative w-[90%] mx-auto text-white'>
        {/* Hero Text */}
        <img src={data?.heroText} alt="" className='object-cover w-full max-w-md md:max-w-lg lg:max-w-xl' />

        {/* Paragraph */}
        <p className='font-semibold text-2xl md:text-3xl lg:text-4xl py-5 md:py-10 w-full md:w-[70%] lg:w-[50%] font-Monts'>
          {data?.para}
        </p>

        {/* Play Button */}
        <button className={`flex items-center justify-center gap-4 px-4 py-2 md:px-6 md:py-3 rounded-3xl text-lg md:text-xl text-black font-semibold ${data?.id === '1' ? 'bg-[#A4A8FF]' : 'bg-[#90FFAE]'}`}>
          <FaPlayCircle color='black' /> Play
        </button>

        {/* Game Preview Section */}
        <div className='pt-8 md:pt-12'>
          <h1 className='font-semibold text-2xl md:text-3xl font-Monts'>
            <span className={`${data?.id === '1' ? 'text-[#A4A8FF]' : 'text-[#90FFAE]'}`}>Game</span> Preview
          </h1>

          {/* Preview Images */}
          <div className='flex flex-wrap gap-2 md:gap-4 pt-5'>
            {data?.peviewImg?.map((preview, index) => (
              <div key={index} className='w-[40%] md:w-1/3 lg:w-1/4 xl:w-[20%] p-2'>
                <img src={preview} alt="" className='rounded-2xl object-cover ' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
