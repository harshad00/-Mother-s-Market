import React, {useEffect, useState} from 'react';
import appwriteService1 from "../appwrite/auth";
import { Link } from 'react-router-dom';

function Market() {
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
        <>
        
        <div className="p-6">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl pt-6">Market Details</h1>
      </div>

      <div className="flex flex-col sm:flex-row justify-around items-center flex-wrap">
        <p className='text-lg sm:text-xl md:text-2xl py-5 font-bold text-center sm:text-cnter md:text-cnter '>
          <span className='text-xl sm:text-2xl md:text-3xl'>Address:</span>
          Mother&apos;s Market Address: 1234 Fresh Avenue, Greenfield, State, ZIP Code
        </p>
      </div>

      <div className='flex justify-center'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.6916201931926!2d145.14787023916244!3d-37.86282264058851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63fc7d039b8f9%3A0xf07d53931f8c8684!2shiremystudios!5e0!3m2!1sen!2sin!4v1718603898970!5m2!1sen!2sin"
          width="60%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
          className='border rounded-md'
        ></iframe>
      </div>

      <div className="flex flex-col justify-center py-6 items-center gap-5">
        <h2 className='text-3xl sm:text-4xl text-red-600/80 underline'>Market Hours</h2>
        <p className='text-white font-semibold text-xl sm:text-2xl'>Saturday: 8:00 AM - 2:00 PM</p>
        <p className='text-white font-semibold text-xl sm:text-2xl'>Sunday: 9:00 AM - 1:00 PM</p>
      </div>

      <div className="flex justify-center">
        <Link to=''>
          <button
            type="button"
            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-black hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 mx-2"
          >
            All Market Details
          </button>
        </Link>
      </div>
    </div>  
       </>
      </div>
    )}
    {!user && (
        <>
        
        <div className="p-6">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl pt-6">Market Details</h1>
      </div>

      <div className="flex flex-col sm:flex-row justify-around items-center flex-wrap">
        <p className='text-lg sm:text-xl md:text-2xl py-5 font-bold text-center sm:text-cnter md:text-cnter '>
          <span className='text-xl sm:text-2xl md:text-3xl'>Address:</span>
          Mother&apos;s Market Address: 1234 Fresh Avenue, Greenfield, State, ZIP Code
        </p>
      </div>

      <div className='flex justify-center'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.6916201931926!2d145.14787023916244!3d-37.86282264058851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63fc7d039b8f9%3A0xf07d53931f8c8684!2shiremystudios!5e0!3m2!1sen!2sin!4v1718603898970!5m2!1sen!2sin"
          width="60%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
          className='border rounded-md'
        ></iframe>
      </div>

      <div className="flex flex-col justify-center py-6 items-center gap-5">
        <h2 className='text-3xl sm:text-4xl text-red-600/80 underline'>Market Hours</h2>
        <p className='text-white font-semibold text-xl sm:text-2xl'>Saturday: 8:00 AM - 2:00 PM</p>
        <p className='text-white font-semibold text-xl sm:text-2xl'>Sunday: 9:00 AM - 1:00 PM</p>
      </div>

      <div className="flex justify-center">
        <Link to='/login'>
          <button
            type="button"
            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-black hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 mx-2"
          >
            All Market Details
          </button>
        </Link>
      </div>
    </div>  
       </>
    )}

    </div>
  );
}

export default Market;
