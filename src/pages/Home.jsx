import React, { useState, useEffect } from "react";
import "./Home.css";
import { Card, Slider } from "../components";
import { Link } from "react-router-dom";
import appwriteService1 from "../appwrite/auth";
import AboutUs from "./AboutUs";
import Market from "./Market";
import Gallery from "./Gallery";
import EventAndNews from "./EventAndNews";
import CustomerReview from "./CustomerReview";
function Home() {
  // const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch current user
    appwriteService1.getCurrentUser().then((currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <div>
      {user &&
       
       <div>
         <section>
           <div className="hero">
             <div className="text z-[10] flex flex-col justify-center h-[70vh] items-center px-4 sm:px-8 md:px-12 lg:px-16">
              <h2 className="text-white text-xl font-bold"> Wlecome {user.name} </h2>
               <h1 className="text-black font-bold text-4xl sm:text-center sm:text-5xl md:text-6xl lg:text-7xl">
                 Welcome to Mother&apos;s Market
               </h1>
               <p className="text-black text-center font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4">
                 Nourish your family with the freshest local produce and handmade goods.
               </p>
               <div className="flex flex-col sm:flex-row justify-center sm:justify-end mt-8 sm:mt-12">
                 <Link to='/weekend'>
                   <button
                     type="button"
                     className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-black hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 mx-2 mb-4 sm:mb-0"
                   >
                     Visit Us This Weekend
                   </button>
                 </Link>
                 <Link to='/vendors'>
                   <button
                     type="button"
                     className="rounded-md border border-black hover:shadow-black px-4 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mx-2"
                   >
                     Explore Vendors
                   </button>
                 </Link>
               </div>
             </div>
           </div>
         </section>
     
         <section className="bg-[#85FFBD] py-10">
           <EventAndNews />
         </section>
     
         <section className="bg-[#85FFBD] py-10">
           <div className="flex flex-col gap-10 justify-center items-center">
             <h1 className="text-white text-3xl sm:text-4xl md:text-5xl">Features Vendors</h1>
             <div className="w-[90%] md:w-[80%] relative">
               <Slider />
             </div>
           </div>
         </section>
     
         <section className="bg-[#85FFBD] py-10">
           <Market />
         </section>
     
         <section className="bg-[#85FFBD] py-10">
           <AboutUs />
         </section>
     
         <section className="bg-[#85FFBD] py-10">
           <Gallery />
         </section>
         <section className="bg-[#85FFBD] py-10">
           <CustomerReview/>
         </section>
         
        </div>}
      {!user && (
         <div>
         <section>
           <div className="hero">
             <div className="text z-[10] flex flex-col justify-center h-[70vh] items-center px-4 sm:px-8 md:px-12 lg:px-16">
               <h1 className="text-black font-bold text-4xl  text-center sm:text-3xl md:text-6xl lg:text-7xl">
                 Welcome to Mother&apos;s Market
               </h1>
               <p className="text-black text-center font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4">
                 Nourish your family with the freshest local produce and handmade goods.
               </p>
               <div className="flex flex-col  sm:flex-row justify-center sm:justify-end mt-8 sm:mt-12">
                 <Link to='/weekend'>
                   <button
                     type="button"
                     className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-black hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 mx-2 mb-4 sm:mb-0"
                   >
                     Visit Us This Weekend
                   </button>
                 </Link>
                 <Link to='/login' className="flex justify-center">
                   <button
                     type="button"
                     className="rounded-md border border-black hover:shadow-black px-4 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mx-2"
                   >
                     Explore Vendors
                   </button>
                 </Link>
               </div>
             </div>
           </div>
         </section>
     
         <section className="bg-[#85FFBD] py-10">
           <EventAndNews />
         </section>
     
         <section className="bg-[#85FFBD] py-10">
           <div className="flex flex-col gap-10 justify-center items-center">
             <h1 className="text-white text-3xl sm:text-4xl md:text-5xl">Features Vendors</h1>
             <div className="w-[90%] md:w-[80%] relative">
               <Slider />
             </div>
           </div>
         </section>
     
         <section className="bg-[#85FFBD] py-10">
           <Market />
         </section>
     
         <section className="bg-[#85FFBD] py-10">
           <AboutUs />
         </section>
     
         <section className="bg-[#85FFBD] py-10">
           <Gallery />
         </section>
         <section className="bg-[#85FFBD] py-10">
           <CustomerReview/>
         </section>
       </div>
        )}
    </div>
  );
  

   
}
  
  
  




export default Home;
