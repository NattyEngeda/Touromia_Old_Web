import React from 'react'
import { Autocomplete, TextInput } from 'evergreen-ui'
import Destinations from '../data/Destinations'
import Places from '../data/Places'
import { SearchIcon } from 'evergreen-ui'
import { Navigate,useNavigate } from 'react-router-dom'

export default function Autocompletee() {
    const navigate = useNavigate();
    const changePage = (e) =>{
      
    }
  return (
    <div>
      <Autocomplete
            onChange={changedItem => {
                navigate(`/destination/${changedItem}`)
                console.log(changedItem);
            }}
            items={Places}
          >
            {props => {
              const { getInputProps, getRef, inputValue } = props
              return (
               <div className='relative rounded-xl'>
                 <TextInput
                  placeholder="Search Country, or Landmark"
                  className='py-5 px-5 w-54 rounded-xl outline-none'
                  value={inputValue}
                  ref={getRef}
                  {...getInputProps()}
                />
                <SearchIcon
                onClick={changePage}
                className='absolute top-3 right-3 w-5 h-5 text-gray-500 hover:gray-700 cursor-pointer'
                
                />
                 </div>
              )
            }}
          </Autocomplete>
    </div>
  )
}
