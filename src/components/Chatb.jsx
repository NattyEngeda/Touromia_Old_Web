import React from "react";
import Chatbot from "react-chatbot-kit";

import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParse";
import ActionProvider from "./chatbot/ActionProvider";

import 'react-chatbot-kit/build/main.css';

import { useState } from 'react';
import { useEffect } from "react";

function Chatb(props) {

  const [here, setHere] = useState(props.hidden)


useEffect(()=>{
  console.log('changed')
  let off = document.getElementById('chatbot');
  off.classList.toggle('hidden')
},[props.hidden]);

  return (
    <div
    id='chatbot' 
    style={{
      visibility: here,
    }}
    className="fixed bottom-10 right-10"
    
    >
    {console.log('IN chatbot: ' + props.hidden)}
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default Chatb;