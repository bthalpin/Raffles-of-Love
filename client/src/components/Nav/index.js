// import NavLink from './NavLink';
import React from 'react';
import { Link } from "react-router-dom";

import './nav.css';

function Nav() {
  const navigationLinks = ['Charity','Products','Profile','Logout']
  
  return (
    <div className="navContainer">

    <div className="navName">
            Charity
    </div>
    <div className="navLinkContainer">  

            <div className={`navLink`} >
                <Link className={`Link`} to='/'>
                    Charity
                </Link>
            </div>
            <div className={`navLink`} >
                <Link className={`Link`} to='/Products'>
                    Product
                </Link>
            </div>
            <div className={`navLink`} >
                <Link className={`Link`} to='/Profile'>
                    Profile
                </Link>
            </div>
            <div className={`navLink`} >
                <div className={`Link`}>
                  Logout

                </div>
                
            </div>
    </div>
</div>
  );
}

export default Nav;
