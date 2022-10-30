const express = require('express')
const Question = require('../models/Question')
const router = express.Router()
const { getAllQuestions, getRandomQuestions, createQuestion } = require('../controllers/QuestionController')

router.get('/', getAllQuestions)

router.get('/random', getRandomQuestions)

router.post('/', createQuestion)

module.exports = router