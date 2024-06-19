import React, {useEffect, useState} from 'react';
import appwriteService1 from "../appwrite/auth";
import { Card } from '../components';
import { Link } from 'react-router-dom';


function Gallery() {
  
const img = [
  {
    "id": 1,
    "img": "/img/img1.jpg"
  },
  {
    "id": 2,
    "img": "/img/img2.jpg"
  },
  {
    "id": 3,
    "img": "/img/img3.jpg"
  },
  {
    "id": 4,
    "img": "/img/img4.jpg"
  },
  {
    "id": 5,
    "img": "/img/img7.jpg"
  },
  {
    "id": 6,
    "img": "/img/img6.jpg"
  }
]

  const [user, setUser] = useState(null);
useEffect(() => {
  // Fetch current user
  appwriteService1.getCurrentUser().then((currentUser) => {
    setUser(currentUser);
  });
}, []);
  return (
    <div> 
    {user && (
      <div>
     <div className="flex flex-col justify-center items-center"> 
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl pt-5">
            Gallery
            </h1>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 p-4">
      {img.map((d) => (
        <div key={d.id} className="flex flex-wrap  gap-24">
          <img 
            src={d.img} 
            alt={`Gallery Image ${d.id}`} 
            className="w-full h-40  object-cover rounded-md shadow-md"
            loading='lazy'
          />
        </div>
      ))}
    </div>
         <div className=' flex justify-center items-cnter  pt-7 pb-4 '>
       <Link to='/gallery'>
        <button
                type="button"
                className="rounded-md
         bg-green-600 px-3 
         py-2 text-sm font-semibold
          text-white shadow-sm
         hover:shadow-black
          hover:bg-green-600/80 
          focus-visible:outline 
          focus-visible:outline-2
          focus-visible:outline-offset-2
         focus-visible:outline-green-600
         mx-2"
         
              >
               Click for More
              </button>
              </Link>
        </div>
         </div>
     
    )}
    {!user && (
      <div>
              
              <div className="flex flex-col justify-center items-center"> 
            <h1 className=" text-white text-[3rem] "> Gallery</h1>
            </div>   
            <div className="flex flex-wrap justify-center items-center gap-4 p-4">
      {img.map((d) => (
        <div key={d.id} className="flex flex-wrap  gap-24">
          <img 
            src={d.img} 
            alt={`Gallery Image ${d.id}`} 
            className="w-full h-40  object-cover rounded-md shadow-md"
            loading='lazy'
          />
        </div>
      ))}
    </div>
         <div className=' flex justify-center items-cnter  pt-7 pb-4 '>
       <Link to='/login'>
        <button
                type="button"
                className="rounded-md
         bg-green-600 px-3 
         py-2 text-sm font-semibold
          text-white shadow-sm
         hover:shadow-black
          hover:bg-green-600/80 
          focus-visible:outline 
          focus-visible:outline-2
          focus-visible:outline-offset-2
         focus-visible:outline-green-600
         mx-2"
         
              >
               Click for More
              </button>
              </Link>
        </div>
         </div>
    )}

    </div>

  );
}

export default Gallery;
