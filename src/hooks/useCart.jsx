import { useEffect, useState } from "react";

  const useCart = () => {
    const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

 const addToCart = (libro) => {
  const updatedCart = [...cart, libro];
  setCart(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);
  return { cart, addToCart, removeFromCart, clearCart };
};

export default useCart;
