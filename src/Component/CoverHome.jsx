import React from 'react'
import img1 from '../Assets/Images/Home/home1.jpg'
import img2 from '../Assets/Images/Home/home2.jpg'
import img3 from '../Assets/Images/Home/home3.jpg'

function CoverHome() {
  return (
    
    <div className='flex px-5 lg:px-12 xl:px-36 md:flex-row flex-col '>
        <div className='md:w-1/2 w-full'>
            <h1 className='text-5xl font-bold mt-5 lg:text-7xl md:text-5xl md:mt-10'>DAKHLA<br/>STORE</h1>
            <div className='lg:mt-14 md:mt-8 mt-5 mb-5 md:mb-0 ml-5 flex gap-2 flex-col text-base italic'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente sint necessitatibus facilis laboriosam corrupti inventore et.</p>
                <p className='hidden lg:block'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente sint necessitatibus facilis laboriosam corrupti inventore et.</p>
            </div>
        </div>
        <div className='md:w-1/2 w-full flex flex-col md:items-end items-center'>
            <div className='flex'>
                <img src={img1} className='lg:w-56 w-36  mr-3 object-coverc rounded-lg hover:scale-105 duration-200'/>
                <img src={img2} className='lg:w-56 w-36 object-coverc rounded-lg hover:scale-105 duration-200'/>
            </div> 
            <img src={img3} className='lg:w-[29rem] w-[19rem] mt-3 h-[200px] object-cover rounded-lg hover:scale-105 duration-200'/>
        </div>
    </div>
  )
}

export default CoverHome