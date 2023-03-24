import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Sport = () => {
    const [Test, setTest] = useState([])
    const [data, setData] = useState([]);
    const options = {
      method: 'GET',
      url: 'https://free-news.p.rapidapi.com/v1/search',
      params: {q: 'sports', lang: 'en'},
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
      <div className='w-full flex pb-4 flex-col items-center overflow-hidden' >

<div className='w-full border-b-4 px-2 py-1 border-red-500'><h3 className='text-2xl font-bold'>Sport News</h3></div>

<div className='mt-4 grid grid-cols-3 w-full place-content-between gap-2'>
    {
        news.map((dat) => (
                <>
                 {/* my news card start here */}
    <div key={dat._id} className='w-56 rounded overflow-hidden max-h-52'>
        <div className='w-full h-32'
            style={{
                backgroundImage: `url(${dat.media})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'

            }}
        > </div>
        <div className=' bg relative h-24'>
            <h5 className='font-bold text-sm h-10  overflow-hidden'>{dat.title}</h5>

            <div className='flex w-full gap-2 absolute bottom-1 pl-2 text-xs font-medium'>
                <p className='px-1 border-r'>{dat.author}</p>
                <p>{dat.published_date}</p>
            </div>
        </div>
    </div>
    {/* news card ends here */}

                </>

        )   
        )
    }
   
</div>
{/* grid cont ends here */}

{/* show more button  that will take you to a page of news of nthat category */}
<div className='mt-5'>
    <button className='py-1 rounded px-4 bg-red-200 text-red-500'> Show more</button>
</div>

</div>

    </>
  )
}

export default Sport