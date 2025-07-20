// controllers/articleController.js
const Article = require("../models/article")

// Fetch all articles
exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find() // Find all articles
    res.status(200).json({
      success: true,
      data: articles,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Server Error",
    })
  }
}

// Fetch an article by ID
exports.getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id) // Find article by ID
    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article not found",
      })
    }
    res.status(200).json({
      success: true,
      data: article,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "Server Error",
    })
  }
}
exports.createArticle = async (req, res) => {
  try {
    const { name, date, readingTime, content, writer, tags, category, image } = req.body

    // Parse JSON strings if needed
    const parsedWriter = typeof writer === "string" ? JSON.parse(writer) : writer
    const parsedTags = typeof tags === "string" ? JSON.parse(tags) : tags

    // Validation
    if (
      !name ||
      !date ||
      !readingTime ||
      !image ||
      !content ||
      !parsedWriter?.name ||
      !parsedWriter?.image ||
      !parsedWriter?.about
    ) {
      return res.status(400).json({
        success: false,
        message: "All article fields are required.",
      })
    }

    const newArticle = new Article({
      name,
      date,
      readingTime,
      image,
      content,
      writer: parsedWriter,
      tags: parsedTags,
      category,
    })

    await newArticle.save()

    res.status(201).json({
      success: true,
      data: newArticle,
    })
  } catch (error) {
    console.error("Error creating article:", error.message)
    res.status(500).json({
      success: false,
      message: "Server Error",
    })
  }
}

exports.updateArticle = async (req, res) => {
  try {
    const { name, date, readingTime, image, content, writer, tags, category } = req.body

    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.id,
      { name, date, readingTime, image, content, writer, tags, category },
      { new: true, runValidators: true },
    )

    if (!updatedArticle) {
      return res.status(404).json({
        success: false,
        message: "Article not found",
      })
    }

    res.status(200).json({
      success: true,
      data: updatedArticle,
    })
  } catch (error) {
    console.error("Error updating article:", error.message)
    res.status(500).json({
      success: false,
      message: "Server Error",
    })
  }
}
exports.deleteArticle = async (req, res) => {
  try {
    const deletedArticle = await Article.findByIdAndDelete(req.params.id)
    if (!deletedArticle) {
      return res.status(404).json({
        success: false,
        message: "Article not found",
      })
    }

    res.status(200).json({
      success: true,
      message: "Article deleted successfully",
    })
  } catch (error) {
    console.error("Error deleting article:", error)
    res.status(500).json({
      success: false,
      message: "Server Error",
    })
  }
}
