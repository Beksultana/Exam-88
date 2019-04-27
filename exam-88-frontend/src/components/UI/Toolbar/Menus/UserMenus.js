import React, {Fragment} from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";


const UserMenu = ({user, logout}) => (
    <Fragment>
        <p style={{margin: "8px", color: "#fff"}}>Hello, {user.username}!</p>
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret >
                Menu
            </DropdownToggle>
            <DropdownMenu right >
                <DropdownItem onClick={logout}>
                    Logout
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    </Fragment>
);

export default UserMenu;