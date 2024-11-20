import {createContext, useEffect, useState} from "react";

const addCartItem = (cartItems, productToAdd) => {

    //check if item exist in cart
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    // if item exists in cart increment quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? {...cartItem, quantity: cartItem.quantity +1}
                : cartItem
        );
    }
    // if item does not exist add new item to cart
    return [...cartItems, {...productToAdd, quantity: 1}];
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addToCart: () => {},
    cartCount: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    },[cartItems])

    const addToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = {isCartOpen, setIsCartOpen, cartItems, addToCart, cartCount};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};