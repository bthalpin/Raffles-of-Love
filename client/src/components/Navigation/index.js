import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Modal, Nav, Tab, Tabs } from 'react-bootstrap';
import { Login, Register, Cart } from '../'
import Auth from '../../utils/auth';

import { useStoreContext } from "../../utils/GlobalState";
import './nav.css';

function Navigation() {
  const [state, dispatch] = useStoreContext();
  const [show, setShow] = useState(false);
  const [key, setKey] = useState('login');
  const [showCart, setShowCart] = useState(false);

  const logout = (e) => {
    e.preventDefault()
    Auth.logout()
  }
  const handleCartClose = () => {
    setShowCart(false)
  };
  const handleCartShow = () => setShowCart(true);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setKey('login')
    setShow(true)
  };


  return (
    <>
      <Navbar className="navigation p-3 d-flex justify-content-between" variant="dark" expand="lg">
        <div>
          <a href="/">
            <img className='logo' src="https://www.nicepng.com/png/full/116-1161012_creative-heart-logo-designs-heart-logo-png.png" alt=""></img>
          </a>
          <Navbar.Brand className="brandName display-1" href="/">Raffles of Love</Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="navRight">
              <Nav className="navLink fs-3" as={Link} to='/Product'>Raffles</Nav>
<<<<<<< HEAD
              {Auth.loggedIn()?
              <>
              <Nav className="navLink fs-3" as={Link} to='/Profile' >My Profile</Nav>
              <Nav onClick={handleCartShow} className="navLink fs-3 navCheckout" >Cart<span className="cartCount">{state.cart.length?state.cart.reduce((acc,item)=>{
                return acc+parseInt(item.quantity)
              },0):<></>}</span></Nav>
             
              <Nav onClick={logout} className="navLink fs-3" as={Link} to='#'> Logout</Nav>
              </>
              :
              <Nav onClick={handleShow} className="navLink fs-3" as={Link} to='#'> Login</Nav>
=======
              {Auth.loggedIn() ?
                <>
                  <Nav className="navLink fs-3" as={Link} to='/Profile'>My Profile</Nav>
                  <Nav onClick={handleCartShow} className="navLink fs-3 navCheckout" >Cart<span className="cartCount">{state.cart.length ? state.cart.reduce((acc, item) => {
                    return acc + parseInt(item.quantity)
                  }, 0) : <></>}</span></Nav>

                  <Nav onClick={logout} className="navLink fs-3" as={Link} to='#'> Logout</Nav>
                </>
                :
                <Nav onClick={handleShow} className="navLink fs-3" as={Link} to='#'> Login</Nav>
>>>>>>> c559afcec4022dfa8dfb5a465d2a53a2e5ed1992
              }
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton >
          CHARITY
        </Modal.Header>
        <Modal.Body>

          {/* <Tab.Container> */}

          <Tabs
            id="login-tab"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 d-flex"
          >
            {/* <Tab.Content> */}

            <Tab.Pane eventKey="login" title="Login">
              <Login handleModalClose={() => setShow(false)} />
            </Tab.Pane>
            <Tab.Pane eventKey="Register" title="Register">
              <Register handleModalClose={() => setShow(false)} />
            </Tab.Pane>
            {/* </Tab.Content> */}

          </Tabs>
          {/* </Tab.Container> */}
        </Modal.Body>
        {/* <Modal.Title>Login</Modal.Title>
          <Login handleModalClose={()=>setShow(false)} /> */}
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
