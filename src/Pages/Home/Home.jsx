import React from 'react'
import Hero from '../../Components/Hero/Hero'
import NewsLayOut from '../../Components/NewslayOut/NewsLayOut'

const Home = ({data}) => {
  return (
    <>
    <div className='w-full px-2 flex flex-col items-center'>
      <Hero />
      <NewsLayOut data={data} />
    </div>

    </>
  )
}

export default Home