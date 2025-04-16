import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (course) => {
    setCartItems((prevItems) => {
      const isAlreadyAdded = prevItems.some(item => item.id === course.id);
      if (!isAlreadyAdded) {
        return [...prevItems, course];
      }
      return prevItems;
    });
  };

  const removeFromCart = (courseId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== courseId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
