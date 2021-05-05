import React, { useEffect, useLayoutEffect } from 'react';
import  './Home.css'
import {storeProducts} from '../../../../db'
import Individualcard from './Individualcard';
const Home = () => {
  return (
    <div className="main-container">
     <Individualcard storeProducts={storeProducts}/>
    </div>
  )
    
};

export default Home;
