const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blogController");
router.get("/blog-create", blogController.create);
router.get("/blog-read", blogController.read);
router.get("/blog-delete", blogController.delete);
router.get("/blog-update", blogController.update);

const commentController = require("../controllers/commentController");
router.get("/comment-create", commentController.create);
router.get("/comment-read", commentController.read);
router.get("/comment-delete", commentController.delete);
router.get("/comment-update", commentController.update);

const messageController = require("../controllers/messageController");
router.get("/message-create", messageController.create);
router.get("/message-read", messageController.read);
router.get("/message-delete", messageController.delete);
router.get("/message-update", messageController.update);

const portfolioController = require("../controllers/portfolioController");
router.get("/portfolio-create", portfolioController.create);
router.get("/portfolio-read", portfolioController.read);
router.get("/portfolio-delete", portfolioController.delete);
router.get("/portfolio-update", portfolioController.update);

const productController = require("../controllers/productController");
router.get("/product-create", productController.create);
router.get("/product-read", productController.read);
router.get("/product-delete", productController.delete);
router.get("/product-update", productController.update);


module.exports = router;