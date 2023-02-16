import Navbar from 'components/Navbar'
import Link from 'next/link'
import React from 'react'
import {useForm} from 'react-hook-form'
import { useRouter } from 'next/router';
  

const Register = () => {
      const router = useRouter();
  const { redirect } = router.query;
    const {
        handleSubmit,
    register,
    getValues,
    formState:{errors}
    }=useForm();

    const submitHandler=({name,email,password})=>{

    }
  return (
<>
<Navbar/>
<form className='mx-auto max-w-screen-md mt-5' onSubmit={handleSubmit(submitHandler)
}>
    <h1 className='mb-4 text-3xl font-semibold' >Create Account</h1>
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

<div className="mb-4">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="w-full"
            type="password"
            id="confirmPassword"
            {...register('confirmPassword', {
              required: 'Please enter confirm password',
              validate: (value) => value === getValues('password'),
              minLength: {
                value: 6,
                message: 'confirm password is more than 5 chars',
              },
            })}
          />
          {errors.confirmPassword && (
            <div className="text-red-500 ">
              {errors.confirmPassword.message}
            </div>
          )}
          {errors.confirmPassword &&
            errors.confirmPassword.type === 'validate' && (
              <div className="text-red-500 ">Password do not match</div>
            )}
        </div>

<div className='mb-4'>
    <button className='primary-button px-6 py-2'>Register</button>
</div>

<div className="mb-4 ">
          Don&apos;t have an account? &nbsp;
          <Link href={`/register?redirect=${redirect || '/'}`}>Register</Link>
        </div>
</form>
</>
  )
}

export default Register;