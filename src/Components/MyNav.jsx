import React from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
class MyNav extends React.Component {
      
    state = {  }
    render() { 
        return (  
            <div>
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            </Nav>
      </Navbar>
    </div>
        );
    }
}
 
export default MyNav;