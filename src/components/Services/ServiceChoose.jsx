import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { serviceChoose } from '../../actions/orderActions';

import TimePicker from 'react-bootstrap-time-picker';
import Button from 'react-bootstrap/lib/Button';

class ServiceChoose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialTime: this.props.initialTime
    };
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleServiceChooseClick = this.handleServiceChooseClick.bind(this);
  }
  handleTimeChange(initialTime) {
    this.setState({ initialTime });
  }
  handleServiceChooseClick() {
    this.props.choose(this.props.service, this.state.initialTime);
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className='serviceFormChoose'>
        <p>Введите время: </p>
        <TimePicker
          onChange={this.handleTimeChange}
          value={this.state.initialTime}
        />
        <Button
        onClick={this.handleServiceChooseClick}
        className='serviceFormChoose-button'
        >Сделать заказ</Button>
      </form>
    );
  }
}

ServiceChoose.defaultProps = {
  initialTime: 0
};

export default connect(null, dispatch => {
  return {
    choose: (service, time) => {
      dispatch(
        serviceChoose(service, time)
      );
      dispatch(
        push(`services\/${service._id}`)
      );
    }
  };
})(ServiceChoose);
