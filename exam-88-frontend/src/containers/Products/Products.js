import React, {Component, Fragment} from 'react';
import {fetchProducts} from "../../store/actions/productActions";
import {connect} from "react-redux";
import {fetchCategories} from "../../store/actions/categoryActions";
import './Products.css';


class Products extends Component {

    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchCategories();
    }


    render() {
        const products = this.props.products.map(product => {
            return (
                <div className="ProductItem" key={product._id}>
                    <div className="imageBlock">
                        {product.image && (
                            <img
                                style={{width: "250px", height: '250px'}}
                                src={'http://localhost:8001/uploads/' + product.image}
                                alt={product.image}/>
                        )}
                    </div>
                    <div className="productText">
                        <h4>{product.title}</h4>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                    </div>
                </div>
            )
        })
        return (
            <Fragment>
                <div className="ProductInfoBlock">
                    {products}
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.products,
    categories: state.categories.categories
});

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
    fetchCategories: () => dispatch(fetchCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);