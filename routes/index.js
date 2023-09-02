const adminRoute = require("./admin");
const inquiryRoute = require("./inquiry");
const mstController = require("../controllers/MstController");
const CommonUtil = require("../utils/commonUtil");

function route(app) {
    app.use("/api/404_not_found", CommonUtil.getNotFound);
    app.use("/api/inquiry", inquiryRoute);
    app.use("/api/mst_info", mstController.getMstInfo);
    app.use("/api/home_page", mstController.getDataHomePage);
    app.use("/api", adminRoute);
}

module.exports = route;
