import React from 'react'
import { Catagories } from '../components/Catagories';
import { Navbar } from '../components/Navbar'
import { Slider } from '../components/Slider';
import { Annoucment } from './../components/Annoucment';
import { Products } from './../components/Products';


export const Home = () => {
  return (
    <div>
        <Annoucment/>
       <Navbar/>
       <Slider/>
       <Catagories/>
       <Products/>
    </div>
  );
}
