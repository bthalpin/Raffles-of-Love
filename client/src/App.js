import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navigation} from './components/';
import {Charity,SingleCharity,Profile,SingleProduct,Raffles} from './pages';
import { useEffect } from 'react';

function App() {
 
  return (
    <Router>
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
    </ Router>
  );
}

export default App;
