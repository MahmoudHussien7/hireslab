const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  readingTime: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: '',
  },
  tags: {
    type: [String],
    default: [],
  },
  writer: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    }
  }
}, { timestamps: true });

module.exports = mongoose.models.Article || mongoose.model('Article', articleSchema);
