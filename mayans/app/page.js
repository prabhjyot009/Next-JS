'use client'

import React from 'react'
import { useRouter } from 'next/navigation';


const Home = () => {
  // creating instance of useRouter
  const router = useRouter();

  const navigator=(page)=>{
    router.push(page);
  }

  return (
  <section>
    <h1>useRouter</h1>
    <button 
    className='border px-2 py-4' 
    onClick={()=> navigator("about")}>Go to About page</button>
  </section>
  );  
};

export default Home;