import { useState } from 'react'
import client from '../../client'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../Components/Hero/Hero';
import { PostCard } from '../../Components/Card';

const News = () => {
const [News, setNews] = useState([]);

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
 ).then((data) => setNews(data)).catch(console.error)

}, [])


  return (
    <div className='w-full'>
<div className='w-full flex justify-center'>
  <Hero />
</div>


<div>
 {
        News.map((post) =>(
          <>
          <div className='w-full'>

          <PostCard post={post}/>
          </div>
          </>
        ))
      }
</div>
     
      </div>
  )
}

export default News