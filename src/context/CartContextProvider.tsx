import React, { createContext, useContext, useReducer } from 'react';
import type { CartAction, CartItemType, CartType } from '../types';

// CartContextProvider is the simple state management using Context API and useReducer

// initial state for creating cart context
const initialState = {
  // cart props for acommodate cart item
  cart: [],
  // the function props for manipulate the cart props
  addCartItem: () => {},
  reduceCartItem: () => {},
  deleteCartItem: () => {},
} satisfies CartType;

const CartContext = createContext<CartType>(initialState);

// the reducer is the main logic for the CartContext
function reducer(state: CartType, action: CartAction): CartType {
  switch (action.type) {
    // cart/add for adding item into cart, if the item is already in the cart then
    // it would add the quantity
    case 'cart/add':
      if (
        state.cart.filter((item) => item.id === action.payload.id).length > 0
      ) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { ...state, cart: [...state.cart, action.payload] };

    // cart/reduce for reducing the quantity of cart item
    case 'cart/reduce':
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload)
            return { ...item, quantity: item.quantity-- };
          return item;
        }),
      };
    // cart/delete for removing cart item in the cart
    case 'cart/delete':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [{ cart }, dispatch] = useReducer(reducer, initialState);

  // the implementation of CartContext props function to makes it easier without calling dispatch
  function addCartItem(cartItem: CartItemType) {
    dispatch({ type: 'cart/add', payload: cartItem });
  }

  function reduceCartItem(id: number) {
    dispatch({ type: 'cart/reduce', payload: id });
  }

  function deleteCartItem(id: number) {
    dispatch({ type: 'cart/delete', payload: id });
  }

  return (
    <CartContext.Provider
      value={{ cart, addCartItem, deleteCartItem, reduceCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

// useCart hooks to makes it easier calling CartContext
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error('CartContext was used outside CartProvider');

  return context;
}
