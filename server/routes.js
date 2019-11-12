let {getMenu} = require("./menu");
let {getOrder, addToOrder} = require("./order");

function configRoutes(app) {
  // get the menu
  app.get("/api/menu", async (req, res) => {
    // let docs = await getAllRequests(req.db);
    let menu = getMenu();
    return res.json(menu);
  });

  // add a thing to the order
  app.put("/api/order", async (req, res) => {
    let db = req.db;

    let {itemId, quantity} = req.body;
    await addToOrder(db, itemId, quantity);
    return res.json({success: true});
  });

  // get the order
  app.get("/api/order", async (req, res) => {
    let db = req.db;

    let order = await getOrder(db);
    return res.json(order);
  });
}

exports.configRoutes = configRoutes;
