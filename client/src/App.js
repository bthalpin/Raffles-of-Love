import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navigation,Product} from './components/';
import {Charity,SingleCharity,Profile} from './pages';
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
          element={<Product />}>

        </Route>
        <Route
          path='/Profile'
          element={<Profile />}>

        </Route>
        <Route
          path='/Logout'
          element={<Profile />}>

        </Route>
      </Routes>
    </ Router>
  );
}

export default App;
