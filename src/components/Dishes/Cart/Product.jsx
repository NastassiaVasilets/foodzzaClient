import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
	deleteProduct,
	addProductAmount,
	remProductAmount
} from '../../../actions/cartActions';

import Button from 'react-bootstrap/lib/button';

class Product extends Component {
	constructor(props) {
		super(props);
		this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
		this.handleAddProduct = this.handleAddProduct.bind(this);
		this.handleRemProduct = this.handleRemProduct.bind(this);
	}
	handleAddProduct() {
		var products = this.props.products;
		products.forEach((product) => {
			if (product._id === this.props.product._id) {
				product.amount++;
			}
		});
		this.props.addProductAmount(products);
	}
	handleRemProduct() {
		var products = this.props.products;
		products.forEach((product) => {
			if (product._id === this.props.product._id) {
				if (product.amount === 1) {
					this.props.deleteProduct(this.props.product._id, this.props.products)
				} else {
					product.amount--;
				}
			}
		});
		this.props.remProductAmount(products);
	}
	handleDeleteProduct() {
		this.props.deleteProduct(this.props.product._id, this.props.products);
	}
	render () {
		return(
			<div className='product'>
				<span className='product-button-wrap'>
					<Button className='product-button del' onClick={this.handleDeleteProduct}>x</Button>
				</span>
				<span className='product-name'>{this.props.product.name}</span>
				<span className='product-button-wrap'>
					<Button className='product-button add' onClick={this.handleAddProduct}>+</Button>
				</span>
				<span className='product-amount'>{this.props.amount}</span>
				<span className='product-button-wrap'>
					<Button className='product-button rem' onClick={this.handleRemProduct}>-</Button>
				</span>
				<span className='product-total'>{this.props.product.price}р.</span>
			</div>
		);
	}
}
function productDel (id, products) {
	products.forEach((product, i) => {
		if (product._id === id)
			products.splice(i, 1);
	});
	return new Promise(function(resolve, reject) {
		resolve({products: products})
	});
}

function mapStateToProps(state, ownProps) {
  return {
    products: state.cartReducer.products,
  }
}

export default connect(
	mapStateToProps,
	dispatch => {
		return {
			deleteProduct: (id, products) => {
				productDel(id, products).then((response) => {
					dispatch(deleteProduct(response.products))
				})
			},
			addProductAmount: (products) => {
				dispatch(addProductAmount(products))
			},
			remProductAmount: (products) => {
				dispatch(remProductAmount(products))
			}
		}
	}
	)(Product);
