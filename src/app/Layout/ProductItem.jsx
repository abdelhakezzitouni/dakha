import React from 'react'
import { ShoppingCart } from 'lucide-react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';




function ProductItem({product}) {

  const link = useNavigate()
    
  return (
    <>
    {product.map((item,index)=>{
        return(
            <motion.div 
              onClick={()=>link(`/${item.slug}`)}
              initial={{opacity:0, translateY:20 }}
              whileInView={{opacity:1, translateY: 0 }}
              transition={{duration:0.5, delay:index *0.2 }}
              viewport={{once:true}}
              key={item.id}
              className='w-full bg-transparent  rounded-xl flex flex-col items-center shadow-md hover:shadow-2xl duration-300 relative group overflow-hidden'

            >
              <img src={item.img} className=' w-36  object-cover py-4' />
              <div className='bg-[#2B2D42] w-full text-white h-20 rounded-b-xl flex justify-between items-center px-8'>
                  <div>
                  <h1 className='font-bold text-xl'>{item.price}<span>Dhs</span></h1>
                  <h1>{item.title}</h1>
                  </div>
                  <div className='bg-white size-9 rounded-full grid place-items-center'>
                      <ShoppingCart color='#2B2D42' size={28}/>
                  </div>
              </div>
              <Heart onClick={()=>{console.log(`favorait ${item.title}`)}} className='size-7 absolute cursor-pointer -top-10 right-4 group-hover:top-4 duration-200'color='red'/>
        </motion.div>
        )
    })}
    </>
  )
}

export default ProductItem