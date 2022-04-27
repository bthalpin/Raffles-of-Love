
import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import './footer.css';

function Navigation() {
 

  return (
    <>
    <div className="footer mt-5 p-2 d-flex justify-content-center text-dark" bg="secondary" variant="dark" expand="lg">
       
            <Nav>
                <Nav.Link className="footerLink" href="https://github.com/jsnyder159">Jason Snyder</Nav.Link>
                <Nav.Link className="footerLink" href="https://github.com/danchanyoungkim">Dan Kim</Nav.Link>
                <Nav.Link className="footerLink" href="https://github.com/bthalpin">Brian Halpin</Nav.Link>
            </Nav>
         
          </div>

        
        
    </>
    
  );
}

export default Navigation;
