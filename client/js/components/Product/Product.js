import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './Product.css'
import {storeProducts} from '../../../../db'
const Product = (props) => {
  let filterData = storeProducts.filter(el => el.id === parseInt(props.match.params.id))[0];
  const addtocartClickHandler = () => {
    window.open('http://localhost:8080/checkout').focus();
  }
  return (
    <div>
      <section id="services" class="services section-bg">
        <div class="container-fluid">
          <div class="row row-sm">
            <div class="col-md-6 _boxzoom">
              <div class="_product-images">
                <div class="picZoomer">
                  <img class="my_img" src={`../../img/${filterData.img}.jpg`} alt="" />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="_product-detail-content">
                <p class="_p-name">{filterData.title}</p>
                <div class="_p-price-box">
                  <div class="p-list">
                    <span> M.R.P. :   </span>
                    <span class="price">$ {filterData.price} </span>
                  </div>
                  <div class="_p-add-cart">
                    <div class="_p-qty">
                      <span>Add Quantity</span>
                      <div class="value-button decrease_" id="" value="Decrease Value">-</div>
                      <input type="number" name="qty" id="number" value="1" />
                      <div class="value-button increase_" id="" value="Increase Value">+</div>
                    </div>
                  </div>
                  <div class="_p-features">
                    <span> Description About this product:- </span>
                    {filterData.info}
                  </div>
                  <form action="" method="post" accept-charset="utf-8">
                    <ul class="spe_ul"></ul>
                    <div class="_p-qty-and-cart">
                      <div class="_p-add-cart">
                        <button class="btn-theme btn btn-success" tabindex="0" onClick={(e) => addtocartClickHandler}>
                          <i class="fa fa-shopping-cart"></i> Add to Cart
                           </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product;