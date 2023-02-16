import axios from 'axios';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar'
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { useRouter } from 'next/router';
import React from 'react'
import {useForm} from 'react-hook-form'
const SingleProduct = () => {
const router=useRouter();
const {id,push}=router.query;



  const {
    handleSubmit,
register,
getValues,
reset,
formState:{errors}
}=useForm();

const submitHandler=async({
    name,
    slug,
    price,
    category,
    image,
    author,
    countInStock,
    description,
    savedAmount,
    discount,
  })=>{
     try {
      await axios.put(`http://localhost:3000/api/?productId=${id}`, {
        name,
        slug,
        price,
        category,
        image,
        author,
        countInStock,
        description,
        savedAmount,
        discount,
      });
      reset();
      await push('/')
    } catch (err) {
      console.log(err);
    }

}



  return (

   
   

    <>
    <Navbar/>
    <div className='flex gap-1'>
      <Sidebar/>
      <div className='sm:w-full flex flex-col items-center  mt-4 ' >
   
      {/* <div className="grid md:grid-cols-4 md:gap-5"> */}
    
        {/* <div className="md:col-span-3"> */}
          {/* {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div className="alert-error">{error}</div>
          ) : ( */}
            <form
              className="mx-auto sm:w-3/5  "
              // max-w-screen-md
              onSubmit={handleSubmit(submitHandler)}
            >
              <h1 className="mb-4 text-xl font-semibold">
                {/* {`Edit Product ${productId}`} */}
                Edit Product: {id}
              </h1>
              <div className="mb-4">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="w-full"
                  id="name"
                  autoFocus
                  {...register('name', {
                    required: 'Please enter name',
                  })}
                />
                {errors.name && (
                  <div className="text-red-500">{errors.name.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="slug">Slug</label>
                <input
                  type="text"
                  className="w-full"
                  id="slug"
                  {...register('slug', {
                    required: 'Please enter slug',
                  })}
                />
                {errors.slug && (
                  <div className="text-red-500">{errors.slug.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  className="w-full"
                  id="price"
                  {...register('price', {
                    required: 'Please enter price',
                  })}
                />
                {errors.price && (
                  <div className="text-red-500">{errors.price.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="image">Image</label>
                <input
                  type="text"
                  className="w-full"
                  id="image"
                  {...register('image', {
                    required: 'Please enter image',
                  })}
                />
                {errors.image && (
                  <div className="text-red-500">{errors.image.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="imageFile">Upload image</label>
                <input
                  type="file"
                  className="w-full"
                  id="imageFile"
           
                />

               
              </div>
              <div className="mb-4">
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  className="w-full"
                  id="category"
                  {...register('category', {
                    required: 'Please enter category',
                  })}
                />
                {errors.category && (
                  <div className="text-red-500">{errors.category.message}</div>
                )}
              </div>
        
              <div className="mb-4">
                <label htmlFor="countInStock">CountInStock</label>
                <input
                  type="text"
                  className="w-full"
                  id="countInStock"
                  {...register('countInStock', {
                    required: 'Please enter countInStock',
                  })}
                />
                {errors.countInStock && (
                  <div className="text-red-500">
                    {errors.countInStock.message}
                  </div>
                )}
              </div>


              <div className="mb-4">
                <label htmlFor="countInStock">Author</label>
                <input
                  type="text"
                  className="w-full"
                  id="description"
         {...register("author")}
                />
          
              </div>
              <div className="mb-4">
                <label htmlFor="countInStock">SavedAmount</label>
                <input
                  type="text"
                  className="w-full"
                  id="description"
                   {...register("savedAmount")}
                />
            
              
              </div>
              <div className="mb-4">
                <label htmlFor="countInStock">Discount</label>
                <input
                  type="text"
                  className="w-full"
                  id="description"
               {...register("discount")}
                />
            
              </div>




              <div className="mb-4">
                <label htmlFor="countInStock">Description</label>
                <input
                  type="text"
                  className="w-full"
                  id="description"
                  {...register('description', {
                    required: 'Please enter description',
                  })}
                />
                {errors.description && (
                  <div className="text-red-500">
                    {errors.description.message}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <button
                //  disabled={loadingUpdate}
                  className="primary-button px-8 sm:w-2/5 text-xl">
                  {/* {loadingUpdate ? 'Loading' : 'Update'} */}
                  Update
                </button>
              </div>
              <div className="mb-4">
                <Link href={`/admin/products`}>Back</Link> 
              </div>
            </form>
          {/* )} */}
        {/* </div> */}
      {/* </div> */}

      </div>
    </div>
    </>
  )
}

export default SingleProduct