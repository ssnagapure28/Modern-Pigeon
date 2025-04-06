// make navbar componnet
import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './styles/navStyles';
import { deliveryAdminLoggedInState } from '../recoil/globalState';

const Navbar = () => {
    return (
      <>
        <Nav>
          <Bars />
          <NavMenu>
          <NavLink to='/home' activeStyle>
              Home
            </NavLink>
            <NavLink to='/track-package' activeStyle>
              Track Package
            </NavLink>
            <NavLink to='/ship' activeStyle>
               Ship
            </NavLink>

            {deliveryAdminLoggedInState ? <NavLink to='/driver' activeStyle> Driver </NavLink> : null}
            <NavLink to='/about' activeStyle>
              About
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/sign-in'>Hi, John Doe</NavBtnLink>      
          </NavBtn>
        </Nav>
      </>
    );
  };
    
  export default Navbar;

  /*{deliveryAdminLoggedInState ? <NavLink to='/admin' activeStyle> Admin </NavLink> : null}
            {deliveryAdminLoggedInState ? <NavLink to='/driver' activeStyle> Driver </NavLink> : null}*/