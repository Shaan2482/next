import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from 'components/Navbar'
import ProductItem from 'components/ProductItem'
import { booksData } from 'Utils/data'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
<Navbar/>
<div className='grid grid-cols-1 sm:gap-4 gap-0 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 my-6 px-2 sm:px-12'>
{booksData.map((product)=>(
  <ProductItem  product={product} key={product.slug} />
))}
</div>
    </>
  )
}
