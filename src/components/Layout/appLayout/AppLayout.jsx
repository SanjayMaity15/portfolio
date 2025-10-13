import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

const AppLayout = () => {
  return (
      <>
          <header>
              <Navbar/>
          </header>
          <main className='min-h-screen'>
              <Outlet/>
          </main>
          <footer>
              <Footer/>
          </footer>
      </>
  )
}

export default AppLayout