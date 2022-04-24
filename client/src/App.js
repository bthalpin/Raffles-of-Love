import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import {Charity,Product,Profile} from './pages';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path='/'
          element={<Charity />}
          />

        <Route
          path='/Products'
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
