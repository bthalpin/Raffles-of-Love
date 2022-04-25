import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navigation,Footer} from './components/';
import {Charity,SingleCharity,Profile,SingleProduct,Raffles} from './pages';
import { useEffect } from 'react';

function App() {
 
  return (
    <Router className="router">
      <Navigation />
      <Routes>
        <Route
          path='/'
          element={<Charity />}
          />
        <Route
          path='/Charity/:charityId'
          element={<SingleCharity />}
          />

        <Route
          path='/Product'
          element={<Raffles />}
          />

        <Route
          path='/Product/:productId'
          element={<SingleProduct />}
          />
        <Route
          path='/Profile'
          element={<Profile />}
          />

        <Route
          path='/Logout'
          element={<Profile />}
          />

      </Routes>
      <Footer />
    </ Router>
  );
}

export default App;
