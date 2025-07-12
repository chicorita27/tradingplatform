import React from 'react';
import Stats from './Stats';
import Hero from './Hero';
import Awards from './Awards';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Education from './Education';
function HomePage() {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Footer/>
        </>
     );
}

export default HomePage;