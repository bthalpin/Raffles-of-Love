import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Modal, Nav, Tab, Tabs } from 'react-bootstrap';
import { Login, Register, Cart } from '../'
import Auth from '../../utils/auth';

import { useStoreContext } from "../../utils/GlobalState";
import './nav.css';
import { idbPromise } from '../../utils/helpers';
import { ADD_MULTIPLE_TO_CART } from '../../utils/actions';


function Navigation() {
  const [state, dispatch] = useStoreContext();
  const [show, setShow] = useState(false);
  const [key, setKey] = useState('login');
  const [showCart, setShowCart] = useState(false);
  const [expanded,setExpanded] = useState(false);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }
  
    getCart();
   
  }, [dispatch]);

  const logout = (e) => {
    e.preventDefault()
    setExpanded(false)
    Auth.logout()
  }

  const handleCartClose = () => {
    setShowCart(false)
  };

  const handleCartShow = () => {
    setExpanded(false);
    setShowCart(true);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setExpanded(false)
    setKey('login')
    setShow(true)
  };


  return (
    <>
      <Navbar className="navigation  d-flex justify-content-between" variant="dark" expand="lg" expanded={expanded}>
        <div className="logoContainer">
          <a href="/">
            <img className='logo' src="/images/heart-logo.png" alt=""></img>
          </a>
          <Navbar.Brand className="brandName display-1" href="/">Raffles of Love</Navbar.Brand>
        </div>

        <div className="menuContainer"> 

          <div className="menuButton">
            <Navbar.Toggle aria-controls="navbar" onClick={() => setExpanded(expanded ? false : "expanded")} />
          </div>

          <div>
            <Navbar.Collapse id="navbar">
              <Nav className="navRight">
                <Nav className="navLink fs-3 homeLink" as={Link} to='/' onClick={() => setExpanded(false)}>Home</Nav>
                <Nav className="navLink fs-3" as={Link} to='/Product' onClick={() => setExpanded(false)}>Raffles</Nav>
                {Auth.loggedIn() ?
                  <>
                    <Nav className="navLink fs-3" as={Link} to='/Profile' onClick={() => setExpanded(false)}>My Profile</Nav>
                    <Nav onClick={handleCartShow} className="navLink fs-3 navCheckout">Cart<span className="cartCount">{state.cart.length ? state.cart.reduce((acc, item) => {
                      return acc + parseInt(item.quantity)
                    }, 0) : <></>}</span></Nav>

                    <Nav onClick={logout} className="navLink fs-3" as={Link} to='#'> Logout</Nav>
                  </>
                  :
                  <Nav onClick={handleShow} className="navLink fs-3" as={Link} to='#'> Login</Nav>
                }
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton >
          Raffles of Love
        </Modal.Header>
        <Modal.Body>
          <Tabs
            id="login-tab"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 d-flex"
          >
            
            <Tab.Pane eventKey="login" title="Login">
              <Login handleModalClose={() => setShow(false)} />
            </Tab.Pane>

            <Tab.Pane eventKey="Register" title="Register">
              <Register handleModalClose={() => setShow(false)} />
            </Tab.Pane>
            
          </Tabs>
          
        </Modal.Body>
        
      </Modal>

      <Modal show={showCart} onHide={handleCartClose} size="lg">

        <Modal.Header closeButton >
          <Modal.Title>Raffles of Love</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Cart handleModalClose={() => setShowCart(false)} />
        </Modal.Body>

      </Modal>
    </>
  );
}

export default Navigation;
