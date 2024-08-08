import { data } from '@/Assets/Data/Data'
import React from 'react'
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function Popular({item}) {
    const product = data.filter((i)=>i.category == item.category && i.popular == true);
    console.log(product);
  return (
    <div className=' flex flex-col gap-10 mt-20'>
      <div className='flex w-full justify-between px-5 md:px-14 lg:px-20 xl:px-24'>
        <h1  className='text-lg font-semibold' >Popular</h1>
        <Link to={`/${item.category}`} className='flex justify-center items-center gap-1 group cursor-pointer'><span className='text-lg'>See more</span> <ArrowRight size={18} className=' group-hover:translate-x-1 duration-300' /></Link>
      </div>
      <div className='grid grid-cols-1 px-12 sm:grid-cols-2 sm:gap-x-8 md:px-24 md:gap-x-12 lg:grid-cols-3 lg:px-28 xl:px-48 gap-12 '>
        <ProductItem product={product} />
      </div>
    </div>
  )
}

export default Popular