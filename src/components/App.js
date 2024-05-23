import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList';
import './../style/Layout.css'

function App() {
  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);

  // useEffect hook should be inside the App function
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="App">
      <Banner>
        <img
          src={logo}
          alt="jungle-house"
          className="jh-logo"
        />
        <h1 className="jh-title">Jungle house</h1>
      </Banner>
      <div className="jh-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
