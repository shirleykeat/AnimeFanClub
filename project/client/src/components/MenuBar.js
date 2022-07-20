import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from "shards-react";

class MenuBar extends React.Component {
    render() {
        return(
            <Navbar type="dark" theme="primary" expand="md">
        <NavbarBrand href="/">CIS 5500 Project</NavbarBrand>
          <Nav Navbar>
          <NavItem>
              <NavLink active href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active href="/anime">
                Genres
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active  href="/matches" >
                Sources
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active  href="/matches" >
                Types
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active  href="/matches" >
                Rating
              </NavLink>
            </NavItem>
          </Nav>
      </Navbar>
        )
    }
}

export default MenuBar
