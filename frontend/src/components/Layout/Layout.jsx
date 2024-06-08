import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import IconBar from '../IconBar/IconBar'
const Layout = () => {
  return (
    <div>
      <IconBar></IconBar>
      <Header />
      <div className='md:pt-14'>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout