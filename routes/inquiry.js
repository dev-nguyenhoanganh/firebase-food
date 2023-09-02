const express = require("express");
const router = express.Router();
const { isAuthentication } = require("../middleware");
const inquiryController = require("../controllers/InquiryController");

router.use(isAuthentication);
router.post("/create", inquiryController.createInquiry);
router.put("/:id/update", inquiryController.updateInquiry);
router.get("/:id/detail", inquiryController.getInquiry);
router.get("/", inquiryController.getInquiries);

module.exports = router;
