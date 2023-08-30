const express = require("express");
const router = express.Router();
const { isAuthentication } = require("../middleware");
const adminController = require("../controllers/AdminController");

router.post("/login", adminController.login);
router.post("/forget_password", adminController.forgetPassword);
router.post("/reset_password", adminController.resetPassword);

router.use(isAuthentication);
router.get("/logout", adminController.logout);
router.post("/token", adminController.refreshToken);

router.get("/post", adminController.getPosts);
router.get("/post/:id/detail", adminController.getPost);
router.put("/post/:id/update", adminController.updatePost);
router.post("/post/create", adminController.createPost);

module.exports = router;
