import React from 'react'

function Footer() {
  return (
    <div className='md:h-full h-full  bg-MyBlue mt-20'>
        <div className=' flex justify-center md:gap-14 lg:gap-36 gap-5 ml-5 md:ml-0 text-white  pb-10 pt-8 md:flex-row flex-col'>
        <div>
            <h1 className=' text-3xl font-bold'>DAKHLA<br />STORE</h1>
            <p className='text-gray-200 cursor-pointer hover:underline'>Morocco-Dakhla</p>
            <p className='text-gray-200 cursor-pointer hover:underline'>+212600000000</p>
        </div>
        <div>
            <h1 className='text-2xl font-semibold'>Products</h1>
            <p className='text-gray-200 cursor-pointer hover:underline'>Moroccan Zarbia</p>
            <p className='text-gray-200 cursor-pointer hover:underline'>Moroccan Tagines</p>
            <p className='text-gray-200 cursor-pointer hover:underline'>Moroccan Teapots</p>
        </div>
        <div>
            <h1 className='text-2xl font-semibold'>Services</h1>
            <p className='text-gray-200 cursor-pointer hover:underline'>Delivery</p>
            <p className='text-gray-200 cursor-pointer hover:underline'>Pricing</p>
            <p className='text-gray-200 cursor-pointer hover:underline'>Security payment</p>
            <p className='text-gray-200 cursor-pointer hover:underline'>Order processing</p>
        </div>
        <div>
            <h1 className='text-2xl font-semibold'>Information</h1>
            <p className='text-gray-200 cursor-pointer hover:underline'>Event</p>
            <p className='text-gray-200 cursor-pointer hover:underline'>Contact us</p>
            <p className='text-gray-200 cursor-pointer hover:underline'>Privacy policy</p>
            <p className='text-gray-200 cursor-pointer hover:underline'>Terms of services</p>
        </div>
    </div>
    <div className='w-full text-center pb-2'>
        <h1 className='text-gray-200 md:text-base text-[0.9rem]'>Copyright 2024 All Rights Reserved by <span className='text-red-500 hover:underline'>dakhlastore</span></h1>
    </div>
    </div>
  )
}

export default Footer