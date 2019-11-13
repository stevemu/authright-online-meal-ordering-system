import {get, post, } from '../api';

export async function getMenu() {
  let json = await post('/api/menu');
  return json;
}

export async function getOrder() {
  let json = await get('/api/order');
  return json;
}

export async function postOrder(itemId, quantity) {
  let json = await post('/api/order', {
    itemId,
    quantity
  });
  return json;
}

