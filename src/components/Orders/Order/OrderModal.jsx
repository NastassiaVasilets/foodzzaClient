import React from 'react';

import Table from 'react-bootstrap/lib/Table';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top         : '50%',
    left        : '50%',
    right       : 'auto',
    bottom      : 'auto',
    marginRight : '-50%',
    transform   : 'translate(-50%, -50%)'
  }
};
//Использование inline стилей в реакте не считается антипаттерном, но для их реализации можешь посмотреть эту либу Radium а вообще почитаю статью https://habrahabr.ru/company/devexpress/blog/283314/
const OrderModal = (props) => {
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onAfterOpen={props.handleAfterOpenModal}
      onRequestClose={props.handleCloseModal}
      shouldCloseOnOverlayClick={false}
      style={customStyles}
      contentLabel={props.order.time}
      order={props.order}
    >
      <h1 className='showOrderModal-tittle'>Информация о заказе</h1>
      <button
        onClick={props.handleCloseModal}
        className='showOrderModal-close'>X
      </button>
      <div className='showOrderModal-service'>
        Заведение: <span>{props.order.service.title}</span>
      </div>
      <div className='showOrderModal-time'>
        Время заказа: <span>{props.order.time}</span>
      </div>
      <Table responsive className='showOrderModal-table'>
        <thead>
          <tr>
            <th>Участники</th>
            <th>Блюда</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          <tr className='showOrderModal-owner'>
            <td>{props.order.owner.name}</td>
            <td>
              {props.order.dishes.map((dish, i) => (
                <p key={i}>{dish.name}</p>
              ))}
            </td>
            <td>
              {props.order.dishes.map((dish, i) => (
                <p key={i}>{dish.price}р.</p>
              ))}
            </td>
          </tr>
          {props.order.subscriber.map(subscriber => (
            <tr key={subscriber._id}>
              <td>{subscriber.person.name}</td>
              <td>{subscriber.dishes.map((dish, i) => (
                <p key={i}>{dish.name}</p>
              ))}
              </td>
              <td>{subscriber.dishes.map((dish, i) => (
                <p key={i}>{dish.price}р.</p>
              ))}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Modal>
  );
}

export default OrderModal;
