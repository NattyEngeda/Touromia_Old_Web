import React from 'react'
import bg from '../../assets/images/touristImgs/tourist.jpg'
import { Link } from 'react-router-dom';
import { TextInput } from '@mantine/core'
import { FacebookLoginButton, GoogleLoginButton, TelegramLoginButton } from "react-social-login-buttons";

export default function Sign() {
    return (
        <div
            style={{
                backgroundImage: `url(${bg})`
            }}
            className='min-h-screen p-10'
        >
            <div className='w-1/3 m-auto bg-white h-auto rounded-xl border border-gray-200 shadow-xl py-5 px-5 bg-opacity-40 backdrop-blur-lg drop-shadow-xl flex flex-col gap-5'>
                <h1 className='text-3xl'>Sign In</h1>
                <div className='space-y-4'>
                    <TextInput
                        placeholder="Email"
                        label="Email"
                        size="md"
                        required
                    />
                    <TextInput
                        placeholder="Password"
                        label="Password"
                        size="md"
                        required
                    />
                    <div>
                        <Link
                            to='/tindex'
                        >
                            Don't have an account ??
                        </Link>
                    </div>
                    <Link 
                    to='/torder'
                    className='px-5 py-2 bg-purple-700 rounded-lg shadow-lg  text-white'>
                        Sign In
                    </Link>
                    <p>or</p>
                    <div className='pr-5'>
                        <FacebookLoginButton onClick={() => alert("Hello")} />
                        <GoogleLoginButton onClick={() => alert("Hello")} />
                        <TelegramLoginButton onClick={() => alert("Hello")} />
                    </div>
                    

                </div>
            </div>

        </div>
    )
}
