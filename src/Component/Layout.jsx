import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <div className='bg-[#EDF2F4] pt-5'>
      <scrollToTop/>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout