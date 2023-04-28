import React, { useEffect, useState } from 'react'
import client from '../../client'
import { Link } from 'react-router-dom';

const Hero = () => {
  const [banner, setBanner] = useState([]);

useEffect(() => {
 client.fetch(
  `*[_type == "post"]{
  title,
  slug,
  body,
  mainImage{
    asset ->{
       _id,
       url
    },
    alt
  }

  }`
 ).then((data) => {
  data.map(baner =>{
    setBanner(baner)
  })
 }).catch(console.error)

 }, [])
  return (
    <>
    <div className='relative w-9/12 mt-10 rounded-md p-3 h-96'
    style={{
      backgroundImage: `url(${banner.mainImage?.asset?.url})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}
    >
<div className='absolute bottom-20 left-10'>
  <h2 className=' text-3xl text-white font-bold'>{banner.title}</h2>
  <button className='bg-red-500 w-28 py-1 rounded text-white mt-5'>Read more</button>
</div>
    </div>

    </>
  )
}

export default Hero