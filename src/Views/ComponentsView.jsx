import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
const ComponentsView = () => {
  return (
    
    <div className='grid grid-cols-4  min-h-screen'>
     <Sidebar/>
      <section className='col-start-2 col-end-5 bg-gray-900'>
      <Outlet/>
      </section>  
    </div>
    
  )
}

export default ComponentsView