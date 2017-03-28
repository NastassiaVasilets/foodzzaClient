import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { addOrders, addOrdersFail } from '../../actions/ordersActions';
import { getOrders } from '../../api/ordersApi';

import { Grid, Row, Col } from 'react-bootstrap';

import Order from './Order/Order.jsx';

class Orders extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getOrders();
  }
  render() {
    return (
      <Grid>
        <Row className='showGrid'>
          <Col xs={12} md={2} lg={3} />
          <Col xs={12} md={8} lg={6}>
            <div className='listView'>
            {this.props.orders.map(order => (
              <Order
              order={order}
              key={order._id}
              />
            ))
            }
            </div>
          </Col>
          <Col xs={12} md={2} lg={3} />
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    orders: state.ordersReducer.orders,
  };
}
export default connect(
  mapStateToProps,
  dispatch => {
    return {
      getOrders: () => {
        getOrders()
        .then((response) => {
          dispatch(addOrders(response.data))
        },
        (response) => {
          dispatch(addOrdersFail(response))
        }
      )}
    };
  }
)(Orders);
