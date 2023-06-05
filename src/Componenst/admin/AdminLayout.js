import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <div className='d-flex'>
        <div className='col-2'><Sidebar/></div>
        <div className='bg-light col-10'>
            {<Outlet/>}
        </div>
    </div>
  )
}

export default AdminLayout