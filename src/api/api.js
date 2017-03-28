import axios from 'axios';

export function getKitchens() {
  return axios({
    method: 'get',
    url: '/api/kitchens',
  });
}

export function sameSubscriberAdd(order, user) {
  if (user) {
    return axios({
      method: 'put',
      url: `/api/orders/${order._id}`,
      data: {
        service: order.service,
        time: order.time,
        owner: order.owner,
        dishes: order.dishes,
        subscriber: order.subscriber,
        user: user,
        flag: 'same',
      }
    });
  }
}
