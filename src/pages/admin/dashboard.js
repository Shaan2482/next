import Sidebar from 'components/Sidebar'
import React from 'react'
import Navbar from 'components/Navbar'



const Dashboard = () => {
  return (
   <>
<Navbar/>
   <div className="flex gap-4">
   <Sidebar/>
 <h1 className="font-bold text">Dashboard</h1>
 
</div>
   

   </>
  )
}

export default Dashboard