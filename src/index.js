import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import {UserProvider} from "./Context/UserContext";
import {ProductsProvider} from "./Context/ProductsContext";
import './index.scss';
import {CartProvider} from "./Context/CartContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <UserProvider>
              <ProductsProvider>
                  <CartProvider>
                    <App />
                  </CartProvider>
              </ProductsProvider>
          </UserProvider>
      </Router>
  </React.StrictMode>

);
