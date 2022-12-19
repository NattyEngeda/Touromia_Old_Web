import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css'
import Chatbot from './components/Chatb';
import Footer from './layouts/Footer';
import Header from './layouts/Header'
import Index from './layouts/Index'
import Home from './pages/Home'
import TGIndex from './pages/TourGuide/index'
import DestinationDesc from './pages/Tourist/DestinationDesc';
import TIndex from './pages/Tourist/Index'
import FAB from './components/FAB'
import Destination from './components/Destination';
import Sign from './pages/TourGuide/Sign';
import Dahboard from './pages/TourGuide/Dahboard';
import Order from './pages/Tourist/Order';
import Sign1 from './pages/Tourist/Sign';
import About from './pages/About';

function App() {
  const [count, setCount] = useState(0);
  const [hidden, setHidden] = useState('hidden');

  return (
   <>
    <BrowserRouter>
    <Header/>
    <main className=''>
      <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/tgindex' element={<TGIndex/>}/>
            <Route path='/tgsign' element={<Sign/>}/>
            <Route path='/tgDashboard' element={<Dahboard/>}/>
            <Route path='/tindex' element={<TIndex/>}/>
            <Route path='/tsign' element={<Sign1/>}/>
            <Route path='/destination' element={<Destination/>}/>
            <Route path='/torder' element={<Order/>}/>
            <Route path='/destination/:id' element={<DestinationDesc/>}/>
            <Route path='/about' element={<About/>}/>
      </Routes>
      </main>
      <FAB setHidden={setHidden} hidden={hidden}/>
      <Chatbot hidden={hidden}/>
      <Footer/>
      
      {console.log(hidden)}
  </BrowserRouter>
   </>
  )
}

export default App
