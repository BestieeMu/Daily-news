import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Politics from '../Politics/Politics'
import Sport from '../Sport/Sport'
import Tech from '../TechNews/Tech'
import './NewsLayOut.css'

const NewsLayOut = () => {
    const [Test, setTest] = useState([])
    const [data, setData] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://free-news.p.rapidapi.com/v1/search',
        params: {q: 'latest music', lang: 'en'},
        headers: {
          'X-RapidAPI-Key': 'af5aa19560msh7b4b5aaf5baf3f4p133455jsna0150ed2dc74',
          'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        setData(response.data);
      }).catch(function (error) {
        console.error(error);
      });
  
      useEffect(() => {
        for (let i = 0; i < data?.articles?.length; i++) {
           
            setTest(prev => ([...prev, data.articles[i]]));
           
        }
  
    }, [])
  
      let news = Test.slice(0, 9)
  

    return (
        <>
            <div className='w-full flex  xl:w-10/12  mt-6'>
<div className='w-full'>
            <Tech/>
            <Politics />
            <Sport />

</div>
               
                {/* the right side cards is here */}

                <div className='w-6/12  '>

                    <div className='w-full flex flex-col items-center'>
                        <div className='py-2 w-11/12 font-bold text-2xl border-b-4 border-red-500'> Music</div>
                         {news.map((item) => (
                            <>
                             {/* my news card start here */}
                        <div key={item._id} className='w-full flex justify-center mt-5'>
                            <div className=' w-11/12 rounded overflow-hidden max-h-72'>
                                <div className='w-full h-44'
                                    style={{
                                        backgroundImage: `url(${item.media})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'

                                    }}
                                ></div>
                                <div className=' relative h-28'>
                                    <h5 className='font-medium text-1xl'>{item.title}</h5>

                                    <div className='flex w-full gap-2 absolute bottom-1 pl-2 text-sm'>
                                        <p className='px-1 border-r'>{item.author}</p>
                                        <p>{item.published_date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* news card ends here */}

                            </>
                         ))}
                       
                    </div>


                </div>
            </div>

        </>
    )
}

export default NewsLayOut