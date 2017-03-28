import axios from 'axios';

export function getOrders() {
  return axios({
    method: 'get',
    url: '/api/orders',
  });
}

export function getOrder(id) {
  return axios({
    method: 'get',
    url: `/api/orders/${id}`,
  });
}

export function createOrder(order, products, user) {
  if (order._id !== '') {
    let dishes = order.dishes;
    products.map(product => {
      dishes.push(product);
    });
    return axios({
      method: 'put',
      url: `/api/orders/${order.id}`,
      data: {
        service: order.service,
        time: order.time,
        owner: order.owner,
        dishes: dishes,
        subscriber: order.subscriber,
        flag: 'ownDishes',
      }
    })
  }
  let dishes = order.dishes;
  products.map(product => {
    for (let i = 0; i < product.amount; i++) {
      dishes.push(product);
    }
  });
  return axios({
    method: 'post',
    url: '/api/orders',
    data: {
      service: order.service,
      time: order.time,
      owner: user,
      dishes: dishes,
      subscriber: [],
    }
  });
}

export function deleteOrder(id) {
  return axios({
    method: 'delete',
    url: `/api/orders/${id}`,
  });
}
