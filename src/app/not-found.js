'use client'
import React from 'react';
import Link from 'next/link';
import Lottie from 'lottie-react';
import notfound from '../data/notfound.json'

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Lottie animationData={notfound} className='animation h-72 flex justify-center' /><br/>
      <Link href="/" className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 ">
        Home
      </Link> 
    </div>
  );
};

export default Custom404;
