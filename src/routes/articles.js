const express = require("express");
const router = express.Router();

const {
  createArticle,
  deleteArticle,
  getArticle,
  getArticleReviews,
  getArticles,
  updateArticle,
} = require("../controllers/article");

const fileUpload = require("../middlewares/fileUpload");
const { verifyAdmin } = require("./../middlewares/verifyToken");

//CREATE ARTICLE
router.post("/", verifyAdmin, fileUpload.single("image"), createArticle);

//UPDATE ARTICLE
router.put("/:id", verifyAdmin, fileUpload.single("image"), updateArticle);

//DELETE ARTICLE
router.delete("/:id", verifyAdmin, deleteArticle);

//GET ARTICLE
router.get("/find/:id", getArticle);

//GET ALL ARTICLES
router.get("/", getArticles);

//GET ARTICLE REVIEWS
router.get("/reviews/:id", verifyAdmin, getArticleReviews);

module.exports = router;