export async function get(url, token = null) {
  let res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  if (!res.ok) {
    throw "error for " + url;
  }

  let j = await res.json();
  return j;
}

export async function post(url, body, token = null) {
  let res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`
    }
  });
  if (!res.ok) {
    throw "error for " + url;
  }
  let json = await res.json();
  return json;
}

export async function put(url, body, token = null) {
  let res = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`
    }
  });
  if (!res.ok) {
    throw "error for " + url;
  }
  let json = await res.json();
  return json;
}


export async function del(url, body = {}, token = null) {
  let res = await fetch(url, {
    method: "DELETE",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`
    }
  });
  if (!res.ok) {
    throw "error for " + url;
  }
  let json = await res.json();
  return json;
}

export async function addToOrder(itemId, quantity) {
  let json = await put('/api/order', {
    itemId,
    quantity
  });
  return json;
}

export async function get(url, token = null) {
  let res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  if (!res.ok) {
    throw "error for " + url;
  }

  let j = await res.json();
  return j;
}

export async function post(url, body, token = null) {
  let res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`
    }
  });
  if (!res.ok) {
    throw "error for " + url;
  }
  let json = await res.json();
  return json;
}

export async function put(url, body, token = null) {
  let res = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`
    }
  });
  if (!res.ok) {
    throw "error for " + url;
  }
  let json = await res.json();
  return json;
}


export async function del(url, body = {}, token = null) {
  let res = await fetch(url, {
    method: "DELETE",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`
    }
  });
  if (!res.ok) {
    throw "error for " + url;
  }
  let json = await res.json();
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

export async function getMenu() {
  let json = await post('/api/menu');
  return json;
}
