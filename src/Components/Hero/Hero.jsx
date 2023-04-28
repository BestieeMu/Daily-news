import React, { useEffect, useState } from 'react'
import client from '../../client'
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Card} from '../Card';

const Hero = () => {
  const [banner, setBanner] = useState([]);

useEffect(() => {
 client.fetch(
  `*[_type == "banner"]{
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
    setBanner(data)
 }).catch(console.error)

 }, [])


 const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}
  return (
    <>
    <div   className='w-9/12 '>
      <Carousel 
    swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={5000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"

  >
 {  banner.map(baner =>(
<>
<Card item={baner}/>
</>
 ))}
</Carousel>
    </div>
   

    </>
  )
}

export default Hero