import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import Product from './Product/Product';
import Cart from './Cart/Cart';

export default function LandingPage() {
  return (
    <Router>
      <div>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/checkout" component={Cart} />
        </main>
      </div>
    </Router>
  );
}
