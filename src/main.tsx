import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CartProvider } from './context/CartContextProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Cart Provider is the root element for cart state management works */}
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
