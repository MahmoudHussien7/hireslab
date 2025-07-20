const express = require("express")
const router = express.Router()
const {
  getAllArticles,
  deleteArticle,
  updateArticle,
  createArticle,
  getArticleById,
} = require("../controllers/articles.controller.js")
const authMiddleware = require("../middleware/auth.js")
const firebaseImageUploader = require("../middleware/imageUpload")

router.get("/", getAllArticles)
router.get("/:id", getArticleById)

router.post("/", authMiddleware, firebaseImageUploader, createArticle)
router.delete("/:id", authMiddleware, deleteArticle)
router.put("/:id", authMiddleware, updateArticle)

module.exports = router
// routes/article.route.js (This file is no longer needed, replaced by app/api/articles/*)
