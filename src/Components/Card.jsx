import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({item}) => {
  return (
    <div>
         <div key={item.title} className='relative w-full mt-10 rounded-md p-3 h-96'
    style={{
      backgroundImage: `url(${item.mainImage?.asset?.url})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.434)",
    }}
    >
<div className='absolute bottom-20 left-10'>
  <h2 className=' text-3xl text-white font-bold'>{item.title}</h2>
          <Link to={`/news/${item.slug.current}`}><button className='bg-red-500 w-28 py-1 rounded text-white mt-5'>Read more</button></Link>
  
</div>
    </div>
    </div>
  )
}

const PostCard = ({post}) => {
  return (
    <div>
  <article key={post.slug.current}>
           <img src={post.mainImage.asset.url} alt={post.title} 
           className='w-96'
           />
           <h4 className='text-3xl font-bold'>{post.title}</h4>
           <Link to={`/news/${post.slug.current}`}>Read more</Link>
          </article>
    </div>
  )
}
export  {Card, PostCard}