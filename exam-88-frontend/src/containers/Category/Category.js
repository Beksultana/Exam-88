import React, {Component, Fragment} from 'react';
import {Nav, Navbar, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

class Category extends Component {
    render() {
        return (
            <Fragment>
               <Navbar>
                   <Nav>
                       <NavItem>
                           <NavLink tag={RouterNavLink} to="/" exact>All products</NavLink>
                       </NavItem>

                       <NavItem>
                           <NavLink tag={RouterNavLink} to="/computers" exact>Computers</NavLink>
                       </NavItem>

                       <NavItem>
                           <NavLink tag={RouterNavLink} to="/cars" exact>Cars</NavLink>
                       </NavItem>

                       <NavItem>
                           <NavLink tag={RouterNavLink} to="/Phones" exact>Phones</NavLink>
                       </NavItem>
                   </Nav>
               </Navbar>
            </Fragment>
        );
    }
}

export default Category;