
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LayOut from './LayOut'
import Home from './Pages/Home/Home'
import NewBody from './Pages/NewBody/NewBody'
import { useEffect, useState } from 'react'
import axios from 'axios';
import News from './Pages/NewsF/News'
import Error from './Pages/error/Error'

function App() {
  const [data, setData] = useState([]);



  return (
    <>

      <Routes>

        <Route path='/' exact element={<LayOut />} >
          <Route index element={<Home data={data}/>} />
          <Route path='/news/:slug' element={<NewBody />} />
          <Route path='/news' element={<News />} />
          <Route path='*' element={<Error />} />
        </Route>

      </Routes>


    </>
  )
}

export default App
