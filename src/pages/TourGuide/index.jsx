import React from 'react'
import { useEffect } from 'react';
import { Input } from '@mantine/core';
import back from '../../assets/images/tgImage/back.webp'
import { Link } from 'react-router-dom';
// import { IconAt } from '@tabler/icons';


export default function index() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div 
    style={{
      backgroundImage: `url(${back})`,
      backgroundSize: 'cover'
    }}
    className='min-h-screen bg-gray-100 py-20'
    >
      <div className='w-1/4 m-auto rounded-xl  border border-gray-200 h-96 bg-white bg-opacity-40 backdrop-blur-lg drop-shadow-xl'>
        <div className='py-5 px-10'>
          <h1 className='text-xl'>Login</h1>
        </div>
        <div className='px-10 '>
          <form
            className='w-full flex flex-col gap-4'
            action=""
          >
           <div>
              <p>Email: </p>
              <Input
                placeholder="Your email"
                size="md"
              />
           </div>
           <div>
              <p>Password: </p>
              <Input
                placeholder="Your email"
                size="md"
              />
           </div>
           <div>
            <Link to='/tgsign'>Don't have an account??</Link>
           </div>
           <div>
              <Link 
              to='/tgDashboard'
              className='px-6 py-2 bg-purple-700 hover:bg-purple-800 hover:shadow-lg text-white text-lg'>Login</Link>
           </div>
          </form>
        </div>
      </div>
    </div>
  )
}
