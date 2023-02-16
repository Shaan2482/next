import Link from 'next/link'
import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
const Navbar = () => {
  return (
    <>
    <div className='h-14 flex justify-between px-2  sm:px-12 items-center shadow-md '>

      <Link href='/' className='text-[1.2rem] sm:text-2xl font-bold text-indigo-900' >
   
        BOOK <span className='text-3xl sm:text-[2.5rem] italic text-sky-900	 font-bold sm:font-extrabold' >S</span>TORE
     
      </Link>

    <div className='flex items-center justify-center'>
    
    <Link href='/cart'  className='p-3 '>
<AiOutlineShoppingCart  color='green' className='text-2xl'/>
      </Link>
      
      <Link href='/login' className='p-3 font-semibold text-xl'>
    Login
      </Link>
    </div>
    </div>
    </>
  )
}

export default Navbar