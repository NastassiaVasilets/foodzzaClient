import React, { PropTypes } from 'react';
import Table from 'react-bootstrap/lib/Table';

import ServiceChoose from './ServiceChoose.jsx';

function Service(props) {
  return (
    <div className='service-item'>
      <img className='service-item-logo' src={props.service.logo} />
      <div className='service-item-info'>
        <a href='#' className='service-item-title'>{props.service.title}</a>
        <Table responsive>
          <tbody>
            <tr>
              <td className='td-title'>Кухня</td>
              <td>{props.service.kitchen}</td>
            </tr>
            <tr>
              <td className='td-title'>Минимальная стоимость заказа</td>
              <td>{props.service.mincost}</td>
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
              <td className='td-title'>Время работы:</td>
              <td>{props.service.workTime}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <ServiceChoose service={props.service}/>
    </div>
  );
}

export default Service;
