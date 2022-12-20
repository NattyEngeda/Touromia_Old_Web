import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png';
import Autocomplete from '../components/Autocomplete';
import { Menu,  } from '@mantine/core';
import { ChevronDown } from 'react-hero-icon/solid';
export default function Header() {
  return (

    <header className='border border-gray-200 bg-gray-200 shadow-xl w-full sticky'>
      <section className='flex justify-evenly gap-20'>
        <div className='px-5 py-2'>
          <img src={logo} alt="Main Logo" className='h-auto w-44' />
        </div>
        <div className='flex items-center px'>
          <Autocomplete />
        </div>
        <div className='flex flex-row justify-evenly items-center gap-10 text-md font-semibold px-20'>
          <Link to={'/'}>Home</Link>
          <Link to={'/Destination'}>Destination</Link>
          <Menu trigger="hover" openDelay={100} closeDelay={400}>
            <Menu.Target>
              <div className='flex items-end'>
              <h1>What are You </h1>
              <ChevronDown className=''/>
              </div>
            </Menu.Target>
            <Menu.Dropdown
            className=''
            >
              <Menu.Item className='px-10'>
                <Link to='/tindex'>Tourist</Link>
              </Menu.Item>
              <Menu.Item className='px-10'>
                <Link to='/tgindex'>Tour Guide</Link>
              </Menu.Item>

              {/* Other items ... */}
            </Menu.Dropdown>
          </Menu>

          <Link to={'/about'}>About Us</Link>
        </div>
      </section>
    </header>
  )
}
