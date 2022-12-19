import React from 'react'
import back from '../../assets/images/tgImage/back.webp'
import { TextInput, Checkbox, Select } from '@mantine/core'
import { useState } from 'react'
import { Pane, FileUploader, FileCard } from 'evergreen-ui'
import { Link } from 'react-router-dom'


export default function Sign() {

    const stepOne = () => {
        var first = document.getElementById('formOne');
        var second = document.getElementById('formTwo');

        first.classList.toggle('hidden');
        second.classList.toggle('hidden');
        setStep('Step 2')
    }
    const stepTwo = (event) => {
        event.preventDefault();
        var second = document.getElementById('formTwo');
        var third = document.getElementById('formThree');

        second.classList.toggle('hidden');
        third.classList.toggle('hidden');
        setStep('Step 3')


    }
    const stepThree = (event) => {
        event.preventDefault();
        var third = document.getElementById('formThree');
        var four = document.getElementById('formFour');

        third.classList.toggle('hidden');
        four.classList.toggle('hidden');
        setStep('Step 4')
    }
    const stepFour = (event) => {
        event.preventDefault();
        var four = document.getElementById('formFour');
        var five = document.getElementById('final');

        four.classList.toggle('hidden');
        five.classList.toggle('hidden');
        setStep('Finish')
    }

    const [step, setStep] = useState('Step 1')


    const [files, setFiles] = React.useState([])
    const [fileRejections, setFileRejections] = React.useState([])
    const handleChange = React.useCallback((files) => setFiles([files[0]]), [])
    const handleRejected = React.useCallback((fileRejections) => setFileRejections([fileRejections[0]]), [])
    const handleRemove = React.useCallback(() => {
        setFiles([])
        setFileRejections([])
    }, [])


    return (
        <div
            style={{
                backgroundImage: `url(${back})`,
                backgroundSize: 'cover'
            }}
            className='min-h-screen bg-gray-100 py-20 '
        >

            {/* Form One */}

            <div className='w-2/5 border  rounded-2xl border-gray-200 m-auto min-h-[40rem] bg-white bg-opacity-40 backdrop-blur-lg drop-shadow-xl'>
                <div className='px-10 py-5'>
                    <h1 className='text-3xl'>Sign In - <span className='text-xl'>{step}</span></h1>
                </div>
                <form
                    id='formOne'
                    action=""
                    className=' flex flex-col gap-5 py-10'>

                    <div className='flex w-full px-20 gap-10'>
                        <div>
                            <TextInput
                                placeholder="Your name"
                                name='FName'
                                label="First name"
                                required
                            />
                        </div>
                        <div>
                            <TextInput
                                placeholder="Your name"
                                label="Last name"
                                required
                            />
                        </div>
                    </div>
                    <div className='px-20'>
                        <TextInput
                            placeholder='Email'
                            label="Email"
                            required
                        />
                    </div>
                    <div className='px-20'>
                        <TextInput
                            placeholder='Phone Number'
                            label="Phone Number"
                            required
                        />
                    </div>
                    <div className='px-20'>
                    <Select
                        label="City"
                        placeholder="Addis Ababa"
                        data={[
                            { value: 'Addis Ababa', label: 'Addis Ababa' },
                            { value: 'Adama', label: 'Adama' },
                            { value: 'Dire Dawa', label: 'Dire Dawa' },
                            { value: 'Hawassa', label: 'Hawassa' },
                        ]}
                    />
                    </div>
                    <div className='px-20'>
                        <TextInput
                            placeholder='Password'
                            label="Password"
                            required
                        />

                    </div>
                    <div className='px-20'>
                        <TextInput
                            placeholder='Confirm Password'
                            label="Confirm Password"
                            required
                        />
                    </div>
                    <div className='flex  px-20'>
                        <button
                            onClick={stepOne}
                            className='px-5 py-2 bg-purple-700 text-white '>
                            Next
                        </button>
                    </div>
                </form>


                {/* Form Two */}
                <form
                    id='formTwo'
                    className='hidden'
                    action="">
                    <div className='px-10'>
                        <h1 className='text-xl'>Upload Your Kebele Id / National Id</h1>
                    </div>
                    <div className='px-10 py-10'>
                        <Pane maxWidth={654}>
                            <FileUploader
                                label="Upload Kebele Pic"
                                description="Upload One Clear Picture of your Kebele Id or National Id"
                                maxSizeInBytes={50 * 1024 ** 2}
                                maxFiles={1}
                                onChange={handleChange}
                                onRejected={handleRejected}
                                renderFile={(file) => {
                                    const { name, size, type } = file
                                    const fileRejection = fileRejections.find((fileRejection) => fileRejection.file === file)
                                    const { message } = fileRejection || {}
                                    return (
                                        <FileCard
                                            key={name}
                                            isInvalid={fileRejection != null}
                                            name={name}
                                            onRemove={handleRemove}
                                            sizeInBytes={size}
                                            type={type}
                                            validationMessage={message}
                                        />
                                    )
                                }}
                                values={files}
                            />
                        </Pane>
                    </div>
                    <div className='flex  px-20'>
                        <button
                            onClick={
                                (event) => (
                                    stepTwo(event)
                                )
                            }
                            className='px-5 py-2 bg-purple-700 text-white '>
                            Next
                        </button>
                    </div>
                </form>

                {/* Step Three */}
                <form
                    id='formThree'
                    className='hidden'
                    action="">
                    <div className='px-10'>
                        <h1 className='text-xl'>Set You Initial Prices</h1>
                    </div>
                    <div className='px-10 py-5 flex flex-col gap-5'>
                        <div className='flex flex-row gap-2 items-center b'>
                            <p>Tour Guide  1 Day:</p>
                            <TextInput
                                className='w-20'
                                placeholder="000"
                                required
                            />
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <p>Car Rental  1 Day:</p>
                            <TextInput
                                className='w-20'
                                placeholder="000"
                                required
                            />
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <p>Hotel Booking 1 Day:</p>
                            <TextInput
                                className='w-20'
                                placeholder="000"
                                required
                            />
                        </div>
                    </div>
                    <div className='flex  px-10'>
                        <button
                            onClick={
                                (event) => (
                                    stepThree(event)
                                )
                            }
                            className='px-5 py-2 bg-purple-700 text-white '>
                            Next
                        </button>
                    </div>

                </form>
                {/* Step Four */}
                <form
                    id='formFour'
                    className='hidden'
                    action="">
                    <div className='px-10'>
                        <h1 className='text-xl'>Additional Skills</h1>
                    </div>
                    <div className='px-10 py-10 flex flex-col divide-y-2 gap-4'>

                        <div className='flex gap-3'>
                            <p>Languages: </p>
                            <div className='flex flex-col gap-2'>
                                <Checkbox
                                    label="Amharic"
                                />
                                <Checkbox
                                    label="English"
                                />
                                <Checkbox
                                    label="Oromigna"
                                />
                                <Checkbox
                                    label="Tigrigna"
                                />
                                <Checkbox
                                    label="Other"
                                />
                            </div>
                        </div>

                        <div className='py-3 flex gap-3'>
                            <p>Skills: </p>
                            <div className='flex flex-col gap-2'>
                                <Checkbox
                                    label="Adventure"
                                />
                                <Checkbox
                                    label="Hiking"
                                />
                                <Checkbox
                                    label="Camping"
                                />
                                <Checkbox
                                    label="Speed Walking"
                                />
                                <Checkbox
                                    label="Other"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='px-10'>
                    <button
                            onClick={
                                (event) => (
                                    stepFour(event)
                                )
                            }
                            className='px-5 py-2 bg-purple-700 text-white '>
                            Finish
                        </button>           
                    </div>

                </form>
                    {/* Final Step */}
                <div
                id='final'
                className='hidden'
                >
                     <div className='px-10'>
                        <h1 className='text-xl'>You have successfuly Finished your registration </h1>
                    </div>
                    <div className='px-10 py-10'>
                        <Link 
                        to='/tgDashboard'
                        className='px-10 py-3 text-white bg-purple-700'>
                            Dashboard {'>>'}
                        </Link>
                    </div>        

                </div>

            </div>
        </div>
    )
}
