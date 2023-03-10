
import './App.css'
import {  Route, Routes } from 'react-router-dom'
import LayOut from './LayOut'
import Home from './Pages/Home/Home'
import CArtBody from './Pages/CartegoryBody/CArtBody'
import NewBody from './Pages/NewBody/NewBody'
function App() {


  return (
   <> 
   
   <Routes>

    <Route path='/' element={<LayOut />} >
    <Route index element={<Home />} />
    <Route path='/cart-body' element={<CArtBody />} />
    <Route path='news-body' element={<NewBody />} />

    </Route>

   </Routes>
   
   
   </>
  )
}

export default App
