import React, { useEffect } from 'react'
import {Link, useParams} from 'react-router-dom'
import { useState } from 'react'
import client from '../../client'
import BlockContent from '@sanity/block-content-to-react'


const NewBody = () => {
  const [newsDetail, setNewsDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
     client.fetch(
      `*[slug.current == "${slug}"]{
  title,
  body,
  mainImage{
    asset ->{
       _id,
       url
    },
    alt
  }
  }`
     ).then((data) => setNewsDetail(data[0])).catch(console.error)
     setIsLoading(false)
  }, [slug])
  

  return (
    <div>
      {isLoading ? "loading..." : 
      <section className='flex flex-col items-center'>
        <h1 className='text-4xl font-bold py-6 text-center'>{newsDetail.title}</h1>
       {
        newsDetail.mainImage && newsDetail.mainImage.asset && (
           <img src={newsDetail.mainImage.asset.url} alt={newsDetail.title} title={newsDetail.title} 
           className='w-11/12'
           />
        )
       }
       <div className='mt-10 w-9/12'>
        <BlockContent
         blocks={newsDetail.body}
          projectId='g748rhyo'
          dataset='production'
          />

       </div>
      </section>
      }
    </div>
  )
}

export default NewBody