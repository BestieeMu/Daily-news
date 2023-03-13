import React from 'react'
import Hero from '../../Components/Hero/Hero'
import NewsLayOut from '../../Components/NewslayOut/NewsLayOut'

const Home = ({data}) => {

  const loading = (
    <>
    <h1>Loading...</h1>
    </>
  )
  const load = (
      <>
       <Hero />
      <NewsLayOut data={data} />
      </>
  )
  return (
    <>
    <div className='w-full px-2 flex flex-col items-center'>
      { load }
    </div>

    </>
  )
}

export default Home