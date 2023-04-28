import { useState } from 'react'
import client from '../../client'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../Components/Hero/Hero';

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
          <article key={post.slug.current}>
           <img src={post.mainImage.asset.url} alt={post.title} 
           className='w-96'
           />
           <h4 className='text-3xl font-bold'>{post.title}</h4>
           <Link to={`/news/${post.slug.current}`}>Read more</Link>
          </article>
          </>
        ))
      }
</div>
     
      </div>
  )
}

export default News