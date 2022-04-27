import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import decode from 'jwt-decode';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navigation,Footer} from './components/';
import {Charity,SingleCharity,Profile,SingleProduct,Raffles} from './pages';
import { StoreProvider } from './utils/GlobalState';
import './App.css';


const httpLink = createHttpLink({
  uri: '/graphql',
});

// Gets token from localStorage if it exists and checks for expiration before sending
const authLink = setContext((_, { headers }) => {
  let token = localStorage.getItem('id_token');
  if (token&&decode(token).exp<Date.now()/1000) {
    token = ''
  }
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
 
  return (
    <ApolloProvider client={client}>
    <Router className="router">
          <StoreProvider>
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
        {/* <Route
          path='/Checkout'
          element={<Checkout />}
          /> */}

        <Route
          path='/Logout'
          element={<Profile />}
          />

      </Routes>
      <Footer />
                </StoreProvider>
    </ Router>
// </ApolloProvider>
  );
}

export default App;
