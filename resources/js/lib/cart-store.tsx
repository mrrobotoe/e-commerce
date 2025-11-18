import { createContext, useState, useEffect, useMemo } from 'react';
import { DrinkCustomization } from '@/components/drink-customizer';

type CartContextType = {
    cartItems: DrinkCustomization[];
    addToCart: (item: DrinkCustomization) => void;
    removeFromCart: (item: DrinkCustomization) => void;
    clearCart: () => void;
    getCartTotal: () => number;
};
export const CartContext= createContext<CartContextType>({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
    getCartTotal: () => 0,
});

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems') as string) : [] );

    const addToCart = (item: DrinkCustomization) => {
        setCartItems([...cartItems, { ...item }]);
    }

    const removeFromCart = (item: DrinkCustomization) => {
        const isItemInCart = cartItems.find(cartItem => cartItem.id === item.id);
        if (isItemInCart) {
            setCartItems((prev) => prev.filter(cartItem => cartItem.id !== item.id));
        }
    }

    const clearCart = () => {
        setCartItems([]);
    }

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    }

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        console.log(cartItems);
    }, [cartItems]);

    useEffect(() => {
        const cartItems = localStorage.getItem('cartItems');
        if (cartItems) {
            setCartItems(JSON.parse(cartItems));
        }
    }, []);

    const contextValue = useMemo<CartContextType>(() => ({
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal
    }), [cartItems, addToCart, removeFromCart, clearCart, getCartTotal]
    );
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}
