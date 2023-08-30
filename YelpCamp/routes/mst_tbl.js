const express = require("express");
const router = express.Router();
const mstController = require("../controllers/MstController");

router.get("/mst_info", mstController.getMstInfo);

module.exports = router;
