
import './App.css'
import {  Route, Routes } from 'react-router-dom'
import LayOut from './LayOut'
import Home from './Pages/Home/Home'
import CArtBody from './Pages/CartegoryBody/CArtBody'
import NewBody from './Pages/NewBody/NewBody'
import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

    const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'af5aa19560msh7b4b5aaf5baf3f4p133455jsna0150ed2dc74',
      'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
    }
  };

  useEffect(() => {
    axios.get(`https://newscatcher.p.rapidapi.com/v1/search_enterprise?q=fashion news&lang=en&sort_by=relevancy&country=ng&page=1&media=True`, options)
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);
  
  console.log(data);
  

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
