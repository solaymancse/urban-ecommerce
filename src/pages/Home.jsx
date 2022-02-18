import React from 'react'
import { Navbar } from '../components/Navbar'
import { Slider } from '../components/Slider';
import { Annoucment } from './../components/Annoucment';


export const Home = () => {
  return (
    <div>
        <Annoucment/>
       <Navbar/>
       <Slider/>
    </div>
  );
}
