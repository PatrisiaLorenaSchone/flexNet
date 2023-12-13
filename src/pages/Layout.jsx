import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, useLocation } from 'react-router-dom'
import { MdArrowBackIos } from "react-icons/md";


function Layout() {
  let location = useLocation()
  console.log(location)
  return (
    <>
    <Header/>
      {location.pathname !== "/" && <Link className='back-btn main-container' to="/"><MdArrowBackIos />Back to the main page</Link>}
      <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
