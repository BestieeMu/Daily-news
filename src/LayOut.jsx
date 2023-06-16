import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footers/Footer'
import Hearder from './Components/Header/Header'

const LayOut = ({Entertainments, LifeStyle, Politics, Technology, scrollToSection}) => {
  return (
    <div>
        <Hearder
         LifeStyle={LifeStyle}
         Entertainments={Entertainments} 
         Politics={Politics} 
         Technology={Technology} 
         scrollToSection={scrollToSection}/>

          <Outlet />
          <Footer />
    </div>
  )
}

export default LayOut