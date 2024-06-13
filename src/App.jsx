import React,{useState} from 'react'
import './App.css'

import {Header, Footer} from './components';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(false);

  return  (
    <div className='w-full min-h-screen flex flex-wrap content-baseline bg-slate-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )

  
}

export default App
