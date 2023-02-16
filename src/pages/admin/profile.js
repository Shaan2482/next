import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import React from 'react'

const Profile = () => {
  return (
    <>
    <Navbar/>
    <div className='flex gap-4'>
      <Sidebar/>

<div>
  <h1 className='text-2xl font-semibold'>Profile</h1>
</div>

    </div>
    </>
  )
}

export default Profile