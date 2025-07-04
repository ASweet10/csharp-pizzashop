import { createContext, useContext, useState, useEffect } from "react"
import type { CartItem, CartContextType } from "../types"

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems)); // Save to localStorage whenever cart changes
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems(prev => {
      const existing = prev.find(ci => ci.id === item.id && ci.type == item.type);
      if (existing) {
        return prev.map(ci => 
          ci.id === item.id && ci.type === item.type
          ? { ...ci, quantity: ci.quantity + 1 } 
          : ci
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (item: CartItem) => {
    setCartItems(prev => 
      prev.filter(ci => !(ci.id === item.id && ci.type === item.type))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};