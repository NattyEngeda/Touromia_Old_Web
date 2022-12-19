import React from 'react'
import image from '../assets/images/about.webp'

export default function About() {
  return (
    <div className='min-h-screen flex flex-row  py-10'>
      <div className='w-full'>
        <img src={image} alt="about" />
      </div>
        <div className='w-full py-20 px-10'>
            <h1 className='text-lg'>TOUROMIA is an online platform for tourists allover the world & tour guides in oromia Tourist destinations to meet online. We aspire to change the concept of travelling by making it cheap,  more simple and efficient .We’re on a journey to digitize & transform the tour and tour guiding connection culture in Ethiopia and make your journey to be  extraordinary . We are your virtual tour planner act as a guide & friend willing to make you have a great  experience with locals and live like locals , help  you plan your tour, accommodation and transport services . Wherever your travels take you, we’ll show you the unique and unmissable things to do in these tourist destinations . With TOUROMIA  on your side (and in your pocket), creating memorable moments has never been easier. use TOUROMIA  to turn your travel dreams into reality. And we’re just getting started. We're changing the way people connect to the places they visit so anyone can create their dream vacation.  We guide U Travel</h1>
        </div>
    </div>
  )
}
