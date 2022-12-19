import React from 'react'
import { useState } from 'react';
import { TextInput } from '@mantine/core'
import { NumberInput } from '@mantine/core';
// import { DateRangePicker, DateRangePickerValue } from '@mantine/dates';
import { DatePicker } from '@mantine/dates';
import profile from '../../assets/images/profile.jpg'
import Tourg from '../../data/Tourg';
import { Modal, Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function Order() {
    // const [value, setValue] = useState < DateRangePickerValue > ([
    //     new Date(2021, 11, 1),
    //     new Date(2021, 11, 5),
    // ]);
    const [opened, setOpened] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState();


    const [where, setWhere] = useState('');


    return (
        <div className='min-h-screen p-10'>
            <div>
                <h1 className='text-3xl'>Order</h1>
            </div>
            <div className='flex flex-row gap-5 divide-x-2'>
                <div className='py-5'>
                    <div>
                        <TextInput
                            label='Where'
                            value={where}
                            onChange={(e)=>setWhere(e.target.value)}
                            placeholder='Addis Ababa...'
                        />
                    </div>
                    <div>
                        <DatePicker placeholder="Pick date" label="Start Date" required />
                    </div>
                    <div>
                        <DatePicker placeholder="Pick date" label="End Date" required />
                    </div>
                    <div>
                        <NumberInput
                            label="Number of People"
                            defaultValue={0}
                            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                            formatter={(value) =>
                                !Number.isNaN(parseFloat(value))
                                    ? ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                    : ' '
                            }
                        />
                    </div>
                    <div className=' py-5'>
                        <button className='px-5 py-2 text-white bg-purple-700 '>
                            Order
                        </button>
                    </div>

                </div>
                <div>
                    <div>
                        <h1 className='px-4 text-xl'>Tour Guides</h1>
                    </div>
                    <div className='px-10 py-10 grid grid-cols-2 gap-10 overflow-hidden'>
                    <Modal
                            opened={opened}
                            onClose={() => setOpened(false)}
                            title={'Order'}
                        >
                            <div className='flex flex-col gap-10 py-10'>
                                <div>
                                    <h1>Name: {name}</h1>
                                </div>
                                <div>
                                    <h1>Price: {price}</h1>
                                </div>
                                <div>
                                    <Link
                                    to='/tsign'
                                    onClick={ () =>
                                        setOpened(false)
                                    }
                                    className='px-4 py-3 bg-slate-600 text-white'>Order</Link>
                                </div>
                            </div>
                        </Modal>
                        {
                            where && Tourg.map((items) => (
                                
                                <Group>
                                <Button
                                   key={items.id}
                                  className='h-28'
                                  onClick={() => {setOpened(true)
                                             setName(items.name)
                                            setPrice(items.price)
                                
                                }}
                                  >
                                    <div 
                                   
                                    className='flex flex-row divide-x-2  rounded-xl border shadow-lg boxtrans2'>
                                    <div className='overflow-hidden'>
                                        <img
                                            className='w-20'
                                            src={profile} alt="Profile" />
                                    </div>
                                    <div className='px-10 text-black'>
                                        <div>
                                            <p>Name: {items.name}</p>
                                        </div>
                                        <div>
                                            <p>Price:{items.price}$</p>
                                        </div>
                                    </div>
                                    </div>
                                </Button>
                                </Group>
                            ))
                        }
                       


                    </div>

                </div>
            </div>
        </div>
    )
}
