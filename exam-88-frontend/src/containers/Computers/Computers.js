import React, {Component} from 'react';
import {fetchProductOne} from "../../store/actions/productActions";

class Computers extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    product: state.products.product,
});

const mapDispatchToProps = dispatch => ({
    fetchProductOne: (id) => dispatch(fetchProductOne(id))
});

export default Computers;