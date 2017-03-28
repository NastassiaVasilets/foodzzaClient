import React, { PropTypes } from 'react';
import { Col } from 'react-bootstrap';

import Table from 'react-bootstrap/lib/Table';

function ServiceDetail(props) {
  return (
    <div className='serviceDetail'>
      <Col xs={12} md={3} lg={2}>
        <div className='serviceDetail-logo-col'>
          <img className='serviceDetail-logo' src={props.service.logo}/>
        </div>
      </Col>
      <Col xs={12} md={6} lg={8}>
        <div className='serviceDetail-info'>
          <div className='serviceDetail-info-title'>{props.service.title}</div>
          <Table>
            <thead>
              <td>
              </td>
              <td>
              </td>
            </thead>
            <tbody>
              <tr>
                <td className='td-title'>Кухня</td>
                <td>{props.service.kitchen}</td>
              </tr>
              <tr>
                <td className='td-title'>Минимальная сумма заказа:</td>
                <td>{props.service.mincost} руб.</td>
              </tr>
              <tr>
                <td className='td-title'>Стоимость доставки:</td>
                <td>{props.service.costDelivery}</td>
              </tr>
              <tr>
                <td className='td-title'>Гарантированное время доставки:</td>
                <td>{props.service.departureTime}</td>
              </tr>
              <tr>
                <td>{props.service.phone}</td>
                <td />
              </tr>
            </tbody>
          </Table>
        </div>
      </Col>
      <Col xs={12} md={3} lg={2}>
        <div className='serviceDetail-rate'>
          <div className='serviceDetail-like'>
            <div className='ico' />
            <div className='value'>40%</div>
          </div>
          <div className='serviceDetail-dislike'>
            <div className='ico' />
            <div className='value'>60%</div>
          </div>
        </div>
      </Col>
    </div>
  );
}

export default ServiceDetail;
