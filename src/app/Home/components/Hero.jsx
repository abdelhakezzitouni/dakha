import React from 'react'
import img1 from '@/Assets/Images/Home/h1.jpg'
import img2 from '@/Assets/Images/Home/h2.jpg'
import img3 from '@/Assets/Images/Home/h3.jpg'
import { FadeText } from '@/components/magicui/fade-text'
import { motion } from 'framer-motion'


function Hero() {
  return (
    <div>
        <div className='flex px-5 md:px-12 xl:px-36 sm:flex-row flex-col '>
            <div className='md:w-1/2 w-full sm:mt-10 mt-5 '>
                <div className=''>
                    <FadeText className="text-5xl font-bold lg:text-7xl md:text-6xl md:mt-10" direction="left" framerProps={{show: { transition: { delay: 0.1 } }}} text="DAKHLA" />
                    <FadeText className="text-5xl font-bold  lg:text-7xl md:text-6xl md:mt-10" direction="right"framerProps={{show: { transition: { delay: 0.2 } }}} text="STORE" />
                </div>
                <div className='lg:mt-14 md:mt-8 mt-5 mb-5 md:mb-0 ml-5 pr-5 flex gap-2 flex-col text-base italic'>
                    <FadeText className='pr-10' direction='down' framerProps={{show:{transition:{delay:0.3}}}} text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente sint necessitatibus facilis laboriosam corrupti inventore et.'/>
                    <FadeText className='hidden lg:block' direction='up' framerProps={{show:{transition:{delay:0.4}}}} text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente sint necessitatibus facilis laboriosam corrupti inventore et.'/>
                </div>
            </div>
            <div className='md:w-1/2 w-full flex flex-col md:items-end items-center'>
                <div className='flex'>
                    <motion.img 
                        src={img1} 
                        className='lg:w-56 w-36  mr-3 object-coverc rounded-lg hover:scale-105 duration-200'
                        variants={{
                            show:{
                                opacity:1,
                                x:0
                            },
                            hidden:{
                                opacity:0,
                                x:-10
                            }
                        }}
                        initial='hidden'
                        animate='show'
                        transition={{
                            duration:0.4,
                            ease:'easeInOut'
                        }}
                    />
                    <motion.img 
                        src={img2} 
                        className='lg:w-56 w-36 object-coverc rounded-lg hover:scale-105 duration-200'
                        variants={{
                            show:{
                                opacity:1,
                                x:0
                            },
                            hidden:{
                                opacity:0,
                                x:10
                            }
                        }}
                        initial='hidden'
                        animate='show'
                        transition={{
                            duration:0.4,
                            ease:'easeInOut'
                        }}
                    />
                </div> 
                <motion.img 
                    src={img3} 
                    className='lg:w-[29rem] w-[19rem] mt-3 h-[200px] object-cover rounded-lg hover:scale-105 duration-200'
                    variants={{
                        show:{
                            opacity:1,
                            y:0
                        },
                        hidden:{
                            opacity:0,
                            y:10
                        }
                    }}
                    initial='hidden'
                    animate='show'
                    transition={{
                        duration:0.4,
                        ease:'easeInOut'
                    }}
                />
            </div>
        </div>
    </div>
  )
}

export default Hero