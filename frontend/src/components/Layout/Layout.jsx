import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import IconBar from '../IconBar/IconBar'
import Footer from '../Footer/Footer'
const Layout = () => {
  return (
    <div>
      <IconBar></IconBar>
      <Header />
      <div className='md:pt-14'>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Layout