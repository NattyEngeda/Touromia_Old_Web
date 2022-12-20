import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css'
// import Chatbot from './components/Chatb';
// const Chatbot =  React.lazy(()=> import('./components/Chatb'));
import Footer from './layouts/Footer';
// const Footer = React.lazy(()=> import('./layouts/Footer'));
import Header from './layouts/Header'
// const Header = React.lazy(()=> import('./layouts/Header'))
import Index from './layouts/Index'
import Home from './pages/Home'
// const Home = React.lazy(()=> import('./pages/Home'))
import TGIndex from './pages/TourGuide/index'
// const TGIndex = React.lazy(()=> import('./pages/TourGuide/index'))
import DestinationDesc from './pages/Tourist/DestinationDesc';
// const DestinationDesc = React.lazy (()=> import ('./pages/Tourist/DestinationDesc'))
import TIndex from './pages/Tourist/Index'
// const TIndex = React.lazy(()=> import('./pages/Tourist/Index'))
// import FAB from './components/FAB'
// const FAB = React.lazy(()=> import('./components/FAB'))
import Destination from './components/Destination';
// const Destination = React.lazy(()=> import('./components/Destination'))
import Sign from './pages/TourGuide/Sign';
// const Sign = React.lazy(()=> import('./pages/TourGuide/Sign'))
import Dahboard from './pages/TourGuide/Dahboard';
// const Dahboard = React.lazy(()=>import('./pages/TourGuide/Dahboard'))
import Order from './pages/Tourist/Order';
// const Order = React.lazy(()=> import('./pages/Tourist/Order'))
import Sign1 from './pages/Tourist/Sign';
// const Sign1 = React.lazy(()=> import('./pages/Tourist/Sign'))
import About from './pages/About';
// const About = React.lazy(()=> import('./pages/About'))

// const AboutComponent = React.lazy(() => import('./AboutComponent '));

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
      {/* <FAB setHidden={setHidden} hidden={hidden}/> */}
      {/* <Chatbot hidden={hidden}/> */}
      <Footer/>
      
      {console.log(hidden)}
  </BrowserRouter>
   </>
  )
}

export default App
