import React from 'react'
import Destinations from '../data/Destinations'
import { Link } from 'react-router-dom'

export default function Destination() {
  return (
                <div className='min-h-screen px-20 py-10 grid grid-cols-3 gap-10'>
                    {
                        Destinations.map((items) => (
                            <Link 
                            to={`/destination/${items.link}`}
                            style={{
                                backgroundImage: `url(${items.image})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover'
                            }}
                                key={items.id}
                                className='h-60 border border-gray-200 flex justify-center items-center shadow-lg boxtrans2 pt-20'>
                                <h1 className='text-4xl font-bold font-serif text-white'>{items.label}</h1>
                            </Link>
                        ))
                    }
                </div>
  )
}
