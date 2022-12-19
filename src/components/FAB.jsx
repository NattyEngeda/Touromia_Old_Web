import React from 'react'

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Chat';

export default function FAB(props) {

    return (
        <div 
        onClick={()=> {
            if(props.hidden == 'hidden')
                props.setHidden('block');
            else    
                props.setHidden('hidden');
            }}
        className='fixed bottom-10 right-10'>
            <Fab 
            color="secondary" 
            aria-label="edit">
            <AddIcon />
            </Fab>
        </div>
  )
}
