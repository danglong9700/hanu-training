const mongoose = require('mongoose')
const Question = require('./Question')

const AttemptSchema = new mongoose.Schema({
  questions: {
    type: [Object],
    required: true,
  },
  completed: {
    type: Boolean,
    default: false
  }, 
  startedAt: {
    type: Date,
    default: Date.now()
  }
  }
)

module.exports = mongoose.model('attempt', AttemptSchema)