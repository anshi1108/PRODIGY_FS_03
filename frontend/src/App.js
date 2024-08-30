import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  const handleOpenCart = () => setOpenCart(true);
  const handleCloseCart = () => setOpenCart(false);

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      setCart(cart.filter(item => item.id !== productId));
    } else {
      setCart(cart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      ));
    }
  };

  return (
    <div>
      <header className="header">
        <h1>E-Commerce Site</h1>
        <button className="cart-button" onClick={handleOpenCart}>
          View Cart
        </button>
      </header>
      <ProductList cart={cart} setCart={setCart} updateQuantity={updateQuantity} />
      {openCart && (
        <Cart cart={cart} open={openCart} onClose={handleCloseCart} updateQuantity={updateQuantity} />
      )}
    </div>
  );
};

export default App;
