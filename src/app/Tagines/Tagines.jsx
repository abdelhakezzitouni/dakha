import { useEffect, useRef } from 'react';
import ProductItem from '../Layout/ProductItem'
import { data } from '@/Assets/Data/Data'



const products = data.filter(i=>i.category =='tagines')




function Tagines() {

  const toTopRef = useRef(null);
    useEffect(()=>{
        window.scroll(0,0)
    },[])
  
  return (
    <div className='' ref={toTopRef}>
        <div className='grid grid-cols-1 px-12 sm:grid-cols-2 sm:gap-x-8 md:px-24 md:gap-x-12 lg:grid-cols-3 lg:px-28 xl:px-48 gap-12 '>
          <ProductItem product={products} />
        </div>
    </div>
  )
}

export default Tagines