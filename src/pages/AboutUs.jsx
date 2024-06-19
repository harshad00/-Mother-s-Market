import React, { useEffect, useState } from "react";
import appwriteService1 from "../appwrite/auth";

function AboutUs() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   // Fetch current user
  //   appwriteService1.getCurrentUser().then((currentUser) => {
  //     setUser(currentUser);
  //   });
  // }, []);
  return (
    
      <div className="bg-[#85FFBD]">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl pt-5">
              About Us
            </h1>
          </div>

          <div className="px-4 sm:px-10 md:px-20">
            <div>
              <h2 className="text-white font-semibold text-xl sm:text-2xl">
                Mission Statement
              </h2>
              <p className="text-justify text-base sm:text-lg p-2 font-semibold">
                At Mother&apos;s Market, our mission is to cultivate a vibrant
                community by providing a welcoming space where local farmers,
                artisans, and families come together. We are dedicated to
                offering the freshest produce, highest quality handmade goods,
                and a nurturing environment that promotes sustainable living and
                strengthens local connections. Our commitment is to support
                small businesses and foster a sense of belonging for all who
                visit.
              </p>
            </div>
            <div>
              <h2 className="text-white font-semibold text-xl sm:text-2xl mt-5">
                History
              </h2>
              <p className="text-justify text-base sm:text-lg p-2 font-semibold  ">
                Mother&apos;s Market was founded in [Year] by a group of
                passionate community members who saw a need for a local
                gathering place centered around fresh, healthy food and
                handcrafted goods. Inspired by the nurturing spirit of
                motherhood, they envisioned a market that would not only offer
                high-quality products but also create a space for community
                bonding and support. Over the years, Mother&apos;s Market has
                grown from a small gathering of vendors to a bustling hub that
                attracts visitors from all around, staying true to its roots of
                fostering local talent and promoting sustainable practices.
              </p>
            </div>
            <div>
              <h2 className="text-white font-semibold text-xl sm:text-2xl mt-5">
                Community Impact
              </h2>
              <div className="text-justify text-base sm:text-lg p-2 font-semibold ">
                Mother&apos;s Market has become a cornerstone of our community,
                making a significant impact in several ways:
                <ol className="list-decimal list-inside">
                  <li className="p-2">
                    Supporting Local Farmers and Artisans: By providing a
                    platform for local vendors, we help small businesses thrive,
                    ensuring that local farmers and artisans can sustain their
                    livelihoods.
                  </li>
                  <li className="p-2">
                    Promoting Health and Wellness: Access to fresh, organic
                    produce and healthy food options encourages better eating
                    habits and overall wellness among our visitors.
                  </li>
                  <li className="p-2">
                    Strengthening Community Bonds: The market serves as a social
                    hub where families, friends, and neighbors can connect,
                    fostering a strong sense of community.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      
  );
}

export default AboutUs;
