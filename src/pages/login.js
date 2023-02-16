import Navbar from 'components/Navbar'
import Link from 'next/link'
import React from 'react'
import {useForm} from 'react-hook-form'
const login = () => {
    const {
        handleSubmit,
    register,
    formState:{errors}
    }=useForm();

    const submitHandler=({email,oassword})=>{

    }
  return (
<>
<Navbar/>
<form className='mx-auto max-w-screen-md mt-5' onSubmit={handleSubmit(submitHandler)
}>
    <h1 className='mb-4 text-3xl font-semibold' >Login</h1>
<div className='mb-4'>
<label htmlFor='email'>Emil</label>
<input type='email'
{...register('email',{required:"Please enter email",
pattern: {
    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
    message: 'Please enter valid email',
  }})}
className='w-full' id='email' autoFocus></input>
{errors.email && <div className='text-red-500'>{errors.email.message}</div>}
</div>

<div className='mb-4'>
<label htmlFor='password'>Password</label>
<input type='password'
 {...register('password', {
    required: 'Please enter password',
    minLength: { value: 6, message: 'password is more than 5 chars' },
  })}
className='w-full' id='password' autoFocus></input>
{errors.password && (
            <div className="text-red-500 ">{errors.password.message}</div>
          )}
</div>

<div className='mb-4'>
    <button className='primary-button px-6 py-2'>Login</button>
</div>

<div className='mb-4 text-gray-400'>
    Don&apos;t have an account? &nbsp;
    <Link href='/register ' className= 'text-black hover:text-blue-600'>Register</Link>

</div>
</form>
</>
  )
}

export default login