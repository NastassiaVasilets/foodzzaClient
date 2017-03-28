import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { addServices, addKitchens, addServiceFail, addKitchensFail } from '../../actions/servicesActions';
import { getServices } from '../../api/servicesApi';
import { getKitchens } from '../../api/api';

import { Grid, Row, Col } from 'react-bootstrap';
import Service from './Service.jsx';

import './Services.css';

class Services extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getServices();
    this.props.getKitchens();
  }
  render() {
    return (
      <Grid>
        <Row className='showGrid'>
          <Col xs={12} md={4}>
          <div className='sidebar-menu'>
            <p className='sidebar-menu__title'>Выберите кухню</p>
            <ul>{this.props.kitchens.map((kitchen) =>
              <li key={kitchen._id} className='checkbox'>
                <label>
                  <input type='checkbox' />
                  {kitchen.country}
                </label>
              </li>
              )}
            </ul>
          </div>
          </Col>
          <Col xs={12} md={8}>
            <div className='listView'>
              {this.props.services.map(service => (
                <Service
                service={service}
                key={service._id}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}
function mapStateToProps(state) {
  return {
    services: state.servicesReducer.services,
    kitchens: state.servicesReducer.kitchens,
  };
}

export default connect(
  mapStateToProps,
  dispatch => {
    return {
      getServices: () => {
        getServices()
        .then((response) => {
          dispatch(addServices(response.data))
        },
        (response) => {
          dispatch(addServiceFail(response))
        })
      },
      getKitchens: () => {
        getKitchens()
        .then((response) => {
          dispatch(addKitchens(response.data))
        },
        (response) => {
          dispatch(addKitchensFail(response))
        })
      }
    };
  }
)(Services);
