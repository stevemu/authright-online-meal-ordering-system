import { get, post, } from '../api';

export async function getMenu() {
  let json = await get('/api/menu');
  let parsedjson = {};
  for (let i = 0, tem; i < json.length; i++) {
    tem = json[i];
    parsedjson[tem.itemId] = tem;
  }
  return parsedjson;
}

export async function getOrder() {
  let json = await get('/api/order');
  let parsedjson = {};
  for (let i = 0, tem; i < json.length; i++) {
    tem = json[i];
    parsedjson[tem.itemId] = tem;
  }
  return parsedjson;
}

export async function postOrder(itemId, quantity) {
  let json = await post('/api/order', {
    itemId,
    quantity
  });
  return json;
}

