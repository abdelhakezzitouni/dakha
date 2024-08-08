import React from 'react'
import Hero from './components/Hero'
import Hzarbia from './components/Hzarbia'
import Htagines from './components/Htagines'
import Hteapots from './components/Hteapots'

function Home() {
  return (
    <div className='mt-6'>
        <Hero />
        <Hzarbia />
        <Htagines />
        <Hteapots />
    </div>
  )
}

export default Home