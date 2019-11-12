// let {checkJwt} = require("./util/auth");
// let {getAllRequests, createRequest} = require("./requests");

function configRoutes(app) {
  // get the menu
  app.get("/api/menu", async (req, res) => {
    // let docs = await getAllRequests(req.db);
    return res.json({});
  });

  // add something to the order
  app.put("/api/order", async (req, res) => {
    // let docs = await getAllRequests(req.db);
    return res.json({});
  });

  // get the order
  app.get("/api/order", async (req, res) => {
    // let docs = await getAllRequests(req.db);
    return res.json({});
  });
}

exports.configRoutes = configRoutes;
