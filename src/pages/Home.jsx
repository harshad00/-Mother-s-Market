import React, { useState, useEffect } from 'react';
// import appwriteService from '../appwrite/confing';
import appwriteService1 from '../appwrite/auth';
// import { Container, PostCart } from '../components';

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
 
      {user && (
        <div className='w-full py-8 mt-4 text-center'>
            <div className='flex flex-wrap px-5 '>
              <h1 className='text-2xl font-bold'>
                Welcome, {user.name}
              </h1>
            </div>
        </div>
      )}
      {
        !user &&(<h1> Hello Pls Log in</h1>)
      }

      </div>
  );


}
export default Home;
