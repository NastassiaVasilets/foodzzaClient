import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../../actions/cartActions';
import { getDish } from '../../api/servicesApi';

import Button from 'react-bootstrap/lib/Button';


//Там где нет локального стейта и не используются методы жизненного цикла, надо использовать функциональные компоненты
class Dish extends Component {
  constructor(props) {
    super(props);
    this.handleAddToCartButton = this.handleAddToCartButton.bind(this);
  }
  handleAddToCartButton() {
    this.props.addToCart(this.props.dish._id, this.props.products);
  }
  render() {
    return (
      <div className='dish-item'>
        <img className='dish-item-image' src={this.props.dish.picture}/>
        <div className='dish-item-info'>
          <div className='dish-item-name'>{this.props.dish.name}</div>
          <div className='dish-item-other-info'>
            <div className='dish-item-price'>{this.props.dish.price} руб.</div>
            <Button onClick={this.handleAddToCartButton}>В заказ</Button>
            <a
            className='dish-item-url'
            href={this.props.dish.url}
            target='blanck'
            >Посмотреть на сайте
            </a>
          </div>
        </div>
      </div>
    );
  }
}
function getAmount(products, data) {
  data.amount = 1;
  products.forEach((product) => {
    if (product._id === data._id) {
      data.amount++
      product.amount++;
    }
  })
  if (data.amount === 1) {
    products.push(data);
  }
  return new Promise((resolve, reject) => {
    resolve(products);
  })
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
      addToCart: (id, products) => {getDish(id)
        .then(response => {
          getAmount(products, response.data).then((products) => {
            dispatch(addToCart(products))
          })
        })
      }
    }
  })(Dish);
