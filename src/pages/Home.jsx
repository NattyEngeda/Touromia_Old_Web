import React from 'react'
import { Link } from 'react-router-dom'
import tourg from '../assets/images/bg/tourg.jpg'
import touristbg from '../assets/images/bg/tourist.jpg'
import background from '../assets/images/background.jpg'
import logo from '../assets/images/logo/logo.png'
import Destinations from '../data/Destinations'
import Destination from '../components/Destination'
import tourguide from '../assets/images/tour_guid.png'
import areYou from '../assets/images/are_you.webp'
import { useEffect } from 'react'

export default function Home() {

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    //   }, []);
    

    return (
        <section className='h-auto flex flex-col'>
            {/* Section One */}
            <div
                className='min-h-screen'
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className='flex flex-col gap-10 items-center justify-center py-20'>
                    <img
                        className='w-full md:w-96'
                        src={logo}
                        alt="Main Logo" />
                    <h1 className=' text-3xl lg:text-5xl font-bold font-serif text-white text-center'>DREAM ,EXPLORE, DISCOVER OROMIA</h1>
                </div>

            </div>
            {/* Section two */}
            <div className='grid grid-cols-1 md:grid-cols-2  divide-x-2 py-20 bg-gray-100'>
                <div className='px-5 lg:px-20'>
                    <img
                        className='w-96'
                        src={logo}
                        alt="Main Logo" />
                </div>
                <div className='lg:pr-10 px-5 lg:px-20'>
                    <h1 className='font-serif font-semibold text-3xl lg:text-5xl'>
                        A Platform that connects 
                        Tour guides With Travellers in
                        Ethiopia
                    </h1>
                </div>
            </div>
            {/* Section Three */}
            <div className='flex flex-col justify-center pt-10 px-5'>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <h1 className='text-3xl'>What will be your next destination?</h1>
                    <p className='text-xl'>Choose destination for your next visit</p>
                </div>
                <Destination/>
            </div>
                        {/* Mid Section */}
                        <div className='w-full h-60 bg-yellow-200 shadow-xl my-10'>

                        </div>
            
            {/* Section Four */}
            <div className='h-auto py-1 grid grid-cols-1 lg:grid-cols-2'>
                {/* Tour Guide Pic */}
                <div className='flex flex-col items-center  h-full py-5 lg:pl-32 gap-10'>
                    <div className='border border-gray-200 shadow-xl px-5 lg:px-32 py-1'>
                        <h1 className='text-2xl text-center'>Why be with a <br /> tour guide?</h1>
                    </div>
                    <div className='w-3/6 h-96 boor'>
                        <img 
                            className='w-full h-full'
                            src={tourguide} 
                            alt="Tourist Guid" />
                    </div>

                </div>
                {/* Tour Guide Description */}
                <div className='px-5 lg:px-20 py-10'>
                    <ul className='list-disc space-y-1 text-sm'>
                        <li>There is no better way than a local guide to lead you to hidden places that only the locals know about.</li>
                        <li>Your guide is the best person to make you exchange with the inhabitants of the country, the city or the village that you visit and thus better know their way of life</li>
                        <li>A guide will tailor a tour to your needs and tastes. He or she will create customized itineraries, adapt to your preferences and suggest off-the-beaten-path tours.</li>
                        <li>A private guide will be your teacher, explaining each place in its historical and geographical context.</li>
                        <li>Your tour guide will answer all your questions about the local life (traditions, politics, culture, music, gastronomy …).</li>
                        <li>The guide will lead you safely to places that sometimes seem inaccessible. He will know how to make you travel through lost itineraries in the middle of nowhere in all serenity and safety.</li>
                        <li>The private guide is perfect for managing the logistics. The hours of visits with the least amount of people, the most interesting places for shopping, the fastest routes to get from one destination to another.</li>
                        <li>The tour guide is your personal translator, he is always present and can save you from possible scams.</li>
                    </ul>

                </div>
            </div>

            {/* Section tourguid */}

            <div className='w-full min-h-screen boor flex flex-col gap-10'>
                <div className='px-10 py-5'>
                    <h1 className='text-4xl text-blue-800 font-semibold'>What are you?</h1>
                </div>
                <div className='grid grid-cols-2 divide-x-2 h-full'
                    style={{
                        backgroundImage: `url(${areYou})`,
                        backgroundSize: 'cover'
                    }}>
                    <div className='h-full px-20'>
                        <div className='flex justify-center mb-10'>
                            <h1 className='text-purple-800 text-4xl'>Tourist</h1>
                        </div>
                        <div className='w-full h-[35rem] border border-gary-200  rounded-xl bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-xl flex flex-col items-center py-5 gap-5'>
                                <div>
                                    <h1  className='text-2xl font-bold '>Tourist</h1>
                                </div>
                                <div className='w-full px-5 flex flex-col gap-5'>
                                    <h1 className='text-xl font-semibold'>Coming from Another Country to Explore Ethiopia</h1>
                                    <p>Just Type in Where you want to go and get the best deal</p>
                                </div>
                                <div className='py-10'>
                                  <Link to='/tindex' className='px-10 p-5 text-white text-lg hover:bg-purple-800 hover:shadow-xl bg-purple-700'>Order A Tour</Link>
                                   
                                </div>
                            </div>
                        <div className='flex justify-center py-20'>
                        </div>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <div className='flex justify-center'>
                            <h1 className='text-orange-800 text-4xl'>Tour Guide</h1>
                        </div>
                        <div className='px-24'>
                            <div className='w-full h-[35rem] border border-gary-200  rounded-xl bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-xl flex flex-col items-center py-5 gap-5'>
                                <div>
                                    <h1  className='text-2xl font-bold '>Are You a tour guide? </h1>
                                </div>
                                <div className='w-full px-5 flex flex-col gap-5'>
                                    <h1 className='text-xl font-semibold'>Appearing on our site is completely free</h1>
                                    <p>The website will allow you to highlight your profile or that of your agency. <br/> Thanks to Guide Your Trip you will be able to make yourself better known and thus be contacted directly by tourists from all over the world. <br/>For this, nothing more simple, follow the link to fill the registration form and all the information you’ll need to create your profile.</p>
                                </div>
                                <div>
                                    <Link 
                                    to={'/tgindex'}
                                    className='bg-orange-700 px-10 p-5 text-white text-lg hover:bg-orange-800 hover:shadow-xl'>
                                        I am a tour guide
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </section>
    )
}
