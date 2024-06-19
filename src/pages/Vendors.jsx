import React, {useEffect, useState} from 'react';
import appwriteService1 from "../appwrite/auth";

import { Link } from 'react-router-dom';
import {Slider} from '../components';


function Vendors() {
  


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
      <div className='bg-[#85FFBD]'>
     <div className="flex flex-col justify-center items-center"> 
     <h1 className="text-white text-3xl sm:text-4xl md:text-5xl pt-5">Vendors</h1>
            </div>   
            <div className="flex flex-wrap justify-center items-center gap-4 p-4">
            <div className="w-[90%] md:w-[80%] relative">
               <Slider />
             </div>

    </div>
         {/* <div className=' flex justify-center items-cnter  pt-7 pb-4 '>
       <Link to='/vendors'>
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
        </div>*/}
         </div> 
     
    )}
   
  </div>
  )}

export default Vendors;

