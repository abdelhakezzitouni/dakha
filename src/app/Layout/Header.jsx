import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MenuIcon, X } from 'lucide-react';


function Header() {

  const [isOpen, setIsOpen] = useState(false);

    
  return (
    <header className='mx-3 md:mx-8 rounded-xl mt-2 h-16 bg-pri flex items-center justify-between px-5 sm:px-8'>
        <div className="text-xl font-semibold text-white" onClick={() => window.location.assign("/")}>DAKHLA</div>
        <div className="block md:hidden" onClick={()=>setIsOpen(!isOpen)}>
            {isOpen ? <X size={27}color='#fff'/> :<MenuIcon size={27}color='#fff'/>}
        </div>

        <nav className={`${isOpen ? 'h-[280px]':'h-0'} z-50 mx-3 md:mx-8 rounded-xl duration-500 md:h-auto absolute md:static top-[5rem] md:top-0 md:w-auto left-0 right-0 bg-pri overflow-hidden`}>
            <ul className='flex flex-col md:flex-row  items-center  mt-6 md:mt-0 '>
              <li onClick={()=>setIsOpen(!isOpen)}><NavLink to='/' className={({isActive})=>(isActive ? 'mb-4 md:mb-0 block text-white text-lg px-4 py-2 rounded-lg duration-200 mx-2 bg-red-500':'mb-4 md:mb-0 block text-white text-lg px-4 py-2 rounded-lg duration-200 mx-2 hover:text-white hover:bg-red-500/75')} >Home</NavLink></li>
              <li onClick={()=>setIsOpen(!isOpen)}><NavLink to='/zarbia' className={({isActive})=>(isActive ? 'mb-4 md:mb-0 block text-white text-lg px-4 py-2 rounded-lg duration-200 mx-2 bg-red-500':'mb-4 md:mb-0 block text-white text-lg px-4 py-2 rounded-lg duration-200 mx-2 hover:text-white hover:bg-red-500/75')} >Zarbia</NavLink></li>
              <li onClick={()=>setIsOpen(!isOpen)}><NavLink to='/tagines' className={({isActive})=>(isActive ? 'mb-4 md:mb-0 block text-white text-lg px-4 py-2 rounded-lg duration-200 mx-2 bg-red-500':'mb-4 md:mb-0 block text-white text-lg px-4 py-2 rounded-lg duration-200 mx-2 hover:text-white hover:bg-red-500/75')} >Tagines</NavLink></li>
              <li onClick={()=>setIsOpen(!isOpen)}><NavLink to='/teapots' className={({isActive})=>(isActive ? 'mb-4 md:mb-0 block text-white text-lg px-4 py-2 rounded-lg duration-200 mx-2 bg-red-500':'mb-4 md:mb-0 block text-white text-lg px-4 py-2 rounded-lg duration-200 mx-2 hover:text-white hover:bg-red-500/75')} >Teapots</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header