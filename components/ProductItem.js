import Link from 'next/link'
import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {BiRupee} from 'react-icons/bi'

const ProductItem = ({product}) => {
  return (
  <>
 <Link href={`/product/${product.slug}`}>

<div className="card group">
     

          <img
            src={product.image}
            alt={product.name}
            className="rounded   object-contain sm:h-[12rem] h-60 w-full"
          />
        
  
      <div className="flex flex-col items-center justify-start sm:py-4 sm:px-1 p-4">
        <div>
        {/* <Link href={`/product/${product.slug}`}> */}
      
            <h2 className="sm:text-[1.1rem] text-start text-lg font-medium text-cyan-900 group-hover:text-blue-800	" >{product.name.slice(0,30)} ..</h2>
      
        {/* </Link> */}
        <p className='text-gray-400 text-sm'> {product.aurhor} Publications</p>
        <div className='flex items-center justify-start gap-2 text-sm mt-1'>
         <p className='flex items-center justify-start px-1 rounded-md bg-green-600 text-white border-r-2'>{product.rating} <AiFillStar/></p> 
         <p className='text-gray-400'>(128) </p>
        </div>
        <p className="mb-2">{product.brand}</p>
        <div className='flex gap-3'>
        <p className='text-slate-900 font-semibold flex items-center justify-start text-lg'><BiRupee/>{product.price}</p>
        <p className='line-through flex text-gray-400 items-center'> <BiRupee/>{product.savedAmount} </p>
        <p className='text-green-600'>{product.discount}% off </p>
        </div>
     
        </div>
        {/* <button
          className="primary-button mt-2"
          type="button" 
         
        >
          Add to cart
        </button> */}
      </div>
   
    </div>
    </Link>
  </>
  )
}

export default ProductItem