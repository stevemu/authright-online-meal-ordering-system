async function getOrder(db) {
  const collection = db.collection("order");
  let docs = await collection.find({}).toArray();
  return docs;
}
exports.getOrder = getOrder;

async function addToOrder(db, itemId, quantity) {
  // if found item already in the order, increase the quantity
  // otherwise, create a new order item

  const collection = db.collection("order");
  let existingOrderItem = await collection.findOne({ itemId });

  if (existingOrderItem) {
    existingOrderItem.quantity += quantity;
    await collection.replaceOne({ itemId }, existingOrderItem);
  } else {
    let newOrderItem = {
      itemId,
      quantity
    };
    await collection.insertOne(newOrderItem);
  }
}

exports.addToOrder = addToOrder;

// if the orderItem exist already, change its quantity
// if the orderItem does not exist, create the orderItem with that quantity
async function changeOrderItem(db, itemId, quantity) {
  const collection = db.collection("order");
  let existingOrderItem = await collection.findOne({ itemId });

  if (existingOrderItem) {
    existingOrderItem.quantity = quantity;
    await collection.replaceOne({ itemId }, existingOrderItem);
  } else {
    let newOrderItem = {
      itemId,
      quantity
    };
    await collection.insertOne(newOrderItem);
  }
}
exports.changeOrderItem = changeOrderItem;

async function deleteOrderItem(db, itemId) {
  const collection = db.collection("order");
  await collection.remove({itemId});
}
exports.deleteOrderItem = deleteOrderItem;
