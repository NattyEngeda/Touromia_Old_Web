import React from 'react'
import { LocationMarker } from 'react-hero-icon/outline'
import bg from '../../assets/images/touristImgs/bgimg3.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import touristData from '../../data/touristData';
import Destinations from '../../data/Destinations';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom'

import image from '../../assets/images/touristImgs/randback.png';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination,Autoplay } from "swiper";

export default function Index() {
  const [where, setWhere] = useState(' ');
  {console.log(where)}

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);


  const [value, setValue] = React.useState(null);
  return (
    <section>
      {/* Search Option  */}
      <div className='py-10 px-20'>
        <form 
        action=""
        className='flex-row w-full h-[58px] grid grid-cols-4 overflow- rounded-full border border-gray-300 shadow-lg divide-x-2'>
          <div className='relative'>
          <LocationMarker
          className='absolute top-4 left-5 w-7 h-7 text-gray-700'
          />
          <Autocomplete
            style={{
              
            }}
            className='h-16  outline-none ml-14'
           
            disablePortal
            id="combo-box-demo"
            options={Destinations}
            // sx={{ width: 250 }}
            renderInput={(params) => <TextField {...params}  
            onChange={(e) => setValue(e.target.value)}
            placeholder='Where to ?'/>}
          />
          </div>
          <div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Basic example"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          {/* <input 
          type="date" 
          className='  outline-none px-10 w-full h-[57px]'
          placeholder='When'
          /> */}
          </div>
          <div>
            <input type="text" 
            className=' h-[57px] outline-none px-10 w-full'
            placeholder='How many People?'
            />
            {/* <select 
            name="Select" 
            id="Thing"
            className=' h-[57px] outline-none px-10 w-full'
            >
              <option value="One">One</option>
              <option value="Two">Two</option>
              <option value="Three">Three</option>
            </select> */}
          </div>
          <div className='flex items-cener justify-end'>
            <Link
            to='/torder'
            className='border px-20 py-2 bg-blue-700 text-white text-xl rounded-full hover:bg-blue-800 hover:shadow-lg'>
              Search
            </Link>
          </div>
        </form>
      </div>
      {/* Picture Thingy */}
      <div className='px-20'>
        <div className='w-full h-80 rounded-2xl overflow-hidden flex items-center px-10'
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          // backgroundPosition
       }}
        >
            {/* <img 
            src={bg} 
            alt="BG Thing" 
            className='w-full h-auto flex items-center'
            /> */}
           <div className='flex flex-col gap-5'>
           <h1 className='text-5xl text-white'>Adverture Awaits</h1>
           <p className='text-3xl text-white'>Select One of our most viewed Places</p>
           </div>
        </div>
      </div>
      {/* Popular Destinations */}
      <div className='px-20 py-10'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-4xl font-semibold text-red-700'>Popular Destination</h1>
          <p className='text-xl text-gray-800'>We Have Cataloged our most viewed destinations for you</p>
        </div>
        {/* Swiper Part */}
        <div className='min-h-screen py-10'>
            <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper h-[35rem]"
          > 
            {
              touristData.map((item)=>(
                <SwiperSlide 
                key={item.id}
                className='border border-gray-200 shadow-xl hover:shadow-xl rounded-3xl h-[30rem] w-60 overflow-hidden cursor-pointer relative'
                >
                <img 
                src={item.imgs} 
                alt={item.name} 
                />
                <div className='absolute bottom-20 left- py-8 text-3xl text-white bg-white border  w-full rounded-3xl bg-opacity-20 backdrop-blur-lg drop-shadow-lg'>{item.name}</div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>

      {/* Rand Image */}
      <div className='w-full min-h-screen'>
        <img 
        className=' w-full'
        src={image} 
        alt="Random Image"
         />
      </div>
    </section>
  )
}
