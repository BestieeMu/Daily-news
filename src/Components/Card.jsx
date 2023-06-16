import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import client from '../../src/client'


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
<div className='absolute w-7/12 bottom-20 left-10'>
  <h2 className=' text-3xl text-white font-bold'>{item.title}</h2>
          <Link to={`/${item.slug.current}`}><button className='bg-red-500 w-28 py-1 rounded text-white mt-5'>Read more</button></Link>
  
</div>
    </div>
    </div>
  )
}

const PostCard = ({post}) => {
  
  return (
    <div >
  <article key={post.slug.current} className=' relative w-80 pb-6'>
           <img src={post.mainImage.asset.url} alt={post.title} 
           className='w-96 h-52 rounded'
           />
           <Link to={`/${post.slug.current}`}><h4 className='text-2xl font-medium'>{post.title}</h4> </Link>
          </article>
    </div>
  )
}


const Related = () =>{
  const [related, setRelated] = useState([]);

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
    ).then((data) => setRelated(data)).catch(console.error)
   
   }, [])

  //  for(let i = 0; i < related.length; i++) {
  //   console.log(related[1]);
  //  }
   
   return(
<>
<div className='w-full mt-20 flex flex-col items-center '>
  <div className='w-10/12'> <h1 className='text-start text-3xl font-bold'>More Related</h1></div>
  <div className='w-10/12  grid grid-cols-4 mt-14 gap-3'>
  {
        related.map((post) =>(
          <>
           <article key={post.slug.current} className=' relative w-80 h-96'>
           <img src={post.mainImage.asset.url} alt={post.title} 
           className='w-96 h-52'
           />
            <Link to={`/${post.slug.current}`}><h4 className='text-2xl font-medium'>{post.title}</h4> </Link>
          </article>
          </>
        ))
      }
  </div>
</div>
</>
   );
}

// section components
const Politics = ({post}) => {
  
  return (
    <div >
  <article key={post.slug.current} className=' relative w-80 h-96'>
           <img src={post.mainImage.asset.url} alt={post.title} 
           className='w-96 h-52 rounded'
           />
          <Link to={`/${post.slug.current}`}><h4 className='text-2xl font-medium'>{post.title}</h4> </Link>
          </article>
    </div>
  )
}


const Technology = ({post}) => {
  
  return (
    <div >
  <article key={post.slug.current} className=' relative w-80 h-96'>
           <img src={post.mainImage.asset.url} alt={post.title} 
           className='w-96 h-52 rounded'
           />
           <Link to={`/${post.slug.current}`}><h4 className='text-2xl font-medium'>{post.title}</h4> </Link>
          </article>
    </div>
  )
}


const  LifeStyle = ({post}) => {
  
  return (
    <div >
  <article key={post.slug.current} className=' relative w-80 h-96'>
           <img src={post.mainImage.asset.url} alt={post.title} 
           className='w-96 h-52 rounded'
           />
            <Link to={`/${post.slug.current}`}><h4 className='text-2xl font-medium'>{post.title}</h4> </Link>
          </article>
    </div>
  )
}


const Entertainments  = ({post}) => {
  
  return (
    <div >
  <article key={post.slug.current} className=' relative w-80 h-96'>
           <img src={post.mainImage.asset.url} alt={post.title} 
           className='w-96 h-52 rounded'
           />
            <Link to={`/${post.slug.current}`}><h4 className='text-2xl font-medium'>{post.title}</h4> </Link>
          </article>
    </div>
  )
}

export  {Card, PostCard, Related, Entertainments, LifeStyle, Technology, Politics}