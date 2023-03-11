import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-1 w-full md:w-full xl:w-10/12 mt-10">
        <div className="w-full bg-green-400 main"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBvbGl0aWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60')`,
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
            <h3 className="absolute bottom-10 px-2 text-white text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias, maiores accusamus quae aspernatur quisquam iure!</h3>
          </div>
        </div>


        <div className="md:w-10/12 w-full flex gap-1 flex-col">
          <div className="w-full bg-blue-400 submain1"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60')`,
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
            <h3 className="absolute bottom-7 px-2 text-white text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias, maiores accusamus quae aspernatur quisquam iure!</h3>
          </div>
          </div>

{/* two small cont on the right */}
          <div className="w-full flex flex-col md:flex-row gap-1">

            <div className="w-full bg-yellow-400 submain2"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNwb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60')`,
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
            <h3 className="absolute bottom-2 px-1 text-white text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias, maiores accusamus quae aspernatur quisquam iure!</h3>
          </div>
            </div>


            <div className="w-full bg-pink-400 submain3"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60')`,
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
            <h3 className="absolute bottom-2 px-1 text-white text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias, maiores accusamus quae aspernatur quisquam iure! </h3>
          </div>
          </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
