import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import {UserProvider} from "./Context/UserContext";
import {CategoriesProvider} from "./Context/CategoriesContext";
import {CartProvider} from "./Context/CartContext";
import './index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <UserProvider>
              <CategoriesProvider>
                  <CartProvider>
                    <App />
                  </CartProvider>
              </CategoriesProvider>
          </UserProvider>
      </Router>
  </React.StrictMode>

);
