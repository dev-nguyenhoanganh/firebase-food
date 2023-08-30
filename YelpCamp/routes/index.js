const adminRoute = require("./admin");
const inquiryRoute = require("./inquiry");
const mstController = require("../controllers/MstController");

function route(app) {
    app.use("/api/inquiry", inquiryRoute);
    app.use("/api/mst_info", mstController.getMstInfo);
    app.use("./api/home_page", mstController.getDataHomePage);
    app.use("/api", adminRoute);
}

module.exports = route;
