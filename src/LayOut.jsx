import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footers/Footer'
import Hearder from './Components/Header/Header'

const LayOut = () => {
  return (
    <div>
        <Hearder />
          <Outlet />
          <Footer />
    </div>
  )
}

export default LayOut