import React from 'react'
import { Bookmark, Newspaper, User } from 'react-hero-icon/solid'
import { useState } from 'react'
import profile from '../../assets/images/profile.jpg'
import { PlusCircle } from 'react-hero-icon/solid'

export default function Dahboard() {
    const [side, setSide] = useState('profile');
    var profile = document.getElementById('profile1');
    var tour1 = document.getElementById('tour1');
    var request1 = document.getElementById('request1');

    const change1 = (event) =>{
       let man = document.getElementById('profile1');
       let man2 = document.getElementById('tour1');
       let man3 = document.getElementById('request1');

       man.classList.toggle('hidden')
       man2.classList.add('hidden')
       man3.classList.add('hidden')
    }

    const change2 = (event) =>{
        let man = document.getElementById('profile1');
        let man2 = document.getElementById('tour1');
        let man3 = document.getElementById('request1');
 
        man2.classList.toggle('hidden')
        man.classList.add('hidden')
        man3.classList.add('hidden')
     }
     
    const change3 = (event) =>{
        let man = document.getElementById('profile1');
       let man2 = document.getElementById('tour1');
       let man3 = document.getElementById('request1');

       man3.classList.toggle('hidden')
       man2.classList.add('hidden')
       man.classList.add('hidden')
     }
 
  return (
    <div className='min-h-screen'>
      <div className='px-10 py-10'> 
        <h1 className='text-2xl text-purple-700'>Dashboard</h1>
      </div>
      <div className='grid grid-cols-5 px-10 divide-x-2'>
        <div className='flex flex-col divide-y-2 col-span-1'>
            <button
            onClick={(event) =>{
                change1(event)
            }}
            id='profile'
            className='flex  gap-2  py-3 px-2 hover:bg-gray-200'>
                <User/>
                <p>Profile</p>
            </button>
            <button 
            onClick={change2}
            id='tour'
            className='flex  gap-2  py-3 px-2 hover:bg-gray-200'>
                <Bookmark/>
                <p>Tours</p>
            </button>
            <button 
           onClick={(event) =>{
            change3(event)
              }}
            id='request'
            className='flex  gap-2  py-3 px-2 hover:bg-gray-200'>
                <Newspaper/>
                <p>Request</p>
            </button>

        </div>
        <div className='col-span-4 w-auto min-h-screen  py-10'>
            {/* Profile */}
            <div id='profile1' className=' relative w-[90%] m-auto h-52 border border-gary-200 bg-gray-200 rounded-2xl'>
                <div className='absolute bottom-10 left-10 boor w-32 h-32 rounded-full overflow-hidden'>
                    <img src={profile} 
                    className='w-full'
                    alt="" />
                </div>
                <div className='pl-52 py-20'>
                    <div className='flex gap-2 items-end'>
                        <h1 className='text-lg font-semibold '>Name: </h1>
                        <p>Natnael Engeda</p>
                    </div>
                   
                </div>
            </div>

            {/* Tour */}
            <div id='tour1' className='hidden px-10'>
              <h1 className='text-2xl'>Tours </h1>
              <div className='px-10 py-10'>
               <div className='flex flex-row gap-2 cursor-pointer'>
               <PlusCircle/> <h1>Add Tours</h1>
               </div>
               <div className='grid grid-cols-3 p-5 gap-5'>
                      <div className='border border-gray-200 rounded-lg p-3 w-full boxtrans cursor-pointer'>
                          Tour
                      </div>
                      <div className='border border-gray-200 rounded-lg p-3 w-full boxtrans cursor-pointer'>
                          Tour
                      </div><div className='border border-gray-200 rounded-lg p-3 w-full boxtrans cursor-pointer'>
                          Tour
                      </div><div className='border border-gray-200 rounded-lg p-3 w-full boxtrans cursor-pointer'>
                          Tour
                      </div><div className='border border-gray-200 rounded-lg p-3 w-full boxtrans cursor-pointer'>
                          Tour
                      </div>
                  </div>
            </div>
            </div>
           

            {/* Request */}
            <div id='request1' className='hidden px-10'>
                <div className=''>
                <h1 className='text-2xl '>Requests</h1>
                </div>
                <div className='boor h-full py-4'>
                  <h1>New Requests</h1>
                  <hr />
                  <div className='flex flex-col p-5 gap-5'>
                      <div className='border border-gray-200 rounded-lg p-3 w-1/3 boxtrans cursor-pointer'>
                          New Request
                      </div>
                      <div className='border border-gray-200 rounded-lg p-3 w-1/3 boxtrans cursor-pointer'>
                          New Request
                      </div><div className='border border-gray-200 rounded-lg p-3 w-1/3 boxtrans cursor-pointer'>
                          New Request
                      </div><div className='border border-gray-200 rounded-lg p-3 w-1/3 boxtrans cursor-pointer'>
                          New Request
                      </div><div className='border border-gray-200 rounded-lg p-3 w-1/3 boxtrans cursor-pointer'>
                          New Request
                      </div>
                  </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
