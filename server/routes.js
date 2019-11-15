let { getMenu } = require("./menu");
let { getOrder, addToOrder, changeOrderItem, deleteOrderItem } = require("./order");

function configRoutes(app) {
  // get the menu
  app.get("/api/menu", async (req, res) => {
    // let docs = await getAllRequests(req.db);
    let menu = getMenu();
    return res.json(menu);
  });

  // get the order
  app.get("/api/order", async (req, res) => {
    let db = req.db;

    let order = await getOrder(db);
    return res.json(order);
  });

  // change an order item
  // if the orderItem exist already, change its quantity
  // if the orderItem does not exist, create the orderItem with that quantity
  app.post("/api/order", async (req, res) => {
    let db = req.db;

    let { itemId, quantity } = req.body;
    await changeOrderItem(db, itemId, quantity);
    return res.json({ success: true });
  });

  app.post("/api/order/add", async (req, res) => {
    let db = req.db;

    let { itemId, quantity } = req.body;
    await addToOrder(db, itemId, quantity);
    return res.json({ success: true });
  });

  app.delete("/api/order", async (req, res) => {
    let db = req.db;

    let { itemId } = req.body;
    await deleteOrderItem(db, itemId);
    return res.json({ success: true });
  });
}

exports.configRoutes = configRoutes;
