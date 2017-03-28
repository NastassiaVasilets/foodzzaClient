import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { cartSubmit, clearOrder } from '../../../actions/orderActions';
import { clearCart, loadCart } from '../../../actions/cartActions';
import { createOrder } from '../../../api/ordersApi';

import Button from 'react-bootstrap/lib/Button';
import Product from './Product.jsx';

import './Cart.css';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.handleCartSubmit = this.handleCartSubmit.bind(this);
    this.getTotal = this.getTotal.bind(this);
  }
  handleCartSubmit() {
    this.props.cartSubmit(this.props.order, this.props.products, this.props.user);
  }
  getTotal() {
    let total = 0;
    this.props.products.forEach((product) => {
      total += product.price * product.amount;
    });
    return total;
  }
  render() {
    return (
      <div className='cart'>
        <div className='cart-header'>Корзина</div >
        {this.props.products &&
          <div>{
          this.props.products.map((product,i) => (
            <Product
              key={i}
              product={product}
              amount={product.amount}
            />
          ))
          }</div>
        }
        <div className='cart-label'>Итого: {this.getTotal()}р.
        </div>
        <Button
          className='cart-button'
          bsSize='large'
          onClick={ this.handleCartSubmit }
        >Заказать
        </Button>
      </div>
    );
  };
}

function mapStateToProps(state, ownProps) {
  return {
    order: state.orderReducer,
    products: state.cartReducer.products,
    user: state.userReducer.user.user,
  };
}
export default connect(
  mapStateToProps,
  dispatch => {
  return {
    cartSubmit: (order, products, owner) => {
      createOrder(order, products, owner)
      .then((response) => {        
        dispatch(clearCart(response.data))
        dispatch(clearOrder(response.data))
        dispatch(push(``))
      })
    }
  };
})(Cart);
