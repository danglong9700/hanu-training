const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  answers: {
    type: [String],
    required: true
  },
  correctAnswer: {
    type: Number,
    required: true,
    enum: [0, 1, 2, 3]
  }
})

module.exports = mongoose.model('questions', QuestionSchema)