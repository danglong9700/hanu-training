const Question = require('../models/Question')

const getAllQuestions = async (req, res, next) => {
  try {
    const allQuestions = await Question.find().limit(req.query.limit)
    res.status(200).json({ success: true, message: 'Get all questions', allQuestions})
  } catch (error) {
    next(error)
  }
}

const createQuestion = async (req, res, next) => {
  try {
    const {text, answers, correctAnswer} = req.body
    const newQuestion = new Question({text, answers, correctAnswer})
    await newQuestion.save()
    res.status(200).json({ success: true, message: 'Create a question', newQuestion})
  } catch (error) {
    next(error)
  }
}

const getRandomQuestions = async (req, res, next) => {
  try {
    const question = await req.db.hotels.aggregate([
      { $sample: { size: 1 } },
    ]);
    console.log(question)
  } catch (error) {
    next(error)
  }
}

module.exports = { getAllQuestions, createQuestion, getRandomQuestions }