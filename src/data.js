// import axios from "axios";
// import React, { useEffect, useState } from 'react'

// const data = () => {
//     const [newsData, setNewsData] = useState([]);

//   const options = {
//     method: 'GET',
//     url: 'https://newscatcher.p.rapidapi.com/v1/search_enterprise',
//     params: { q: `${search} `, lang: 'en', sort_by: 'relevancy', page: '1', media: 'True' },
//     headers: {
//       'X-RapidAPI-Key': 'af5aa19560msh7b4b5aaf5baf3f4p133455jsna0150ed2dc74',
//       'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
//     }
//   };

//   useEffect(() => {
//     axios.request(options).then(function (response) {
//       setNewsData(response.data)
//     }).catch(function (error) {
//       console.error(error);
//     });

//   }, [])


//   return (
//     <div>
        
//     </div>
//   )
// }

// export  {data, newsData }