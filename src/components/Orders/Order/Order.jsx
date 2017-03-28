import React, { Component, PropTypes } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import { deleteOrder, getOrder } from '../../../api/ordersApi';
import { sameSubscriberAdd } from '../../../api/api';
import { orderDelete, asOwnerSubscriberAdd, orderLoad, ownSubscriberAdd } from '../../../actions/orderActions';
import { cartLoad } from '../../../actions/cartActions';

import Button from 'react-bootstrap/lib/Button';
import OrderModal from './OrderModal.jsx';

import './Order.css';
//Привязывать контекст с помощью метода bind можно, но можно использовать такую конструкцию method = () => {}
class Order extends Component {
  constructor(props) {
    super(props);

    this.handleOrderShow = this.handleOrderShow.bind(this);
    this.handleOrderDelete = this.handleOrderDelete.bind(this);
    this.handleOrderEdit = this.handleOrderEdit.bind(this);
    this.handleWantTheSameButton = this.handleWantTheSameButton.bind(this);
    this.handleOwnMenu = this.handleOwnMenu.bind(this);

    this.handleAfterOpenModal = this.handleAfterOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

    this.state = {
      modalIsOpen: false,
      isOwner: false
    };
  }
  componentWillMount() {
    this.checkOwner();
  }
  checkOwner() {
    if (this.props.user) {
      if (this.props.order.owner._id === this.props.user.user._id) {
        this.setState({isOwner: true});
      }
    }
    this.setState({isOwner: false});
  }
  handleAfterOpenModal() {
  }

  handleOrderShow() {
    this.setState({ modalIsOpen: true });
  }

  handleCloseModal() {
    this.setState({ modalIsOpen: false });
  }

  handleOrderDelete() {
    this.props.deleteOrder(this.props.order._id);
  }
  handleWantTheSameButton() {
    this.props.sameSubscriberAdd(this.props.order, this.props.user);
  }
  handleOrderEdit() {
    //TODO: state is Owner not Work
    this.props.editOrder(this.props.order, this.props.user);
  }
  handleOwnMenu() {
    console.log('handleOwnMenu');
  }
  render() {
  return (
    <div className='order-item'>
      <div className='order-owner'>
        <div className='order-owner-name'>{this.props.order.owner.name}</div>
      </div>
      <div className='order-info'>
        <div className='order-info-service'>
          Сделал(а) заказ в
          <span> {this.props.order.service.title}</span>
        </div>
        <div className='order-info-service-time'>
          Время заказа
          <span> {this.props.order.time}</span>
        </div>
        <div className='order-controls-join'>
          Присоеденилось к заказу
          <span>
            <span> {this.props.order.subscriber.length}</span>
          человек
          </span>
        </div>
      </div>
        <div className='order-main-controls'>
            <Button
            onClick={this.handleWantTheSameButton}
            className='order-same-button'>
            Хочу так же
          </Button>
          <Button
            onClick={this.handleOwnMenu}
            className='order-own-button'>
            Свое меню
          </Button>
        </div>
      <div className='order-controls'>
          <div
          className='order-controls-delete'
          onClick={this.handleOrderDelete}
          />
        <div
          className='order-controls-show'
          onClick={this.handleOrderShow}
        />
        <OrderModal
          order={this.props.order}
          handleCloseModal={this.handleCloseModal}
          modalIsOpen={this.state.modalIsOpen}
        />
          <div
          className='order-controls-edit'
          onClick={this.handleOrderEdit}
          />
      </div>
    </div>
  );}
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.userReducer.user,
  };
}

export default connect(mapStateToProps, dispatch => {
  return {
    deleteOrder: (id) => {
      deleteOrder(id)
      .then(() => {
        dispatch(orderDelete())
        dispatch(push(''))
      })
    },
    sameSubscriberAdd: (order, user) => {
      sameSubscriberAdd(order, user)
      .then((response) => {
        dispatch(asOwnerSubscriberAdd(response.data.order.subscriber))
        dispatch(push(''))
      })
    },
    editOrder: (order, user) => {
      getOrder(order._id)
      .then((response) =>{
        let products = [];
        response.data.dishes.forEach((product) => {
          product.amount = 0;
          response.data.dishes.forEach((pr) => {
            if (pr._id === product._id) {
              product.amount++;
            }
          })
          if (product.amount === 1) {
            products.push(product);
          }
        });
        dispatch(orderLoad(response.data))
        dispatch(cartLoad(products))
        dispatch(push(`/services/${order.service._id}`))
      })
    }
  }
})(Order);
