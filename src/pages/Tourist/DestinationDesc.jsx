import React from 'react'
import { useParams } from 'react-router-dom';
import Destinations from '../../data/Destinations'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function DestinationDesc() {
    const { id } = useParams();
    let nid = 0;
    if (id == 'Wenchi')
        {nid = 1;}
    else if (id == 'Entoto')
        {nid = 2;}
    else if (id == 'Bale Mountains')
        {nid = 3;}
    else if (id == 'Abijata')
        {nid = 4;}
    else if (id == 'Yerer Mountain')
        {nid = 5;}
    else if (id == 'Abajifar')
        {nid = 6;}
    else if (id == 'Lake Ziway')
        {nid = 7;}
    else if (id == 'Sof Omar')
        {nid = 8;}
    else if (id == 'Saka WaterFall')
        {nid = 9;}
    else
        {nid = id;}


    const name = Destinations[nid - 1]['label'];
    const desc = Destinations[nid - 1]['desc'].substring(0, 350) + ' ...';
    const image = Destinations[nid - 1]['image'];

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    return (


        <div className='min-h-screen boor'>
            <div>
                <section class="text-gray-600 body-font">
                    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <img class="object-cover object-center rounded" alt="hero" src={image} />
                        </div>
                        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{name}
                            </h1>
                            <p class="mb-8 leading-relaxed">{desc}</p>
                            <div class="flex justify-center">
                                <Link
                                to='/torder'
                                class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Take A Tour</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
