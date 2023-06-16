import { useState } from 'react'
import client from '../../client'
import { useEffect } from 'react';
import {MdArrowOutward} from 'react-icons/md'
import Hero from '../../Components/Hero/Hero';
import { PostCard, Entertainments, LifeStyle, Politics, Technology  } from '../../Components/Card';

const News = ({Entertainments_, LifeStyle_, Politics_, Technology_}) => {
const [News, setNews] = useState([]);
const [politics, setPolitics] = useState([]);
const [technology, setTechnology] = useState([]);
const [lifeStyle, setLifeStyle] = useState([]);
const [entertainments, setEntertainments] = useState([]);
const [isLoading, setIsLoading] = useState(true);

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
 setTimeout(() =>{
  setIsLoading(false)
 }, 1000)



 client.fetch(
  `
  *[_type == "post" &&  "Technology" in categories[]->title]{
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
 ).then((data) => setTechnology(data)).catch(console.error)


 client.fetch(
  `
  *[_type == "post" &&  "Entertainments" in categories[]->title]{
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
 ).then((data) => setEntertainments(data)).catch(console.error)


 client.fetch(
  `
  *[_type == "post" &&  "LifeStyle" in categories[]->title]{
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
 ).then((data) => setLifeStyle(data)).catch(console.error)


 client.fetch(
  `
  *[_type == "post" &&  "Politics" in categories[]->title]{
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
 ).then((data) => setPolitics(data)).catch(console.error)

}, [])

const loading = (
  <>
  <div className='w-10/12 flex justify-center items-center ' style={{
    height: '600px'
  }}>
<h1 className='text-3xl font-bold'>Loading...</h1>
  </div>
  
  </>
)


console.log(politics);
  return (
    <>

    
    <div className='w-full flex flex-col items-center pb-20'>
    { isLoading ? loading : (<>
{/* home secrren banner */}
<div className='w-full flex justify-center'>
  <Hero />
</div>
{/* latest news */}
<div className='w-10/12 mt-14'>
{isLoading ? '' :  <h1 className='text-3xl font-bold'>latest News  </h1>}
<div className='w-full grid grid-cols-4 mt-5 gap-3 '>
 {
        News.map((post) =>(
          <>
          <div className='w-full '>
          <PostCard post={post}/>
          </div>
          </>
        ))
      }
</div>
</div>
{/* latest news */}
<div className='w-10/12 mt-14' ref={LifeStyle_}>
{isLoading ? '' :  <h1 className='text-3xl font-bold gap-2 cursor-pointer hover:text-red-500 flex items-center'>LifeStyle <MdArrowOutward /></h1>}
<div className='w-full grid grid-cols-4 mt-5 gap-3 '>
 {
        lifeStyle.map((post) =>(
          <>
          <div className='w-full '>
            <LifeStyle post={post}/>
        
          </div>
          </>
        ))
      }
</div>
</div>
{/* latest news */}
<div className='w-10/12 mt-14' ref={Technology_}>
{isLoading ? '' :  <h1 className='text-3xl font-bold gap-2 cursor-pointer hover:text-red-500 flex items-center'>Technology <MdArrowOutward /></h1>}
<div className='w-full grid grid-cols-4 mt-5 gap-3 '>
 {
        technology.map((post) =>(
          <>
          <div className='w-full '>
          <Technology post={post}/>
          </div>
          </>
        ))
      }
</div>
</div>
{/* latest news */}
<div className='w-10/12 mt-14' ref={Politics_}>
{isLoading ? '' :  <h1 className='text-3xl font-bold gap-2 cursor-pointer hover:text-red-500 flex items-center'>Politics <MdArrowOutward /></h1>}
<div className='w-full grid grid-cols-4 mt-5 gap-3 '>
 {
        politics.map((post) =>(
          <>
          <div className='w-full '>
          <Politics post={post}/>
          </div>
          </>
        ))
      }
</div>
</div>
{/* latest news */}
<div className='w-10/12 mt-14' ref={Entertainments_}>
  {isLoading ? '' :  <h1 className='text-3xl font-bold gap-2 cursor-pointer hover:text-red-500 flex items-center'>Entertainments <MdArrowOutward /></h1>}
<div className='w-full grid grid-cols-4 mt-5 gap-3 '>
 {
        entertainments.map((post) =>(
          <>
          <div className='w-full '>
          <Entertainments post={post}/>
          </div>
          </>
        ))
      }
</div>
</div>
     

    </>) }
      </div>
    </>
  );
}

export default News