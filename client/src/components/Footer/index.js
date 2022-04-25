
import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import './footer.css';

function Navigation() {
 

  return (
    <>
    <Navbar className="footer mt-5 p-2 d-flex justify-content-center" bg="secondary" variant="dark" expand="lg">
       
            <Nav>
                <Nav.Link href="https://github.com/jsnyder159">Jason Snyder</Nav.Link>
                <Nav.Link href="https://github.com/danchanyoungkim">Dan Kim</Nav.Link>
                <Nav.Link href="https://github.com/bthalpin">Brian Halpin</Nav.Link>
            </Nav>
         
          </Navbar>

        
        
    </>
    
  );
}

export default Navigation;
