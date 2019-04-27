import React, {Component} from 'react';
import {fetchProductOne} from "../../store/actions/productActions";
import {connect} from "react-redux";

class Product extends Component {

    componentDidMount(){
        this.props.fetchProduct()
    }

    render() {

        console.log(this.props.product);

        return (
            <div>
               1111111111111111
            </div>
        );
    }
}

const mapStateToProps = state => ({
    product: state.products.product,
});

const mapDispatchToProps = dispatch => ({
    fetchProduct: () => dispatch(fetchProductOne()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);