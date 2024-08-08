import { useState, useEffect } from 'react';

const useCart = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const totalQuantity = cart.reduce((acc, product) => acc + product.quantity, 0);
  const totalPrice = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (product: Product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product: Product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return {
    cart,
    totalQuantity,
    totalPrice,
    addToCart,
    removeFromCart,
    clearCart,
  };
};

export default useCart;