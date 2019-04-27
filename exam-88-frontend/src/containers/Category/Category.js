import React, {Component, Fragment} from 'react';
import {Nav, Navbar, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";
import {connect} from "react-redux";

class Category extends Component {

    componentDidMount() {

    }

    render() {
        const categroy = this.props.categories.map(category => {
            console.log(category);
            return (
                <div key={category._id}>
                    <Navbar>
                        <Nav>
                            <NavItem>
                                <NavLink tag={RouterNavLink} to={'/products/' + category._id}
                                         exact>{category.title}</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </div>
            )
        });


        return (
            <Fragment>
                <div style={{display: 'flex'}}>
                    {categroy}
                </div>
            </Fragment>
        );
    };
}


const mapStateToProps = state => ({
    categories: state.categories.categories,
});
export default connect(mapStateToProps)(Category);