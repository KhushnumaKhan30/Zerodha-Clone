import React from 'react'
import Hero from './Hero';
import Stats from './Stats';
import Awards from './Awards';
import Pricings from './Pricings';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return (
       <>
        
         <Hero/>
         <Awards/>
         <Stats/>
         <Pricings/>
         <Education/>
         <OpenAccount/>
       
        

       </>
    );
}

export default HomePage;
