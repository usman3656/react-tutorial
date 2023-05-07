import React from 'react'
import Header from './header'
import { Outlet } from 'react-router-dom'

function Layout({children}) {
  return (
    <div>
        <Header/>    
        <div className='m-4'>
          <Outlet/>
        </div>    
    </div>
    
  )
}

export default Layout