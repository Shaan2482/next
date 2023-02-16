import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import React from 'react'

const Settings = () => {
  return (
    <>
    <Navbar/>
    <div className='flex gap-4'>
      <Sidebar/>

<div>
  <h1 className='text-2xl font-semibold'>Settings</h1>
</div>

    </div>
    </>
  )
}

export default Settings