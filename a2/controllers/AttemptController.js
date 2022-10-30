const Attempt = require('../models/Attempt')
const Question = require('../models/Question')

const createAttempt = async (req, res, next) => {
  try {
    const questions = await Question.find().limit(10)
    const newAttempt = new Attempt({
      questions
    })
    await newAttempt.save()
    res.status(201).json({questions, _id: newAttempt._id})
  } catch (error) {
    next(error)
  }
}

const submitAttempt = async (req, res, next) => {
  const attemptId = req.params.id;
  const userAnswers = req.body.answers;
  let correctAnswersObject = {};
  let userAnswersObject = {};
  let score = 0;
  let scoreText = '';
  try {
    const currentAttempt = await Attempt.findById(attemptId)
    const attemptQuestions = currentAttempt.questions
    
    attemptQuestions.forEach((question) => {
      const {_id, correctAnswer} = question
      correctAnswersObject[_id] = correctAnswer
    })
    
    for (const questionId in userAnswers) {
      userAnswersObject[questionId] = userAnswers[questionId]
      if (userAnswersObject[questionId] == correctAnswersObject[questionId]) {
        score++;
      }
    }

    if (score < 5) {
      scoreText = "Practice more to improve it :D";
    } else if (score < 7) {
      scoreText = "Good, keep up!";
    } else if (score < 9) {
      scoreText = "Well done!";
    } else {
      scoreText = "Good job!";
    } 

    res.status(200).json({attemptId, correctAnswers: correctAnswersObject, score, scoreText, questions: attemptQuestions, answers: userAnswers})
  } catch (error) {
    next(error)
  }
}


module.exports = { createAttempt, submitAttempt }

