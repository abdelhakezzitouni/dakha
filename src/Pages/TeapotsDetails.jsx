import React from 'react'
import { TeapotsData } from '../Assets/Data/Data'
import { useParams } from 'react-router-dom'


function TeapotsDetails() {

    const id = useParams();
    const pro =TeapotsData.filter(x=>x.slug == id.slug);
    const item =pro[0]
    
  return (
    <div className='flex flex-col md:flex-row md:items-start items-center'>
      <div className='md:w-1/2 w-full flex md:justify-end justify-center md:pr-16'>
        <img src={item.img} className='w-96' />
      </div>
      <div  className='md:w-1/2 w-full pl-10 md:pt-10 pt-5  '>
        <h1 className='text-2xl mb-3 font-bold'>{item.title}</h1>
        <p className='text-lg md:w-96 w-full mb-3'>{item.description}</p>
        <h2 className='font-bold text-lg'>{item.price}MAD</h2>
        <h1 className='text-green-600'>enstock</h1>
        <div className='md:mt-16 mt-5'>
          <button className='border-[3px] bg-[#2b2d423e] border-[#2b2d423e]  md:px-7 px-5 rounded-lg md:py-2 py-1 text-[#2B2D42] text-lg'>Buy now</button>
          <button className='border-[3px] bg-[#2B2D42] border-[#2B2D42] md:px-7 px-5 rounded-lg md:py-2 py-1 text-white text-lg md:ml-5 ml-3'>chekout</button>
        </div>
      </div>
  </div>
  )
}

export default TeapotsDetails