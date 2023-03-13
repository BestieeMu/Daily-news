import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [Test, setTest] = useState([])
    const [data, setData] = useState([]);

    const options = {
      method: 'GET',
      url: 'https://newscatcher.p.rapidapi.com/v1/search_enterprise',
      params: { q: `${'nigeria politics'} `, lang: 'en', sort_by: 'relevancy', page: '1', media: 'True' },
      headers: {
        'X-RapidAPI-Key': 'af5aa19560msh7b4b5aaf5baf3f4p133455jsna0150ed2dc74',
        'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
      }
    };
  
    useEffect(() => {
      window.onload = axios.request(options).then(function (response) {
        setData(response.data)
      }).catch(function (error) {
        console.error(error);
      });
  
    }, [])


    useEffect(() => {
        for (let i = 0; i < data?.articles?.length; i++) {
           
            setTest(prev => ([...prev, data.articles[i]]));
        }

    }, [])

   
  return (
    <>
      <div className="flex flex-col md:flex-row gap-1 w-full md:w-full xl:w-10/12 mt-20 ">
        <div className="w-full  main"
          style={{
            backgroundImage: `url(${Test[1]?.media})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'

          }}
        >
          <div className="w-full flex justify-center  h-full relative "
            style={{
              background: 'rgb(0,0,0)',
              background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 45%)'
            }}
          >
            <h3 className="absolute bottom-10 px-2 text-white text-xl">{Test[1]?.title}</h3>
          </div>
        </div>


        <div className="md:w-10/12 w-full flex gap-1 flex-col">
          <div className="w-full   submain1"
            style={{
              backgroundImage: `url(${Test[10]?.media})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
      
             }}
          >
              <div className="w-full flex justify-center  h-full relative "
            style={{
              background: 'rgb(0,0,0)',
              background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 45%)'
            }}
          >
            <h3 className="absolute bottom-7 px-2 text-white text-xl">{Test[10]?.title}</h3>
          </div>
          </div>

{/* two small cont on the right */}
          <div className="w-full flex flex-col md:flex-row gap-1">

            <div className="w-full submain2"
              style={{
                backgroundImage: `url(${Test[7]?.media})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
        
               }}
            >
                <div className="w-full flex justify-center  h-full relative "
            style={{
              background: 'rgb(0,0,0)',
              background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)'
            }}
          >
            <h3 className="absolute bottom-2 px-1 text-white text-sm">{Test[7]?.title}</h3>
          </div>
            </div>


            <div className="w-full submain3"
              style={{
                backgroundImage: `url(${Test[3]?.media})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
        
               }}
            > 
          <div className="w-full flex justify-center  h-full relative "
            style={{
              background: 'rgb(0,0,0)',
              background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)'
            }}
          >
            <h3 className="absolute bottom-2 px-1 text-white text-sm">{Test[3]?.title} </h3>
          </div>
          </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
