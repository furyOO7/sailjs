import React from 'react';
import  './Home.css'
import {storeProducts} from '../../../../db'
const Home = () => {
 const productClickHandler = (e, el) => {
  window.open('http://localhost:8080/product/' + el.id, '_blank').focus();
}
  return (
    <div className="main-container">
     {
       Array.from(storeProducts).map(el => {
         return(
          <div class="wrapper">
          <div class="product-img">
            <img src={`../img/${el.img}.jpg`} height="420" width="327" />
          </div>
          <div class="product-info">
            <div class="product-text">
              <h1>{el.title}</h1>
              <h2>Company -  {el.company}</h2>
              <p>{el.info}</p>
            </div>
            <div class="product-price-btn">
              <p><span>{el.price}</span>$</p>
              <button type="button" onClick={(e) => productClickHandler(e,el)}>View</button>
            </div>
          </div>
        </div>
         )
       })
     }
    </div>
  )
    
};

export default Home;
