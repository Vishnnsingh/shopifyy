import React from 'react'
import Style from '../Layout/Layout.module.css'
import Header from '../../Components/Header/Header'
import {Outlet} from "react-router-dom"
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    
    </div>
  )
}

export default Layout
